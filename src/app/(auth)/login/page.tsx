// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/features/auth/model/authSlice";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Название приложения */}
        <h1 style={styles.title}>Smart Budget</h1>
        <p style={styles.subtitle}>
          Control your money. Understand your spending.
         
        </p>
         <div className="bg-red-500 text-white p-4">TEST</div>

        <div style={{ height: 30 }} />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <div style={{ height: 12 }} />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <div style={{ height: 20 }} />

        {/* <button onClick={handleLogin} style={styles.button}>
          Sign In
        </button> */}

         <Button variant="outline" onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0a0a0a",
  },
  card: {
    width: 360,
    padding: 32,
    background: "#111",
    borderRadius: 12,
    border: "1px solid #222",
  },
  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 600,
  },
  subtitle: {
    marginTop: 8,
    color: "#888",
    fontSize: 14,
  },
  input: {
    width: "100%",
    padding: "12px",
    background: "#0a0a0a",
    border: "1px solid #222",
    borderRadius: 8,
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#fff",
    color: "#000",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },
};