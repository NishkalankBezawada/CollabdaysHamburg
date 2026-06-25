# Demo Commands Quick Reference

Use this as a cheat-sheet during the live demo.

---

## 1. Install Vitest Packages (Manual Demo)

```bash
npm install --save-dev vitest @vitejs/plugin-react @vitest/coverage-v8 @vitest/ui @testing-library/jest-dom@5.17 @testing-library/react@^12.1.5 @testing-library/user-event jsdom vite-tsconfig-paths
```

---

## 2. Run Tests with Coverage

```bash
npm test
```

This runs: `vitest run --coverage`

---

## 3. Run Tests with UI (Local Development)

```bash
npm run test:local
```

This runs: `vitest --ui` — opens a browser-based test runner at `http://localhost:51204/__vitest__/`

---

## 4. Run Tests in Watch Mode

```bash
npx vitest --watch
```

---

## 5. Run a Single Test File

```bash
npx vitest run tests/components/SpfxVitest.test.tsx
```

---

## 6. Reset Project (for re-demo)

To reset the project to the "blank" state for the Copilot automation demo:

```bash
git stash
```

Or to restore after:

```bash
git stash pop
```

---

## 7. GitHub Copilot Prompt (copy-paste ready)

```
I need to configure Vitest for a new SharePoint Framework (SPFx) project to enable unit testing. The goal is to set up Vitest unit testing.

Please generate the following required changes for my SPFx solution:

1. package.json update: List all necessary development dependencies (e.g., vitest, testing utilities, environment setup) that need to be added.
2. tsconfig.json update: Generate the necessary additions to the types array and configuration to ensure proper TypeScript support and intellisense with Vitest.
3. vitest.config.ts file: Generate the complete content for the new vitest.config.ts file, ensuring it handles common SPFx project requirements (e.g., environment, test paths, dependency management).
4. tests/setupTests.ts file: Generate the complete content for the new tests/setupTests.ts file, configured for global testing setup in the SPFx environment.
```

---

## 8. Verify Everything Works

```bash
npm install
npm test
```

Expected: All 6 tests pass with coverage report.
