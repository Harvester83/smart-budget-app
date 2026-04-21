"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function TransactionsList() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  if (transactions.length === 0) {
    return (
      <div className="p-4 border rounded-xl text-center text-muted-foreground">
        No transactions yet
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl space-y-3">
      {transactions
        .slice()
        .reverse()
        .map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-medium">{t.title}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(t.date).toLocaleDateString()}
              </p>
            </div>

            <p
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              {t.type === "income" ? "+" : "-"}
              {t.amount} ₼
            </p>
          </div>
        ))}
    </div>
  );
}