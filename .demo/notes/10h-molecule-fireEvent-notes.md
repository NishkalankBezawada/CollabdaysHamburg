# Speaker Notes: Molecule Test — fireEvent

"This is where it gets interactive! `fireEvent` simulates real user actions:"

```typescript
fireEvent.change(input, { target: { value: "hello world" } });
fireEvent.click(button);
fireEvent.keyPress(input, { key: "Enter", charCode: 13 });
```

### What each one does:
- **fireEvent.change()** — Simulates typing into an input field. The `{ target: { value } }` is what the browser would send.
- **fireEvent.click()** — Simulates a mouse click on an element.
- **fireEvent.keyPress()** — Simulates pressing a key (here, the Enter key).

### Why this is important for molecules:
- "Atoms just display data — no interaction needed."
- "Molecules respond to user actions — clicking, typing, pressing keys."
- "We need to simulate those actions to test the component's behavior."

### The test flow:
1. Render the component
2. Find the input/button
3. Simulate user action (type, click, press Enter)
4. Check the result (was the callback called? did the UI update?)

"fireEvent turns our tests from passive checks ('is this text there?') into interactive scenarios ('what happens when I click this?')."
