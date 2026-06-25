# Speaker Notes: vitest.config.ts — Coverage

"Lines 11 to 20 — the coverage block. This tells Vitest to measure how much of your code is tested:"

```typescript
coverage: {
    enabled: true,
    provider: "v8",
    reporter: ["text-summary", "cobertura", "html", "lcov"],
    cleanOnRerun: true,
    reportsDirectory: "./tests/coverage",
    include: ["**/src/**/*.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/tests/**"]
}
```

### What each setting does:
- **enabled: true** — Coverage is always on (no need to pass a flag)
- **provider: "v8"** — Uses Node.js's built-in V8 coverage engine. Fast and accurate.
- **reporter** — Generates reports in 4 formats:
  - `text-summary` → Quick summary in terminal
  - `cobertura` → XML for Azure DevOps
  - `html` → Visual report you can open in a browser
  - `lcov` → For tools like SonarQube
- **cleanOnRerun** — Deletes old reports before generating new ones
- **reportsDirectory** — Where reports go (./tests/coverage/)
- **include** — Only measure source files (src folder)
- **exclude** — Ignore node_modules and test files themselves

"Coverage answers one question: 'How much of my code is actually being tested?' These settings make sure you get that answer in every format you'd need."
