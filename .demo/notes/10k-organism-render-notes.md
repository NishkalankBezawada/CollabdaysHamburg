# Speaker Notes: Organism Test — render()

"The organism is the most complex — it's a full UserProfileCard. Look at how we render it:"

```typescript
render(<UserProfileCard {...baseProps} />);
render(<UserProfileCard {...baseProps} onSearch={mockOnSearch} recentSearches={["React", "TypeScript"]} />);
```

### What's different at the organism level:
- "More props — display name, email, role, online status, search history, callbacks."
- "The organism CONTAINS other components — it has a SearchBox molecule inside it."
- "When we render the organism, all its child components render too."

### Composition in action:
- "UserProfileCard uses SearchBox internally."
- "We don't mock SearchBox — we let it render for real."
- "This means our organism test is also an integration test — it proves the pieces work together."

### baseProps pattern:
- "We define `baseProps` once with common values, then override specific props per test."
- "This keeps tests DRY — you only specify what's DIFFERENT in each test."

"Organisms bring everything together. One render() gives you the full user experience to test."
