# Speaker Notes: Demo - Run Tests in Terminal

"Let's run our tests and see everything in action."

I'm running `npm run test` — which calls `vitest run --coverage` under the hood.

Here's what's happening behind the scenes:

1. **Vitest starts up** and creates a jsdom environment — that's a fake browser so our React components can render without opening Chrome.

2. **setupTests.ts runs first** — it loads our custom matchers and sets up cleanup.

3. **Test files are found** — Vitest looks in the `tests/` folder and runs each test file.

4. **Tests execute** — Each test renders a component, checks something, then cleans up.

5. **Coverage is calculated** — V8 tracks which lines of source code were actually hit by our tests.

You might see some warnings about Vite's CJS build or Dart Sass — ignore those, they don't affect anything.

"And there we go — all tests pass! You can see the coverage summary showing how much of our code is tested. Notice we're testing at all three levels: atoms, molecules, and organisms."

"In the terminal output, you can also see our console.log messages from the tests — those help you follow what each test is doing step by step."
