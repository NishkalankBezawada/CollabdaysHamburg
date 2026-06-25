# Speaker Notes: Test Commands

## Two Commands, Two Purposes:

- **`npm run test`** → Runs `vitest run --coverage`
  - Runs all your tests once and exits
  - Shows a coverage report at the end
  - Use this in CI/CD pipelines or before pushing code

- **`npm run test:local`** → Runs `vitest --ui`
  - Opens a visual test runner in your browser
  - Watches your files — re-runs tests when you save
  - Great for development — instant feedback as you code

"One for CI, one for dev. That's all you need."
