# Speaker Notes: setupTests.ts

## What This File Does (in Simple Terms):

This file runs automatically before every test. It sets up two things:

### 1. Loading Custom Matchers
```typescript
import "@testing-library/jest-dom";
```
- This gives us nice assertions like:
  - `toBeInTheDocument()` — "Is this element on the page?"
  - `toHaveClass('active')` — "Does this element have this CSS class?"
  - `toBeVisible()` — "Can the user actually see this?"
- Without this import, you'd be stuck with basic checks like `toBe()` and `toEqual()`

### 2. Auto-Cleanup After Each Test
```typescript
afterEach(() => {
    cleanup();
});
```
- After each test finishes, we unmount all React components
- This prevents memory leaks
- It also prevents tests from affecting each other — each test starts with a clean slate

## Why This Matters for SPFx:

- SPFx components can be complex — proper cleanup prevents weird test failures
- The custom matchers make tests much more readable
- This runs automatically — you write it once and forget about it

"Two imports, one cleanup function. Simple but essential."
