# Speaker Notes: Atom Test — render()

"Let's look at how we test our simplest component — the SpfxVitest atom."

```typescript
render(<SpfxVitest {...baseProps} />);
```

### What render() does:
- "It takes your React component and puts it on a fake page (the jsdom DOM we set up earlier)."
- "After this line, the component exists in memory — just like it would in a real browser."
- "We spread `baseProps` to give it all the props it needs: description, theme, user name, etc."

### Why it matters:
- "This is always the first step in any React test — you can't test something you haven't rendered."
- "The `render()` function comes from `@testing-library/react` — one of our dev dependencies."
- "After render, we can query the DOM to see what's actually on the page."

"Think of it like opening a browser and navigating to your web part — but it happens in milliseconds."
