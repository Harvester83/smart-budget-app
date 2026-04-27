# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # run ESLint
```

No test suite is configured yet.

## Architecture

This is a **Next.js 16** app (App Router) with **React 19** and **Redux Toolkit** for state.

### Directory layout

```
src/
  app/                   # Next.js App Router pages
    (auth)/login|register/   # auth route group (no shared layout)
    dashboard/           # main app page
    layout.tsx           # root layout — wraps everything in <Providers>
  features/              # feature-sliced design
    auth/
      model/authSlice.ts       # Redux slice: { token }; actions: setToken, logout
      ui/LoginPage.tsx | RegisterPage.tsx
    transactions/
      model/transactionsSlice.ts  # Redux slice: { transactions[] }; action: addTransaction
      model/types.ts              # Transaction type: id, title, amount, type, date
      ui/AddTransaction | BalanceCard | TransactionsList
  components/ui/         # shadcn/ui components (Button, Input, Card)
  store/
    store.ts             # configures Redux store with auth + transactions reducers
    providers.tsx        # <Providers> client component that wraps <Provider store={...}>
  lib/utils.ts           # cn() helper (clsx + tailwind-merge)
```

### Key conventions

- **Path alias**: `@/*` maps to `src/*`.
- **shadcn/ui** components live in `src/components/ui/`. Add new ones via `pnpm shadcn add <component>`. Style is `radix-nova`; icon library is `lucide-react`.
- **State**: all client state is Redux. Pages/components use `useSelector` / `useDispatch` from `react-redux`. No server-side data fetching is wired up yet — auth uses a fake token (`"fake-token"`).
- **Styling**: Tailwind CSS with CSS variables for theming. Dark mode is applied globally via `className="dark"` on `<html>`. Design tokens come from `src/app/globals.css`.
- **`"use client"`** is required on any component that uses hooks or browser APIs; server components are the default in the App Router.
- **`src/shared/ui/`** is currently empty — the previous shared Button/Input were migrated to `src/components/ui/`. Do not add new components there.
