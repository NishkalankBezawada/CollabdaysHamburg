# Speaker Notes: Recap

## Let's Recap What We Covered:

### 1. What is Vitest?
- A fast, modern test runner — like Jest but built on Vite's speed.
- Same syntax you already know (describe, it, expect).

### 2. Key Features
- Blazing fast with watch mode and parallel test execution
- Works with TypeScript and JSX out of the box
- Built-in snapshot testing and async support
- No complex configuration needed

### 3. The 4-Step Setup
- **package.json**: Add 9 dev dependencies + 2 scripts
- **tsconfig.json**: Add vitest/globals to types
- **vitest.config.ts**: Configure environment, coverage, and aliases
- **setupTests.ts**: Load matchers and auto-cleanup

### 4. Why We Did It Manually First
- Understanding the process means you can debug problems
- You know what correct config looks like
- You can write better prompts because you know exactly what you need

### 5. Automating with GitHub Copilot
- One well-written prompt generates everything
- Save it as a .prompt.md file for reuse
- Every new SPFx project gets Vitest in seconds
- Combine your expertise with AI speed = best of both worlds

"Know the manual way. Automate the repetitive way. That's the takeaway."
