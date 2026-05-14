# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 1 chat transcript(s) in `edison-finance/chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `edison-finance/project/index.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `edison-finance/README.md` — this file
- `edison-finance/chats/` — conversation transcripts (read these!)
- `edison-finance/project/` — the `Edison Finance` project files (HTML prototypes, assets, components)

## Edison NBFC app

The React client now posts contact and application submissions to Vercel API routes, and the submissions are stored in MySQL.

Why a database is needed:

- If you only want to forward a simple contact form to email, a database is optional and a third-party form service can work.
- This app has contact and financing application flows, so MySQL is used to persist submissions and reference IDs.

Local run:

```bash
export PATH=/Users/irtisamali/.nvm/versions/node/v24.15.0/bin:$PATH
npm install
npm run install:all
npm run dev
```

Vercel deployment:

- Set `MYSQL_URL` in Vercel environment variables.
- Apply `sql/schema.sql` to your MySQL database.
- Vercel serves the React build from `client/dist` and API routes from `api/*.js`.

