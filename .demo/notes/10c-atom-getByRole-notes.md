# Speaker Notes: Atom Test — screen.getByRole()

"Sometimes text isn't enough. `screen.getByRole()` finds elements by their accessibility role:"

```typescript
const img = screen.getByRole("img");
const links = screen.getAllByRole("link");
```

### What screen.getByRole() does:
- "It finds elements by what they ARE, not what they say."
- "An `<img>` tag has role 'img', an `<a>` tag has role 'link', a `<button>` has role 'button'."
- "These roles come from HTML semantics — the browser assigns them automatically."

### Common roles you'll use:
- `"button"` — finds `<button>` elements
- `"link"` — finds `<a>` elements
- `"img"` — finds `<img>` elements
- `"heading"` — finds `<h1>`, `<h2>`, etc.

### Why it's powerful:
- "It tests accessibility! If screen readers can find the element, `getByRole()` can too."
- "Use `getAllByRole('link')` to find multiple elements (returns an array)."
- "You can add a name filter: `getByRole('button', { name: 'Search' })`."

"getByRole tests both function AND accessibility in one shot."
