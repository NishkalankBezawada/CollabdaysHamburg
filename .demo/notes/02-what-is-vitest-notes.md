# Speaker Notes: What is Vitest

## In Simple Words:

- Vitest is a testing tool made for modern JavaScript projects. Think of it as a faster, simpler version of Jest.
- It uses Vite under the hood — the same tool that makes your dev server super fast — so your tests run almost instantly.
- If you already know Jest (describe, it, expect), you already know Vitest. Same syntax, no learning curve.
- It comes with built-in features that Jest needs extra plugins for: code coverage, a visual UI, and watch mode.
- It works with TypeScript and modern JavaScript out of the box — no Babel or extra config needed.

## Why Should SPFx Developers Care?

- SPFx normally uses Heft + Jest. It's slow to start and painful to configure.
- Vitest gives you instant feedback — you save a file and see test results right away.
- One simple config file (vitest.config.ts) replaces a bunch of complex rig settings.
- The `--ui` flag opens a nice visual test runner in your browser — great for debugging.

## Easy Way to Remember:
- "Vitest is to Vite what Jest is to Create React App — same idea, modern engine."
