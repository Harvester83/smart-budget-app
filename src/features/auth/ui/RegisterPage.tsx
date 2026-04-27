"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/model/authSlice";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) return;

    dispatch(setToken("fake-token"));

    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 border p-10 rounded-3xl shadow-lg">

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Create account</h1>
          <p className="text-base text-muted-foreground">
            Start managing your money
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button size="lg" className="w-full" onClick={handleRegister}>
            Sign up
          </Button>
        </div>

        {/* Link */}
        <p className="text-center text-base text-muted-foreground">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
}