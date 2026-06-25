# Speaker Notes: Molecule Test — expect() assertions

"In molecule tests, we use more powerful assertions because there's more behavior to check:"

```typescript
expect(mockOnSearch).toHaveBeenCalledWith("SharePoint");
expect(mockOnSearch).toHaveBeenCalledTimes(1);
expect(input).toBeDisabled();
expect(button).toBeDisabled();
```

### Mock assertions:
- `.toHaveBeenCalledWith("SharePoint")` — "Was the function called with this exact argument?"
- `.toHaveBeenCalledTimes(1)` — "Was it called exactly once?" (not twice, not zero times)
- `.not.toHaveBeenCalled()` — "Was it NEVER called?" (great for testing error prevention)

### DOM state assertions:
- `.toBeDisabled()` — "Is this input/button disabled?"
- `.toHaveValue("hello world")` — "Does this input contain this value?"

### Why these matter:
- "We're not just checking what's visible — we're checking BEHAVIOR."
- "Did the search function fire? Did it get the right search term?"
- "Are disabled controls actually disabled?"

"These assertions prove the component works correctly — not just that it renders."
