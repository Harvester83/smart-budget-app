"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function BalanceCard() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="p-6 border rounded-2xl">
        <p className="text-base text-muted-foreground mb-1">Balance</p>
        <p className="text-4xl font-bold">{balance} ₼</p>
      </div>

      <div className="p-6 border rounded-2xl">
        <p className="text-base text-muted-foreground mb-1">Income</p>
        <p className="text-4xl font-bold text-green-600">{income} ₼</p>
      </div>

      <div className="p-6 border rounded-2xl">
        <p className="text-base text-muted-foreground mb-1">Expenses</p>
        <p className="text-4xl font-bold text-red-600">{expenses} ₼</p>
      </div>
    </div>
  );
}