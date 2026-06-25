# Speaker Notes: Molecule Test — render()

"Now let's look at the SearchBox molecule test. The render is slightly different here:"

```typescript
render(<SearchBox onSearch={mockOnSearch} />);
render(<SearchBox onSearch={mockOnSearch} placeholder="Find items..." buttonLabel="Go" />);
```

### What's different from the atom:
- "We're passing a `mockOnSearch` function as a prop — this is a mock (fake function)."
- "We use `vi.fn()` to create it — Vitest's way to track if/when a function gets called."
- "We also test with different prop combinations to verify customization works."

### Why mocks matter:
- "The SearchBox component calls `onSearch(query)` when the user clicks Search."
- "In a real app, that would trigger an API call. In tests, we don't want real API calls."
- "The mock lets us check: 'Was onSearch called? With what value?'"

### The molecule difference:
- "Atoms are simple — just pass data props."
- "Molecules have behavior — they accept callback functions and respond to user actions."
- "That's why we need mocks and fireEvent (coming next)."

"render() is the same function, but what we pass INTO it shows the increased complexity."
