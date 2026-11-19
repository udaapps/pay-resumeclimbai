import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pay.resumeclimbai.com"),
  title: {
    default: "No Tax on Overtime Calculator (2026) — W-2 Code TT & Refund Estimator",
    template: "%s | Pay.ResumeClimbAI",
  },
  description:
    "Calculate your 2026 federal tax savings under the No Tax on Overtime rule (W-2 Box 12 Code TT & Schedule 1-A). Free instant paycheck and tax refund estimator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}