# Vitest Configuration for SharePoint Framework (SPFx) Projects

This guide documents the complete setup required to enable **Vitest** unit testing in an SPFx solution.

---

## 1. package.json — Development Dependencies

Add the following `devDependencies` and `scripts` to your `package.json`:

### Scripts

```json
"scripts": {
  "test": "vitest run --coverage",
  "test:local": "vitest --ui"
}
```

### Dev Dependencies

```json
"devDependencies": {
  "vitest": "^2.1.9",
  "vite-tsconfig-paths": "^4.3.2",
  "@vitejs/plugin-react": "^4.7.0",
  "@vitest/coverage-v8": "^2.1.9",
  "@vitest/ui": "^2.1.9",
  "jsdom": "^24.1.3",
  "@testing-library/jest-dom": "5.17",
  "@testing-library/react": "^12.1.5",
  "@testing-library/user-event": "^14.6.1"
}
```

| Package | Purpose |
|---------|---------|
| `vitest` | Core test runner (Vite-native, fast, ESM-first) |
| `@vitejs/plugin-react` | Enables JSX/TSX transformation for React components |
| `vite-tsconfig-paths` | Resolves TypeScript path aliases defined in `tsconfig.json` |
| `@vitest/coverage-v8` | Code coverage via V8's built-in profiler |
| `@vitest/ui` | Browser-based interactive test UI (`vitest --ui`) |
| `jsdom` | Simulated browser DOM environment for Node.js |
| `@testing-library/jest-dom` | Custom matchers (e.g., `.toBeInTheDocument()`) |
| `@testing-library/react` | Utilities to render and query React components |
| `@testing-library/user-event` | Simulates realistic user interactions (click, type, etc.) |

> **Note:** Use `@testing-library/react@^12.x` when your SPFx project targets React 17. For React 18+, use `@testing-library/react@^14.x`.

Install with:

```bash
npm install -D vitest vite-tsconfig-paths @vitejs/plugin-react @vitest/coverage-v8 @vitest/ui jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

---

## 2. tsconfig.json — TypeScript Configuration

Update your `tsconfig.json` to include Vitest type definitions for global API intellisense:

```json
{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json",
  "compilerOptions": {
    "types": [
      "vitest/globals",
      "@testing-library/jest-dom"
    ]
  }
}
```

| Addition | Purpose |
|----------|---------|
| `vitest/globals` | Provides types for `describe`, `it`, `expect`, `vi` without explicit imports |
| `@testing-library/jest-dom` | Provides types for custom matchers like `.toBeInTheDocument()` |

---

## 3. vitest.config.ts — Vitest Configuration File

Create `vitest.config.ts` at the project root:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()] as any,
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./tests/setupTests.ts"],
        coverage: {
            enabled: true,
            provider: "v8",
            reporter: ["text-summary", "cobertura", "html", "lcov"],
            cleanOnRerun: true,
            reportsDirectory: "./tests/coverage",
            include: ["**/src/**/*.{ts,tsx}"],
            exclude: [
                "**/node_modules/**",
                "**/tests/**",
            ],
        },

        alias: {
            "@src/": new URL("./src/", import.meta.url).pathname,
        },

        reporters: ["junit", "default"],
        outputFile: {
            junit: "./tests/reports/junit.xml",
        },
    },
});
```

### Configuration Breakdown

| Option | Value | Purpose |
|--------|-------|---------|
| `plugins` | `[react(), tsconfigPaths()]` | Enables React JSX transform and resolves TS path aliases |
| `globals` | `true` | Exposes `describe`, `it`, `expect` globally (no imports needed) |
| `environment` | `"jsdom"` | Simulates a browser DOM for component rendering |
| `setupFiles` | `["./tests/setupTests.ts"]` | Runs before each test file for global setup |
| `coverage.provider` | `"v8"` | Uses V8 engine for fast, accurate coverage |
| `coverage.reporter` | `[...]` | Outputs multiple formats for CI and local review |
| `coverage.include` | `["**/src/**/*.{ts,tsx}"]` | Only measures source files, not tests or config |
| `alias` | `@src/ → ./src/` | Resolves custom path aliases used in SPFx components |
| `reporters` | `["junit", "default"]` | Generates JUnit XML for CI pipelines + console output |

---

## 4. tests/setupTests.ts — Global Test Setup

Create `tests/setupTests.ts`:

```ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatically unmount and cleanup DOM after the test is finished.
// This prevents memory leaks and ensures a clean state for each test.
afterEach(() => {
    cleanup();
});
```

### What This Does

1. **Imports `@testing-library/jest-dom`** — Extends Vitest's `expect` with DOM-specific matchers (e.g., `.toBeVisible()`, `.toHaveTextContent()`).
2. **Calls `cleanup()` after each test** — Unmounts rendered React components and clears the jsdom document, preventing test pollution.

---

## 5. Project Structure

Place test files in the `tests/` directory, mirroring your component structure:

```
tests/
├── setupTests.ts
├── components/
│   ├── atoms/
│   │   └── SpfxVitest.test.tsx
│   ├── molecules/
│   │   └── SearchBox.test.tsx
│   └── organisms/
│       └── UserProfileCard.test.tsx
├── coverage/          (generated)
└── reports/
    └── junit.xml      (generated)
```

---

## 6. Running Tests

| Command | Description |
|---------|-------------|
| `npm run test` | Run all tests once with coverage |
| `npm run test:local` | Launch interactive Vitest UI in browser |

---

## 7. Example Test File

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MyComponent } from "../../src/webparts/spfxVitest/components/atoms/MyComponent";

describe("MyComponent", () => {
    it("renders the greeting text", () => {
        render(<MyComponent message="Hello SPFx" />);
        expect(screen.getByText("Hello SPFx")).toBeInTheDocument();
    });
});
```

---

## Summary of Files Changed/Created

| File | Action |
|------|--------|
| `package.json` | Add devDependencies + test scripts |
| `tsconfig.json` | Add `vitest/globals` and `@testing-library/jest-dom` to `types` |
| `vitest.config.ts` | Create — full Vitest configuration |
| `tests/setupTests.ts` | Create — global test setup with cleanup |
