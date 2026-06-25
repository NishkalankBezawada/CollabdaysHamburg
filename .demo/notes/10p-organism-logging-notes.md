# Speaker Notes: Organism Test — console.log()

"At the organism level, the logs tell the story of a COMPLETE feature being tested:"

```typescript
beforeAll(() => {
    console.log("🧪 [ORGANISMS] Starting UserProfileCard component tests...");
    console.log("📋 Testing a full profile card = avatar + info + search + history");
});

it("performs a search and shows it in recent searches", () => {
    console.log("  → Testing: Does searching add to the recent searches list?");
    // ... full workflow ...
    console.log("  ✓ 'SPFx web parts' added to recent searches and callback triggered");
});
```

### The three levels of logging:
- **[ATOMS]** — "Testing a single simple thing"
- **[MOLECULES]** — "Testing things working together"
- **[ORGANISMS]** — "Testing a full feature/workflow"

### What the organism logs tell you:
- "They describe business scenarios: 'Does searching add to history?'"
- "They confirm integration: 'callback triggered' = parent-child communication works"
- "They verify limits: 'oldest item removed' = business rule enforced"

### Terminal output you'll see:
```
🧪 [ORGANISMS] Starting UserProfileCard component tests...
  → Testing: Does searching add to the recent searches list?
  ✓ 'SPFx web parts' added to recent searches and callback triggered
✅ [ORGANISMS] UserProfileCard component tests complete!
```

"The logging creates a living document of what your component does — readable by anyone on the team."
