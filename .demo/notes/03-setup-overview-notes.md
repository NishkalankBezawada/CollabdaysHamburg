# Speaker Notes: Setup Overview

## The Good News:

- You only need to touch **4 things** to get Vitest working in an SPFx project. That's it. Let me walk you through each one.

### Step 1: package.json
- We add about 8-9 packages as dev dependencies. These include vitest itself, React support, coverage tools, testing library, and jsdom.
- We also add 2 npm scripts: one to run tests with coverage (for CI), one to run the visual UI (for local dev).

### Step 2: tsconfig.json
- One small change: add `"vitest/globals"` to the types array.
- This tells TypeScript about describe, it, and expect — so you get autocomplete without importing anything.

### Step 3: vitest.config.ts
- This is the main config file. It tells Vitest:
  - Use jsdom to fake a browser (so your React components can render)
  - Turn on global test functions
  - Where to find your tests and source files
  - How to generate coverage reports

### Step 4: tests/setupTests.ts
- This file runs before every test.
- It loads jest-dom matchers (like `toBeInTheDocument()`) and cleans up React components after each test to prevent memory leaks.

## That's it!
"4 steps, and you have a fully working test setup. Now let's see it in action!"
