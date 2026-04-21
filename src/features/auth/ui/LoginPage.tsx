"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/model/authSlice";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link as Anchor, Wallet } from "lucide-react";
import Link from "next/link";




export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(setToken("fake-token"));
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl border bg-card p-6 shadow-sm">

        {/* Header */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <div className="bg-primary text-primary-foreground p-3 rounded-2xl">
            <Wallet className="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Smart Budget
            </h1>
            <p className="text-sm text-muted-foreground">
              Control your money. Understand your spending.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <Button variant="outline" className="w-full" onClick={handleLogin}>
          Sign In
        </Button>

        <p className="flex">
          Don’t have an account? <Anchor className="h-4 w-4 ml-4" /> <Link href="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}