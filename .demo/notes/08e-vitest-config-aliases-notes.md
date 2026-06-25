# Speaker Notes: vitest.config.ts — Path Aliases

"Lines 22 to 24 — the alias configuration:"

```typescript
alias: {
    "@src/": new URL("./src/", import.meta.url).pathname,
}
```

### What this does:
- "It maps the shortcut `@src/` to the actual `./src/` folder on disk."
- "So in your test files, you can write clean imports like:"

```typescript
import SearchBox from "@src/webparts/spfxVitest/components/molecules/SearchBox";
```

- "Instead of ugly relative paths like:"

```typescript
import SearchBox from "../../../src/webparts/spfxVitest/components/molecules/SearchBox";
```

### Why we need it:
- "SPFx projects use path aliases in tsconfig.json. Your source code uses them."
- "But Vitest runs outside of webpack — it doesn't know about tsconfig paths by default."
- "The `tsconfigPaths()` plugin handles most cases, but this alias is a backup for test files specifically."

"One line of config saves you from counting `../` in every import. Small thing, big quality of life improvement."
