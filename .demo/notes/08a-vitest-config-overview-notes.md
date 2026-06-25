# Speaker Notes: vitest.config.ts — Full Overview

"This is the vitest.config.ts file — the heart of our test setup. Everything Vitest needs to know lives here."

"Let me show you the whole file first so you get the big picture. It's only about 33 lines — pretty short for all the power it gives us."

"We import three things at the top:"
- `react` — the Vite plugin for React/JSX support
- `defineConfig` — a helper from Vitest that gives us autocomplete
- `tsconfigPaths` — makes our TypeScript path aliases work

"Then we have one config object with two main parts:"
1. **plugins** — what tools Vitest uses to process our code
2. **test** — all the test-specific settings (environment, coverage, aliases, reporters)

"Let me walk you through each section one by one..."
