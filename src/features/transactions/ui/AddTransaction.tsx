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
    <div className="p-8 border rounded-2xl space-y-5">

      {/* type switch */}
      <div className="flex gap-3">
        <Button
          size="lg"
          variant={type === "expense" ? "default" : "outline"}
          onClick={() => setType("expense")}
        >
          Expense
        </Button>

        <Button
          size="lg"
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
      <Button size="lg" className="w-full" onClick={handleSubmit}>
        Add {type}
      </Button>
    </div>
  );
}