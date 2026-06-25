# Speaker Notes: Session Agenda

"Hey everyone! Welcome to 'Reverse Engineering SPFx Testing.' Let me show you what we'll cover today."

### Why Testing in SPFx is Hard
- "First, let's talk about why testing in SPFx is tricky. SPFx uses Heft and Jest under the hood, but the setup is confusing and slow. Vitest fixes that — it's faster and simpler."

### Understanding the Manual Setup (Reverse Engineering)
- "Before we automate anything, we need to understand what's happening. So we'll go step-by-step through the manual Vitest setup."
- "This is what I call 'reverse engineering' — we take apart the process so we truly get it. Once you understand it, you can automate it or fix it when things go wrong."

### Live Demo: Manual Setup
- "Then I'll do a live demo. I'll show you the 4 files you need to touch: package.json, tsconfig.json, vitest.config.ts, and setupTests.ts."
- "Watch closely — this is the knowledge you'll need for the automation part."

### Automating with GitHub Copilot
- "Here's where it gets fun. We take everything we just learned and turn it into a prompt for GitHub Copilot."
- "Instead of setting up Vitest by hand every time, we let Copilot do it in seconds."

### Live Demo: The Automation
- "In the second demo, you'll see how one well-written prompt creates all the config files automatically."
- "What took us 10 minutes manually now takes seconds."

### Wrap Up
- "We'll finish with the key lessons: know your tools, understand the manual process, then use AI to speed things up."
