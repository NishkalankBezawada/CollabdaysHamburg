# Speaker Notes: Molecule Test — screen.getByRole() & getByLabelText()

"In the SearchBox test, we use more query methods:"

```typescript
expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
const input = screen.getByLabelText("Search input");
```

### getByRole with a name filter:
- "We don't just find ANY button — we find the button named 'Search'."
- "The `name` option matches the button's accessible name (text content or aria-label)."
- "This is important when you have multiple buttons on the page."

### getByLabelText:
- "This finds form elements by their associated label or aria-label."
- "Our input has `aria-label='Search input'` — so this finds it."
- "It's the recommended way to query form fields — because labels are how users identify inputs."

### Why different queries for different things:
- `getByText` — for displayed text content
- `getByRole` — for interactive elements (buttons, links)
- `getByLabelText` — for form inputs
- `getByPlaceholderText` — fallback for inputs without labels

"Use the most specific query that makes sense. It makes your tests clearer about WHAT you're finding."
