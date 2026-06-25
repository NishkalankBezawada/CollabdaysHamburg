# Speaker Notes: tsconfig.json

## What We Change:

We add types to the `types` array in tsconfig.json. Here's what each one does:

- **`webpack-env`** — Already there. Tells TypeScript about webpack stuff (require, module, etc.)
- **`@testing-library/jest-dom`** — Adds types for custom matchers like `toBeInTheDocument()`
- **`vitest/globals`** — Adds types for `describe`, `it`, `expect` so you get autocomplete without importing them

```json
"types": [
  "webpack-env",
  "@testing-library/jest-dom",
  "vitest/globals"
]
```

## Why This Matters:

- Without these types, TypeScript will show red squiggly lines under your test code
- You'd have to write `import { describe, it, expect } from 'vitest'` in every test file
- With `vitest/globals`, those functions are just available everywhere — cleaner code

"One small change in tsconfig, big improvement in developer experience."
