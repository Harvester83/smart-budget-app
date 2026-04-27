"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function TransactionsList() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  if (transactions.length === 0) {
    return (
      <div className="p-8 border rounded-2xl text-center text-base text-muted-foreground">
        No transactions yet
      </div>
    );
  }

  return (
    <div className="p-8 border rounded-2xl space-y-4">
      {transactions
        .slice()
        .reverse()
        .map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b pb-4 last:border-none last:pb-0"
          >
            <div>
              <p className="text-lg font-semibold">{t.title}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(t.date).toLocaleDateString()}
              </p>
            </div>

            <p
              className={`text-2xl font-bold ${
                t.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {t.type === "income" ? "+" : "-"}
              {t.amount} ₼
            </p>
          </div>
        ))}
    </div>
  );
}