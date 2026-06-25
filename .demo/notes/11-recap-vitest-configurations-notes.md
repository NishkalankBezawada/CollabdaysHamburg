# Speaker Notes: Recap Vitest Configurations

## Quick Recap of What We Set Up:

1. **Install Dependencies** — Added 9 packages to package.json (vitest, react plugin, coverage, testing library, jsdom, path resolver)

2. **Configure TypeScript** — Added vitest/globals and jest-dom types to tsconfig.json so we get autocomplete

3. **Create vitest.config.ts** — Set up the test environment (jsdom), coverage reporting, path aliases, and reporters

4. **Create setupTests.ts** — Loaded custom matchers and set up auto-cleanup

5. **Run npm install** — Downloaded everything

## Now the Fun Part — Can We Automate This?

Here's the reverse engineering approach:

1. **Do it manually first** — We just did this. Now we understand every step.
2. **Ask Copilot to review** — It already sees your files and understands the context.
3. **Ask Copilot to create a reusable prompt** — Tell it: "Turn this setup into a prompt I can use on new projects."
4. **Save it as a .prompt.md file** — Put it in `.github/prompts/` in your repo.
5. **Use it on your next project** — Just run the prompt. Done in seconds.

## The Result:
- You understood the manual process (so you can debug issues)
- You have a reusable automation (so you never do it by hand again)
- You combined human expertise with AI speed

"That's reverse engineering in action — understand, then automate."
