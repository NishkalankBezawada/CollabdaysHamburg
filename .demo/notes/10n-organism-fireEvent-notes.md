# Speaker Notes: Organism Test — fireEvent interactions

"In the organism, fireEvent tests a full user workflow — not just a single click:"

```typescript
const input = screen.getByLabelText("Search input");
const button = screen.getByRole("button", { name: "Find" });

fireEvent.change(input, { target: { value: "SPFx web parts" } });
fireEvent.click(button);
```

### A complete user journey:
1. Find the search input (inside the embedded SearchBox molecule)
2. Type a search query
3. Click the Find button
4. Check that the search appears in recent history

### Cross-component interaction:
- "The input and button belong to the SearchBox molecule."
- "But the recent searches list belongs to the UserProfileCard organism."
- "This test proves the two components communicate correctly — molecule → organism."

### Integration testing without mocking:
- "We DON'T mock the SearchBox — we interact with it for real."
- "This catches bugs that unit tests on individual components would miss."
- "For example: what if SearchBox calls onSearch but the parent doesn't handle it?"

"fireEvent at the organism level tests the FLOW — user action triggers a chain of updates across components."
