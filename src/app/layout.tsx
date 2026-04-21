// src/app/layout.tsx
import { Providers } from "@/store/providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", geist.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}