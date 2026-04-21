// src/app/layout.tsx
import { Providers } from "@/store/providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body style={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


const styles = {
  body: {
    margin: 0,
    background: "#0a0a0a",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
};