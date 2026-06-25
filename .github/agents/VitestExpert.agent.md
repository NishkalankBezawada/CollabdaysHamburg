---
name: VitestExpert
description: vitest agent that can be used to set up and configure vitest for SPFx projects.
argument-hint: The inputs this agent expects,"a task to implement" or "a question to answer".  e.g., "Apply vitest unit testing setup and configurations".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

# Vitest Configuration Guide for SharePoint SPFx Projects

This comprehensive guide provides all the necessary changes to configure Vitest testing framework for your SharePoint Framework (SPFx) project.

## 1. Package.json Updates

### Add Development Dependencies

Add the following packages to your `package.json` under the `devDependencies` section:

```json
{
  "devDependencies": {
    "vitest": "^2.1.8",
    "@vitejs/plugin-react": "^4.3.4",
    "@vitest/coverage-v8": "^2.1.8",
    "@vitest/ui": "^2.1.8",
    "vite-tsconfig-paths": "^4.2.0",
    "@testing-library/jest-dom": "5.17",
    "@testing-library/react": "^12.1.5",
    "@testing-library/user-event": "^14.4.3",
    "jsdom": "^24.0.0"
  }
}
```

### Add NPM Scripts

Add these test scripts to the `scripts` section of your `package.json`:

```json
{
  "scripts": {
    "test": "vitest run --coverage",
    "test:local": "vitest --ui"
  }
}
```

## 2. vitest.config.ts File

Create a new file `vitest.config.ts` in the root directory of your project:

```typescript
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],

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

| Setting | Purpose |
|---------|---------|
| `plugins` | Enables React JSX transformation and TypeScript path resolution |
| `globals: true` | Makes Vitest globals (describe, it, expect) available without imports |
| `environment: "jsdom"` | Uses jsdom to simulate browser environment for DOM testing |
| `setupFiles` | Runs setup configuration before each test suite |
| `coverage.enabled` | Enables code coverage collection |
| `coverage.provider` | Uses V8 for fast, built-in coverage reporting |
| `coverage.reporter` | Generates multiple coverage report formats |
| `alias` | Enables clean imports using @src/ prefix |
| `reporters` | Generates both console output and JUnit XML for CI/CD |

## 3. tests/setupTests.ts File

Create a `tests` directory in your project root, then create `setupTests.ts`:

```typescript
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Automatically unmount and cleanup DOM after the test is finished.
// This prevents memory leaks and ensures a clean state for each test.
afterEach(() => {
    cleanup();
});
```

### Setup File Features

| Feature | Purpose |
|---------|---------|
| `@testing-library/jest-dom` | Adds custom DOM matchers like `toBeInTheDocument()` |
| `cleanup()` | Automatically unmounts React components after each test |
| `matchMedia` mock | Prevents errors when components use CSS media queries |
| `vi.fn()` | Vitest's function mocking utility for creating mock functions |
