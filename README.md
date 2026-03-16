# 💰 Mini Budget Tracker

A clean, responsive single-page application for tracking personal income and expenses. Built with React and TypeScript — every data model is strictly typed to prevent runtime errors.

> **Live demo:** https://majkan1.github.io/Mini-Budget-Tracker/

---

## Screenshot

![Budget Tracker Screenshot](./vite-project/screenshot.png)

> *Balance overview with separate income/expense cards, add transaction button, and empty state.*

---

## Features

- Add income and expense transactions with a description and amount
- Real-time balance calculation — total, income, and expenses always in sync
- Clean empty state with a clear call to action
- Colour-coded display — expenses in red, income in teal
- Fully responsive layout
- Type-safe throughout — no `any` types

---

## Tech stack

| Technology | Purpose |
|---|---|
| React 18 | Component architecture and state management |
| TypeScript | Static typing for all data models |
| CSS3 | Custom styling (no UI library) |
| Vite | Build tool and dev server |
| GitHub Pages | Deployment |

---

## Technical decisions

**Why strict TypeScript interfaces for transactions?**
Without typed interfaces, it's easy to accidentally pass a string where a number is expected — for example, `amount: "50"` instead of `amount: 50`. This causes silent bugs in arithmetic. Defining a `Transaction` interface with `amount: number` makes TypeScript catch these mistakes at compile time, before they ever reach the user.

```ts
interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
}
```

**Why lift state to the App component?**
The balance, the transaction list, and the input form all need to share the same data. If each component managed its own state, they'd get out of sync. Lifting state to `App` and passing it down as props creates a single source of truth — when a transaction is added, the balance card and the transaction list both update automatically.

**Why reusable, decoupled components?**
Keeping components like `BalanceCard`, `TransactionForm`, and `TransactionList` independent means each one can be developed, tested, and changed without touching the others. `BalanceCard` doesn't care how transactions are added — it just receives the totals as props.

---

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/Majkan1/Mini-Budget-Tracker.git
cd Mini-Budget-Tracker/vite-project

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── BalanceCard.tsx       # Total balance + income/expense split
│   │   ├── TransactionForm.tsx   # Add transaction form
│   │   └── TransactionList.tsx   # List of all transactions
│   ├── types/
│   │   └── transaction.ts        # Shared TypeScript interfaces
│   ├── utils/
│   │   └── calculations.ts       # Pure functions: balance, totals
│   └── App.tsx                   # Root component, state owner
```

---

## What I learned

- How to define and use TypeScript interfaces to enforce data shape across components
- The pattern of lifting state up to create a single source of truth
- How to break a UI into reusable components with clear prop contracts
- Why decoupled components are easier to debug and extend

---

## License

MIT
