# Speaker Notes: Vitest NPM Packages

## What We Install in package.json

Let me explain each package and why we need it:

### The Core (Vitest itself)
- **vitest** — The test runner. This is the main thing.
- **@vitejs/plugin-react** — Lets Vitest understand React/JSX code.
- **@vitest/coverage-v8** — Generates coverage reports (how much of your code is tested).
- **@vitest/ui** — Gives you a visual web UI to browse and run tests.

### Testing Helpers (React Testing Library)
- **@testing-library/jest-dom** — Adds useful assertions like `toBeInTheDocument()`, `toHaveClass()`.
- **@testing-library/react** — Lets you render React components in tests and query them.
- **@testing-library/user-event** — Simulates user clicks, typing, etc.

### Environment
- **jsdom** — A fake browser DOM that runs in Node.js. Your React components need a DOM to render — jsdom provides that without opening a real browser.
- **vite-tsconfig-paths** — Makes TypeScript path aliases (like `@src/...`) work in Vitest.

### The Scripts We Add

```json
"test": "vitest run --coverage"       ← Run all tests once, show coverage (for CI/CD)
"test:local": "vitest --ui"           ← Open the visual UI for local development
```

"That's 9 packages and 2 scripts. Copy-paste friendly!"
