# Speaker Notes: Atom Test — expect().toBeInTheDocument()

"Once we find an element, we need to check something about it. That's what `expect()` does:"

```typescript
expect(screen.getByText("Test environment")).toBeInTheDocument();
```

### How expect works:
- "It's the assertion — the actual CHECK in your test."
- "You pass it a value, then call a matcher to say what you expect."
- "If the matcher fails, the test fails."

### Common matchers we use:
- `.toBeInTheDocument()` — "Is this element on the page?"
- `.toHaveAttribute("src", ...)` — "Does this element have this attribute?"
- `.toMatch(/teams/)` — "Does this string match this pattern?"
- `.toBeGreaterThanOrEqual(7)` — "Is this number at least 7?"

### The toBeInTheDocument() matcher:
- "This comes from `@testing-library/jest-dom` — the package we load in setupTests.ts."
- "It checks that the element exists in the DOM."
- "Without the jest-dom import, you'd have to write `expect(element).not.toBeNull()` — much less readable."

"expect is the final step: render → find → check. That's the whole pattern."
