# Mini Budget Tracker

A lightweight and intuitive Budget Tracker web app that helps you manage your finances with ease. Built with **React + TypeScript + Vite** for a fast, modern user experience.

## Overview

Mini Budget Tracker is a personal finance management tool designed to help you track income and expenses in one place. Whether you're budgeting for personal finances or monitoring spending habits, this app provides a simple interface to:

- **Track Transactions** — Add income and expense entries with titles, amounts, dates, and categories
- **Categorize Spending** — Organize transactions by category for better insights
- **Calculate Totals** — Automatically compute total income, total expenses, and your current balance
- **View History** — Keep a complete record of all your financial transactions

## Features

✨ **Easy to Use** — Simple, clean interface for quick transaction entry  
💰 **Income & Expense Tracking** — Separate tracking for different transaction types  
📊 **Automatic Calculations** — Real-time balance and summary updates  
🏷️ **Category Management** — Organize transactions by custom categories  
⚡ **Fast & Responsive** — Built with Vite for instant load times  
📱 **Modern Tech Stack** — Powered by React and TypeScript for reliability

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
