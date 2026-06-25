# Speaker Notes: vitest.config.ts — Plugins

"Look at line 6 — the plugins array. We have two plugins here:"

```typescript
plugins: [react(), tsconfigPaths()]
```

### react()
- "This tells Vite how to handle JSX and TSX files. Without it, Vitest wouldn't know what to do with your React components."
- "It handles the JSX transform — turning `<div>` into `React.createElement('div')`."

### tsconfigPaths()
- "This one reads your tsconfig.json and makes path aliases work in Vitest."
- "So when your test imports `@src/webparts/...`, Vitest knows to look in the actual `./src/` folder."
- "Without this, you'd get 'module not found' errors on every import that uses aliases."

"Two plugins, two problems solved. React components work, and path aliases work."
