# Speaker Notes: Live Demo — Automation with Copilot

## What I'm Going to Show You:

### The Demo:
1. Open GitHub Copilot Chat
2. Paste our prompt (the one we built from our manual knowledge)
3. Watch Copilot generate all the config files
4. Run `npm install` and `npm test` to prove it works

## What to Notice:

- **Speed** — Setup that took 10+ minutes manually happens in seconds
- **Consistency** — You get the same correct config every time
- **Reusable** — Save the prompt as a `.prompt.md` file. Share it with your team. Every new SPFx project gets Vitest instantly.
- **Always Verify** — Run the tests to make sure Copilot got it right

## If Copilot Gets Something Wrong:

- "This is exactly why we did the manual setup first!"
- "Because we understand the config, we can spot and fix any mistakes"
- "Then we improve the prompt so it doesn't happen again"

## Bonus: Prompt Files
- You can save prompts as `.prompt.md` files in your `.github/prompts/` folder
- Next time, just run the prompt — no typing needed
- "One click and your new project has full test coverage setup"
