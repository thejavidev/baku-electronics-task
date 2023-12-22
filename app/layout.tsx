import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSIdebar from "@/components/LeftSIdebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baku electroniscs",
  description: "task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <LeftSIdebar />
        {children}
      </body>
    </html>
  );
}
