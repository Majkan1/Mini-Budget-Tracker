# Mini Budget Tracker

A simple Budget Tracker web app built with **React + TypeScript + Vite**.

## Live demo (GitHub Pages)

After Pages is enabled and the workflow finishes, the app will be available at:

- https://majkan1.github.io/Mini-Budget-Tracker/

## Project structure

This repo keeps the Vite app inside the `vite-project/` folder.

- App code: `vite-project/src/`
- Vite config: `vite-project/vite.config.ts`

## Run locally

Requirements: **Node.js 20+** recommended.

```bash
cd vite-project
npm install
npm run dev
```

## Scripts

From inside `vite-project/`:

- `npm run dev` — start dev server
- `npm run build` — typecheck + production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds the app and deploys the `vite-project/dist` output to GitHub Pages:

- Workflow file: `.github/workflows/deploy-pages.yml`

One-time setup in GitHub:

1. Go to **Repo Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually) and wait for it to finish in the **Actions** tab

## Notes

- `node_modules/` and `dist/` are intentionally not committed.
- If you rename the repository, update the repo name in `vite-project/vite.config.ts` so GitHub Pages paths keep working.
