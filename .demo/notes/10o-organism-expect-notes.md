# Speaker Notes: Organism Test — expect() assertions

"The organism has the most complex assertions because we're testing state, callbacks, AND limits:"

```typescript
expect(screen.getByText("Recent Searches")).toBeInTheDocument();
expect(screen.getByText("SPFx web parts")).toBeInTheDocument();
expect(mockOnSearch).toHaveBeenCalledWith("SPFx web parts");

expect(screen.getByText("six")).toBeInTheDocument();
expect(screen.queryByText("five")).not.toBeInTheDocument();
```

### Three things we check:
1. **UI updates** — Does "Recent Searches" heading appear? Does the search term show up?
2. **Callback fired** — Was the parent's onSearch function called with the right value?
3. **Business logic** — Are searches capped at 5? Does the oldest one get removed?

### queryByText vs getByText:
- `getByText("five")` — Throws an error if not found (test crashes)
- `queryByText("five")` — Returns null if not found (lets you assert `.not.toBeInTheDocument()`)
- "Use `queryBy` when you want to check something is ABSENT."

### Testing limits:
- "We pre-fill 5 searches, add a 6th, then verify the oldest was dropped."
- "This tests edge-case business logic — the kind of bug that sneaks into production."

"At the organism level, assertions cover the full picture: UI, behavior, and business rules."
