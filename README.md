# Reverse Engineering SPFx Testing: Vitest Unit Testing for SPFx Projects

A sample SharePoint Framework (SPFx) project demonstrating how to configure **Vitest** for unit testing, following the **Atomic Design** pattern (Atoms, Molecules, Organisms). This project accompanies the conference session *"Reverse Engineering SPFx Testing: Teaching GitHub Copilot to Configure Vitest for you"*.

## Summary

This project shows:
- How to set up Vitest in an SPFx project (replacing Heft/Jest)
- Component architecture using Atomic Design (Atoms → Molecules → Organisms)
- Writing React component tests with Testing Library
- Automating the entire setup using GitHub Copilot prompt files

## Used SharePoint Framework Version

![SPFx](https://img.shields.io/badge/SPFx-1.23.0-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.15.1-green.svg)
![Vitest](https://img.shields.io/badge/Vitest-2.1.9-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

- Node.js v22.15.1
- npm v10+
- A Microsoft 365 developer tenant (for deploying the web part)

## Solution

| Solution | Author(s) |
| -------- | --------- |
| CollabdaysHamburg | Nishkalank Bezawada ([@GitHub](https://github.com/NishkalankBezawada)), Xenit AB |

## Version history

| Version | Date | Comments |
| ------- | ---- | -------- |
| 1.0 | June 2026 | Initial release — Collabdays Hamburg |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

1. Clone this repository
2. Ensure you have Node.js v22.15.1 installed
3. In the command-line run:

```bash
npm install
```

### Run Tests

```bash
# Run all tests with coverage report
npm test

# Open interactive test UI in browser
npm run test:local
```

### Run the Web Part

```bash
heft start
```

---

## Project Structure

```
src/webparts/spfxVitest/components/
├── atoms/              ← Simple, single-purpose components
│   ├── SpfxVitest.tsx         (Greeting component with theme support)
│   └── ISpfxVitestProps.ts
├── molecules/          ← Groups of atoms working together
│   ├── SearchBox.tsx          (Input + button search bar)
│   └── ISearchBoxProps.ts
└── organisms/          ← Complex sections made of molecules
    ├── UserProfileCard.tsx    (Profile card with avatar, status, search)
    └── IUserProfileCardProps.ts

tests/
├── setupTests.ts       ← Global test setup (matchers + cleanup)
└── components/
    ├── atoms/
    │   └── SpfxVitest.test.tsx       (6 tests)
    ├── molecules/
    │   └── SearchBox.test.tsx        (9 tests)
    └── organisms/
        └── UserProfileCard.test.tsx  (12 tests)
```

## Testing Stack

| Tool | Purpose |
|------|---------|
| **Vitest** | Fast test runner (Vite-powered) |
| **jsdom** | Simulated browser DOM |
| **React Testing Library** | Component rendering & querying |
| **@testing-library/jest-dom** | Custom DOM matchers |
| **@vitest/coverage-v8** | Code coverage via V8 |
| **@vitest/ui** | Browser-based test UI |

## Configuration Files

| File | Purpose |
|------|---------|
| `vitest.config.ts` | Test environment, coverage, aliases, reporters |
| `tests/setupTests.ts` | jest-dom matchers + auto-cleanup |
| `tsconfig.json` | TypeScript types for test globals |
| `.github/prompts/setup-configure-vitest.prompt.md` | Copilot prompt to automate setup |

## Demo Presentation

This project includes a full [Demo Time](https://demotime.show/) presentation in the `.demo/` folder:

```bash
# Install the Demo Time VS Code extension, then use:
# Ctrl+Shift+P → "Demo Time: Start"
```

The presentation covers:
1. What is Vitest and why use it with SPFx
2. Step-by-step manual configuration walkthrough
3. Live demo: running tests in terminal and UI
4. Automating the setup with GitHub Copilot prompt files

## Features

- **27 unit tests** across 3 component levels (Atoms, Molecules, Organisms)
- **Console logging** in tests for demo visibility and debugging
- **Code coverage** with multiple reporter formats (HTML, LCOV, Cobertura)
- **JUnit XML output** for CI/CD pipeline integration
- **Path aliases** (`@src/`) for clean imports
- **GitHub Copilot prompt file** for one-click Vitest setup on new projects

## Key Concepts Demonstrated

1. **Atomic Design in SPFx** — Organizing components by complexity level
2. **Vitest over Jest/Heft** — Faster, simpler, modern alternative
3. **Reverse Engineering** — Understanding manual setup to build better automation
4. **AI-Assisted Configuration** — Using Copilot prompts to replicate expert setup

## References

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [SharePoint Framework Overview](https://docs.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Demo Time Extension](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)