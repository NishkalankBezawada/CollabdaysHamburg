# Vitest Configuration Guide for SPFx Projects

## 1. package.json — Development Dependencies

Add the following `devDependencies` to your `package.json`:

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

Add the following `scripts` to your `package.json`:

```json
"scripts": {
  "test": "vitest run --coverage",
  "test:local": "vitest --ui"
}
```

---

## 2. tsconfig.json — TypeScript Configuration

Add `"vitest/globals"` to the `types` array in `compilerOptions` to enable global test function intellisense:

```json
{
  "extends": "./node_modules/@microsoft/spfx-web-build-rig/profiles/default/tsconfig-base.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  }
}
```

---

## 3. vitest.config.ts — Vitest Configuration File

Create a `vitest.config.ts` file at the project root:

```typescript
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

### Key configuration choices:

| Setting | Purpose |
|---------|---------|
| `globals: true` | Enables `describe`, `it`, `expect` without imports |
| `environment: "jsdom"` | Simulates a browser DOM for React component testing |
| `setupFiles` | Runs global setup (cleanup, matchers) before each test file |
| `tsconfigPaths` | Resolves TypeScript path aliases (e.g., `@src/`) |
| `@vitejs/plugin-react` | Enables JSX/TSX transformation for React components |
| `coverage.provider: "v8"` | Uses V8's built-in code coverage for fast instrumentation |

---

## 4. tests/setupTests.ts — Global Test Setup

Create a `tests/setupTests.ts` file:

```typescript
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatically unmount and cleanup DOM after the test is finished.
// This prevents memory leaks and ensures a clean state for each test.
afterEach(() => {
    cleanup();
});
```

### What this does:

- **`@testing-library/jest-dom`** — Adds custom matchers like `.toBeInTheDocument()`, `.toHaveClass()`, etc.
- **`cleanup()`** — Unmounts React components after each test to prevent DOM leakage between tests.

---

## 5. Running Tests

```bash
# Run tests with coverage report
npm run test

# Run tests with interactive UI (browser-based)
npm run test:local
```
