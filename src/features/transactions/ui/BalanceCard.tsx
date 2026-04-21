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
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 border rounded-xl">
        <p className="text-sm text-muted-foreground">Balance</p>
        <p className="text-xl font-semibold">{balance} ₼</p>
      </div>

      <div className="p-4 border rounded-xl">
        <p className="text-sm text-muted-foreground">Income</p>
        <p className="text-green-600">{income} ₼</p>
      </div>

      <div className="p-4 border rounded-xl">
        <p className="text-sm text-muted-foreground">Expenses</p>
        <p className="text-red-600">{expenses} ₼</p>
      </div>
    </div>
  );
}