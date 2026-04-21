"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "@/features/transactions/model/transactionsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Type = "income" | "expense";

export function AddTransaction() {
  const dispatch = useDispatch();

  const [type, setType] = useState<Type>("expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!title || !amount) return;

    dispatch(
      addTransaction({
        id: Date.now().toString(),
        title,
        amount: Number(amount),
        type,
        date: new Date().toISOString(),
      })
    );

    setTitle("");
    setAmount("");
  };

  return (
    <div className="p-4 border rounded-xl space-y-4">

      {/* type switch */}
      <div className="flex gap-2">
        <Button
          variant={type === "expense" ? "default" : "outline"}
          onClick={() => setType("expense")}
        >
          Expense
        </Button>

        <Button
          variant={type === "income" ? "default" : "outline"}
          onClick={() => setType("income")}
        >
          Income
        </Button>
      </div>

      {/* inputs */}
      <Input
        placeholder={type === "expense" ? "Product" : "Source"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* submit */}
      <Button className="w-full" onClick={handleSubmit}>
        Add {type}
      </Button>
    </div>
  );
}