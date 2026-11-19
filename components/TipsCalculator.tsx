"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, DollarSign, Info } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

export default function TipsCalculator() {
  const [filingStatus, setFilingStatus] = useState<"single" | "mfj">("single");
  const [weeklyTips, setWeeklyTips] = useState<number>(350);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(50);
  const [annualMagi, setAnnualMagi] = useState<number>(58000);
  const [marginalRate, setMarginalRate] = useState<number>(12);

  const annualQualifiedTips = Math.max(0, weeklyTips * weeksPerYear);
  const maxCap = 25000;
  const phaseoutStart = filingStatus === "mfj" ? 300000 : 150000;

  const excessMagi = Math.max(0, annualMagi - phaseoutStart);
  const phaseoutReduction = Math.floor(excessMagi / 1000) * 100;
  const effectiveCap = Math.max(0, maxCap - phaseoutReduction);

  const allowableDeduction = Math.min(annualQualifiedTips, effectiveCap);
  const estimatedFederalSavings = allowableDeduction * (marginalRate / 100);
  const ficaTaxStillOwed = annualQualifiedTips * 0.0765;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Inputs */}
      <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900">
            1. Enter Your 2026 Reported Tips &amp; Tax Info
          </h2>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            W-2 Code TP
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
              <option value="single">Single / Head of Household ($150k phase-out)</option>
              <option value="mfj">Married Filing Jointly ($300k phase-out)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Average Reported Tips / Week ($)
            </label>
            <input
              type="number"
              min={0}
              step={10}
              value={weeklyTips}
              onChange={(e) => setWeeklyTips(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Weeks Worked / Year
            </label>
            <input
              type="number"
              min={1}
              max={52}
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
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

          <div className="sm:col-span-2">
            <label className="block font-semibold text-slate-700 mb-1">
              Federal Marginal Tax Bracket (%)
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

        <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-600">
          <Info className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            To qualify, your job must appear on the official Treasury list of
            customarily tipped occupations (reported in W-2 Box 14b).{" "}
            <Link
              href="/tipped-occupation-code"
              className="font-semibold text-emerald-700 underline"
            >
              Check your 3-digit TTOC code here →
            </Link>
          </p>
        </div>
      </section>

      {/* Results + Revenue CTA */}
      <section className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">2. Estimated 2026 Tip Savings</h2>
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-center space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Estimated Federal Tax Savings
            </p>
            <p className="text-4xl font-extrabold text-emerald-400">
              ${Math.round(estimatedFederalSavings).toLocaleString()}
            </p>
            <p className="text-xs text-slate-300">
              Based on {marginalRate}% federal bracket &amp; ${Math.round(allowableDeduction).toLocaleString()} deduction
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Total Annual Tips</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(annualQualifiedTips).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">
                Max Cap: ${effectiveCap.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Est. FICA Still Owed</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">
                ${Math.round(ficaTaxStillOwed).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">
                7.65% Soc. Sec. &amp; Medicare
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
            <DollarSign className="h-4 w-4" />
            Claim Your 2026 Tips Deduction — Compare Filing Options →
          </a>
          <p className="text-[11px] text-center text-slate-400">
            Verify W-2 Box 12 Code TP &amp; Box 14b TTOC before filing Schedule 1-A.
          </p>
        </div>
      </section>
    </div>
  );
}