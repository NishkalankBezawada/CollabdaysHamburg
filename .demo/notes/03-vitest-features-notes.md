# Speaker Notes: Vitest Features

## Let Me Break Down the Key Features:

### 1. Easy to Set Up
- If you use Vite, setup is almost zero work. But even for non-Vite projects like SPFx, it's still much simpler than Jest + Heft.
- Basically: install the package, create a config file, and you're testing.

### 2. Super Fast
- Vitest has a "watch mode" — it watches your files and re-runs tests instantly when you save. No waiting around.
- This is the same speed you get from Vite's hot reload, but for your tests.

### 3. Works with Modern Code
- TypeScript? Works out of the box.
- JSX/TSX (React components)? No extra setup needed.
- No Babel config, no transform plugins.

### 4. Snapshot Testing
- You can take a "snapshot" of your component's output and compare it over time.
- If something changes unexpectedly, the test fails. Great for catching accidental UI changes.

### 5. Async/Await Support
- Vitest supports top-level await — meaning you can write async test code without wrapping it in extra functions.
- Makes tests cleaner and easier to read.

### 6. Tests Run in Parallel
- Vitest runs multiple tests at the same time (concurrency).
- This means your test suite finishes faster — especially important as your project grows.
