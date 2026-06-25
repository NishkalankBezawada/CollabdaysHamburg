# Speaker Notes: Atom Test — screen.getByText()

"Now that the component is rendered, we need to find stuff on the page. `screen.getByText()` is the simplest way:"

```typescript
expect(screen.getByText(/Well done, Test User!/)).toBeInTheDocument();
expect(screen.getByText("Test description")).toBeInTheDocument();
```

### What screen.getByText() does:
- "It searches the entire rendered page for elements containing that text."
- "You can pass a string (`"Test description"`) for exact match, or a regex (`/Well done/`) for partial match."
- "If it doesn't find the text, the test fails immediately with a helpful error message."

### Why we use it:
- "It tests what the USER actually sees — not internal implementation details."
- "If your component shows 'Well done, Test User!' on screen, this will find it."
- "It doesn't care about HTML structure, CSS classes, or component internals — just visible text."

"This is the most common query you'll use — 'Is this text on the page? Yes or no.'"
