---
theme: default
layout: default
---

# What is Vitest?

- A **Vite-native** unit testing framework
- Drop-in Jest replacement (compatible API)
- Blazing fast — uses Vite's transform pipeline
- Built-in: code coverage, UI, watch mode, TypeScript support

## Why Vitest for SPFx?

| Feature | Jest (Heft) | Vitest |
|---------|-------------|--------|
| Speed | Slow cold starts | Instant HMR-like |
| ESM | Workarounds needed | Native |
| Config | Complex (rig-based) | Simple `vitest.config.ts` |
| UI | None | `vitest --ui` |
| Coverage | Extra setup | Built-in (`@vitest/coverage-v8`) |

---
