import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuikRate",
  description:
    "Easily calculate your worth and ensure competitive rates that reflect your expertise and value in the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("overflow-x-hidden min-h-screen h-full", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
