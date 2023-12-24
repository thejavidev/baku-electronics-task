import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSIdebar from "@/components/LeftSIdebar";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-[#2a2a2a]`}>
        <LeftSIdebar />
        <main className="px-4 py-4 ml-[288px] md:ml-0">
          <Navbar />
          {children}
        </main>

       
      </body>
    </html>
  );
}
