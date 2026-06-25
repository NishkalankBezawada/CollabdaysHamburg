# Speaker Notes: vitest.config.ts — Reporters

"Lines 26 to 29 — the reporters configuration:"

```typescript
reporters: ["junit", "default"],
outputFile: {
    junit: "./tests/reports/junit.xml",
}
```

### Two reporters running at the same time:

**default**
- "This is what you see in the terminal — the green checkmarks, test names, pass/fail status."
- "Great for development — instant visual feedback."

**junit**
- "This generates a JUnit XML file — the standard format for CI/CD systems."
- "Azure DevOps, GitHub Actions, Jenkins — they all understand JUnit XML."
- "Upload this file and you get test results right in your pull request."

### The output file:
- "We save the JUnit report to `./tests/reports/junit.xml`"
- "Your CI pipeline can pick it up from there and display results in the build summary."

"So you get two things: nice terminal output for you during development, and a machine-readable file for your CI pipeline. Both from the same test run."
