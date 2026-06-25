# Speaker Notes: Organism Test — screen.getByText() & getByLabelText()

"In the organism, we query for content from different parts of the card:"

```typescript
expect(screen.getByText("Jane Doe")).toBeInTheDocument();
const avatar = screen.getByLabelText("User avatar");
expect(avatar).toHaveTextContent("JD");
```

### getByText at the organism level:
- "We check all the profile info: name, email, role."
- "These are simple text checks — but they prove the data flows correctly through the component."

### getByLabelText for non-form elements:
- "The avatar div has `aria-label='User avatar'` — so getByLabelText finds it."
- "Then we check its content: `toHaveTextContent('JD')` — the auto-generated initials."
- "This tests the initials logic: 'Jane Doe' → 'JD'."

### Testing data flow:
- "We pass `displayName: 'Jane Doe'` as a prop."
- "The component should display 'Jane Doe' as text AND 'JD' as initials."
- "These queries prove the component processes and displays data correctly."

"At the organism level, queries verify that all the pieces are wired up properly."
