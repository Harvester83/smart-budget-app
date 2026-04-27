import { AddTransaction } from "@/features/transactions/ui/AddTransaction";
import { BalanceCard } from "@/features/transactions/ui/BalanceCard";
import { TransactionsList } from "@/features/transactions/ui/TransactionsList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <BalanceCard />
        <AddTransaction />
        <TransactionsList />
      </div>
    </div>
  );
}