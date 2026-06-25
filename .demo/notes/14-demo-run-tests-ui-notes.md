# Speaker Notes: Demo - Run Tests in UI

"Now let's see the same tests but with the visual UI — this is what you'll use during development."

I'm running `npm run test:local` — this starts Vitest with the `--ui` flag.

It opens a web app in your browser where you can:

- **See all test files** in a tree view (atoms, molecules, organisms)
- **Click into any test** to see if it passed or failed
- **Re-run specific tests** without running the whole suite
- **See coverage visually** — green lines are tested, red lines are not
- **Watch mode** — save a file and tests re-run automatically

"This is incredibly useful during development. You write a component, write a test, save, and instantly see if it works."

"Notice how the tests are organized by component level — Atoms at the bottom, Molecules in the middle, Organisms at the top. Each level builds on the previous one."

"The console logs we added show up in the UI too — click on a test and you'll see the step-by-step output."
