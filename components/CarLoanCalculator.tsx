"use client";

import { useState } from "react";
import { Car, ShieldCheck, Info } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

function estimateYearOneInterest(
  principal: number,
  aprPct: number,
  termMonths: number
) {
  if (principal <= 0 || aprPct <= 0 || termMonths <= 0) return 0;
  const r = aprPct / 100 / 12;
  const payment =
    (principal * (r * Math.pow(1 + r, termMonths))) /
    (Math.pow(1 + r, termMonths) - 1);

  let balance = principal;
  let interestYear1 = 0;
  const months = Math.min(12, termMonths);

  for (let m = 0; m < months; m++) {
    const interest = balance * r;
    interestYear1 += interest;
    balance -= payment - interest;
  }
  return Math.max(0, interestYear1);
}

export default function CarLoanCalculator() {
  const [filingStatus, setFilingStatus] = useState<"single" | "mfj">("single");
  const [loanAmount, setLoanAmount] = useState<number>(38000);
  const [apr, setApr] = useState<number>(6.8);
  const [termMonths, setTermMonths] = useState<number>(60);
  const [annualMagi, setAnnualMagi] = useState<number>(85000);
  const [marginalRate, setMarginalRate] = useState<number>(22);
  const [usAssembled, setUsAssembled] = useState<boolean>(true);

  const yearOneInterest = estimateYearOneInterest(loanAmount, apr, termMonths);
  const maxCap = 10000;
  const phaseoutStart = filingStatus === "mfj" ? 200000 : 100000;

  // Phase-out: reduces max deduction by $200 for each $1,000 over MAGI threshold
  const excessMagi = Math.max(0, annualMagi - phaseoutStart);
  const phaseoutReduction = Math.ceil(excessMagi / 1000) * 200;
  const effectiveCap = usAssembled ? Math.max(0, maxCap - phaseoutReduction) : 0;

  const allowableDeduction = Math.min(yearOneInterest, effectiveCap);
  const estimatedTaxSavings = allowableDeduction * (marginalRate / 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Inputs */}
      <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900">
            1. Auto Loan &amp; Tax Details
          </h2>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Up to $10,000 Cap
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Filing Status
            </label>
            <select
              value={filingStatus}
              onChange={(e) =>
                setFilingStatus(e.target.value as "single" | "mfj")
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900"
            >
              <option value="single">Single / HOH ($100k MAGI phase-out)</option>
              <option value="mfj">Married Filing Jointly ($200k phase-out)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Auto Loan Amount ($)
            </label>
            <input
              type="number"
              min={1000}
              step={1000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Loan Interest Rate (APR %)
            </label>
            <input
              type="number"
              min={0}
              max={30}
              step={0.1}
              value={apr}
              onChange={(e) => setApr(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Loan Term (Months)
            </label>
            <select
              value={termMonths}
              onChange={(e) => setTermMonths(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900"
            >
              <option value={36}>36 Months (3 Years)</option>
              <option value={48}>48 Months (4 Years)</option>
              <option value={60}>60 Months (5 Years)</option>
              <option value={72}>72 Months (6 Years)</option>
              <option value={84}>84 Months (7 Years)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Estimated Annual MAGI ($)
            </label>
            <input
              type="number"
              min={0}
              step={1000}
              value={annualMagi}
              onChange={(e) => setAnnualMagi(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Federal Tax Bracket (%)
            </label>
            <select
              value={marginalRate}
              onChange={(e) => setMarginalRate(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900"
            >
              <option value={10}>10% Federal Bracket</option>
              <option value={12}>12% Federal Bracket</option>
              <option value={22}>22% Federal Bracket</option>
              <option value={24}>24% Federal Bracket</option>
              <option value={32}>32% Federal Bracket</option>
            </select>
          </div>
        </div>

        <label className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 cursor-pointer">
          <input
            type="checkbox"
            checked={usAssembled}
            onChange={(e) => setUsAssembled(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-emerald-600"
          />
          <span className="text-xs text-slate-700">
            <strong>New Personal-Use Vehicle Assembled in the USA</strong>{" "}
            (required — VIN typically begins with 1, 4, or 5)
          </span>
        </label>

        <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-600">
          <Info className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            Applies only to new personal-use passenger vehicles whose final
            assembly occurs in the United States. Used cars and leases do not
            qualify.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">2. Estimated Tax Savings</h2>
            <Car className="h-5 w-5 text-emerald-400" />
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-center space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Estimated Year-1 Federal Tax Savings
            </p>
            <p className="text-4xl font-extrabold text-emerald-400">
              ${Math.round(estimatedTaxSavings).toLocaleString()}
            </p>
            <p className="text-xs text-slate-300">
              {usAssembled
                ? `Based on ${marginalRate}% federal tax bracket`
                : "Not eligible — vehicle must be US-assembled"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Est. Year-1 Interest</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(yearOneInterest).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">First 12 payments</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Allowable Deduction</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(allowableDeduction).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">
                Your Cap: ${effectiveCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 border-t border-slate-700 pt-4">
          <a
            href={AFFILIATE_LINKS.taxFilingPrimary.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 px-4 py-3 text-center text-sm font-bold text-slate-950 transition"
          >
            <ShieldCheck className="h-4 w-4" />
            Claim Auto Loan Interest on Schedule 1-A →
          </a>
          <p className="text-[11px] text-center text-slate-400">
            Have your VIN and annual lender interest statement ready at tax time.
          </p>
        </div>
      </section>
    </div>
  );
}