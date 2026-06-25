# Speaker Notes: Molecule Test — console.log()

"Same logging pattern as atoms, but notice how it tells the story of INTERACTION:"

```typescript
beforeAll(() => {
    console.log("🧪 [MOLECULES] Starting SearchBox component tests...");
    console.log("📋 Testing a search bar = input field + button working together");
});

it("calls onSearch when button is clicked", () => {
    console.log("  → Testing: Does clicking Search trigger the callback?");
    // ... interaction code ...
    console.log("  ✓ onSearch called with 'SharePoint' after button click");
});
```

### What's different from atoms:
- "The logs describe ACTIONS: 'Does clicking trigger...' 'Does pressing Enter...'"
- "They describe RESULTS: 'onSearch called with SharePoint'"
- "They tell you what the user DID and what HAPPENED"

### Reading the output:
- "When you run the tests, you'll see: arrow (→) = what we're testing, checkmark (✓) = what passed"
- "If a test fails, the last arrow without a checkmark tells you exactly where it broke"

"The logs make your test output read like a user story — 'User types, user clicks, search triggers.'"
