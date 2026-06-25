# Speaker Notes: vitest.config.ts — Test Environment

"Lines 8 to 10 — these three settings define HOW our tests run:"

```typescript
globals: true,
environment: "jsdom",
setupFiles: ["./tests/setupTests.ts"]
```

### globals: true
- "This means you don't need to write `import { describe, it, expect } from 'vitest'` in every test file."
- "They're just available everywhere — like magic. Cleaner code, less boilerplate."

### environment: "jsdom"
- "React components need a browser DOM to render — things like `document`, `window`, `getElementById`."
- "jsdom is a fake browser that runs inside Node.js. It gives your components a DOM to render into."
- "Without this, any test that renders a React component would crash."

### setupFiles
- "This points to our setupTests.ts file. Vitest runs this file before every test suite."
- "It loads our custom matchers and sets up cleanup — we'll look at that file next."

"Three lines, three essential settings. This is the minimum you need for React testing."
