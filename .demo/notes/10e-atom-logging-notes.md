# Speaker Notes: Atom Test — console.log()

"Notice the `console.log()` statements throughout our tests:"

```typescript
beforeAll(() => {
    console.log("🧪 [ATOMS] Starting SpfxVitest component tests...");
});

it("renders user display name", () => {
    console.log("  → Testing: Does it show the user's name?");
    // ... test code ...
    console.log("  ✓ User name rendered correctly");
});
```

### Why we add logging:
- "During demos, you can see the test 'thinking' step by step in the terminal output."
- "It tells a story: what are we testing? Did it pass?"
- "The emoji markers (🧪 → ✓ ✅) make it easy to scan the output quickly."

### The pattern:
- `beforeAll` — Announces which test suite is starting
- Before each assertion — Says what we're about to check
- After assertions pass — Confirms what worked
- `afterAll` — Marks the suite as complete

### In production:
- "You'd normally remove these logs — they're for learning and demos."
- "But for debugging a failing test, adding temporary logs is a great technique."

"When you run `npm test`, you'll see these messages interleaved with the test results — it makes the output much more readable."
