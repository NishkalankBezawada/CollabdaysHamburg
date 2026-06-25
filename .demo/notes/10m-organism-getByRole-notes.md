# Speaker Notes: Organism Test — screen.getByRole() & getByTestId()

"For the organism we use getByRole for nested interactive elements and getByTestId for the container:"

```typescript
expect(screen.getByRole("button", { name: "Find" })).toBeInTheDocument();
expect(screen.getByTestId("profile-card")).toBeInTheDocument();
```

### getByRole in nested components:
- "The 'Find' button lives inside the SearchBox molecule, which is inside the UserProfileCard."
- "getByRole finds it regardless of nesting — it searches the whole rendered tree."
- "This proves the molecule is properly embedded and functional."

### getByTestId:
- "Sometimes there's no good text, role, or label to query by."
- "We add `data-testid='profile-card'` to the component's wrapper div."
- "Then `getByTestId('profile-card')` finds it reliably."

### When to use getByTestId:
- "It's a last resort — prefer getByRole, getByText, getByLabelText first."
- "Use it for containers/wrappers that have no semantic role."
- "It's also great for testing that the component mounts at all."

"getByTestId is your escape hatch — when nothing else fits, add a test ID."
