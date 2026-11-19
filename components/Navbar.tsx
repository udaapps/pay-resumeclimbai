"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Overtime Tax" },
  { href: "/no-tax-on-tips-calculator", label: "Tips Tax" },
  { href: "/trump-account-calculator", label: "530A Account" },
  { href: "/tipped-occupation-code", label: "TTOC Codes" },
  { href: "/car-loan-interest-calculator", label: "Car Loan" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Calculator className="h-4 w-4" />
          </span>
          <span className="tracking-tight">
            Pay<span className="text-emerald-600">.ResumeClimbAI</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-xs sm:text-sm font-medium">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-1.5 transition ${
                  active
                    ? "bg-emerald-50 font-semibold text-emerald-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}