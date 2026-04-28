"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/model/authSlice";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link as Anchor, Loader2, Wallet } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";


export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  setLoading(true);

  try {
    const { data } = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    dispatch(setToken(data.token));
    router.push("/dashboard");

  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;

    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          toast.error("Invalid email or password");
          break;

        case 404:
          toast.error("Invalid email or password");
          break;

        case 500:
          toast.error("Server error. Try again later");
          break;

        default:
          toast.success(error.response.data?.message || " Something went wrong");
      }

    } else if (error.request) {
      toast.error("No response from server");
    } else {
      toast.error("Request error");
    }

    console.error(error);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-10">
      <div className="max-w-md space-y-8 rounded-3xl bg-card p-10 shadow-lg">

        {/* Header */}
        <div className="space-y-5 text-center flex flex-col items-center">
          <div className="bg-red-100- text-primary-foreground p-5 rounded-3xl">
            <Wallet className="h-12 w-12" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Smart Budget
            </h1>
            <p className="text-base text-muted-foreground">
              Control your money. Understand your spending.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
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
        <Button variant="outline" size="lg" className="w-full" onClick={handleLogin} disabled={loading}>
          {loading ? <><Loader2 className="animate-spin" /> Signing in...</> : "Sign In"}
        </Button>

        <p className="flex items-center gap-2 text-base">
          Don’t have an account? <Anchor className="h-5 w-5" /> <Link href="/register" className="underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}