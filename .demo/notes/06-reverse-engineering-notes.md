# Speaker Notes: Reverse Engineering with GitHub Copilot

## The Big Idea:

> "To automate something well, you first need to understand it yourself."

We just went through the entire manual setup. Now we take that knowledge and turn it into a prompt.

## What We Tell Copilot:

We basically say: "Hey Copilot, I need Vitest for my SPFx project. Here's what I need you to generate:"

1. **package.json** — Add all the dev dependencies we just discussed
2. **vitest.config.ts** — Create the full config file with jsdom, coverage, path aliases, reporters
3. **tests/setupTests.ts** — Create the setup file with jest-dom and auto-cleanup

## Why This Works:

- Because we understand the manual steps, we can write a precise prompt.
- A vague prompt gives vague results. A detailed prompt (based on real knowledge) gives exact results.
- If Copilot makes a mistake, you can spot it because you know what the correct config looks like.

## The Prompt We Use:

"I need to configure Vitest for a new SPFx project. Please generate:
1. The package.json dev dependencies
2. The complete vitest.config.ts file
3. The tests/setupTests.ts file
4. Put it all in a markdown file I can reference later"

"Simple, clear, and based on what we just learned by hand."
