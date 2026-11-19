"use client";

import { useState } from "react";
import { ShieldCheck, DollarSign, Info } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

export default function OvertimeCalculator() {
  const [filingStatus, setFilingStatus] = useState<"single" | "mfj">("single");
  const [hourlyRate, setHourlyRate] = useState<number>(28);
  const [overtimeHoursPerWeek, setOvertimeHoursPerWeek] = useState<number>(8);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(48);
  const [annualMagi, setAnnualMagi] = useState<number>(75000);
  const [marginalRate, setMarginalRate] = useState<number>(22);

  // Under FLSA "time-and-a-half", the qualified overtime deduction applies to the
  // 0.5x premium portion (reported on 2026 W-2 Box 12 Code TT).
  const totalOvertimeHours = Math.max(0, overtimeHoursPerWeek * weeksPerYear);
  const totalOvertimeGrossPay = totalOvertimeHours * (hourlyRate * 1.5);
  const qualifiedOvertimePremium = totalOvertimeHours * (hourlyRate * 0.5);

  const maxCap = filingStatus === "mfj" ? 25000 : 12500;
  const phaseoutStart = filingStatus === "mfj" ? 300000 : 150000;

  // Phase-out: reduces max deduction by $100 for each $1,000 over MAGI threshold
  const excessMagi = Math.max(0, annualMagi - phaseoutStart);
  const phaseoutReduction = Math.floor(excessMagi / 1000) * 100;
  const effectiveCap = Math.max(0, maxCap - phaseoutReduction);

  const allowableDeduction = Math.min(qualifiedOvertimePremium, effectiveCap);
  const estimatedFederalTaxSavings = allowableDeduction * (marginalRate / 100);
  const monthlySavings = estimatedFederalTaxSavings / 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Inputs */}
      <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900">
            1. Enter Your 2026 Overtime &amp; Tax Details
          </h2>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            2026 Rules
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
              <option value="single">Single / Head of Household ($12,500 cap)</option>
              <option value="mfj">Married Filing Jointly ($25,000 cap)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Regular Hourly Wage ($)
            </label>
            <input
              type="number"
              min={7.25}
              step={0.5}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Overtime Hours / Week
            </label>
            <input
              type="number"
              min={0}
              max={60}
              value={overtimeHoursPerWeek}
              onChange={(e) =>
                setOvertimeHoursPerWeek(Number(e.target.value) || 0)
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Weeks Worked With OT / Year
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

        <div className="flex items-start gap-2.5 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-600">
          <Info className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong>W-2 Box 12 Code TT:</strong> Only the extra{" "}
            <strong>0.5× FLSA overtime premium</strong> qualifies for the
            federal income tax deduction—not your base hourly wage. Social
            Security and Medicare (FICA) taxes still apply.
          </p>
        </div>
      </section>

      {/* Results + High-Intent Revenue CTA */}
      <section className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">2. Estimated 2026 Tax Savings</h2>
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-center space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Estimated Federal Tax Refund Boost
            </p>
            <p className="text-4xl font-extrabold text-emerald-400">
              ${Math.round(estimatedFederalTaxSavings).toLocaleString()}
            </p>
            <p className="text-xs text-slate-300">
              ≈ ${Math.round(monthlySavings).toLocaleString()}/month extra take-home
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Qualified Deduction</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(allowableDeduction).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">
                Cap: ${effectiveCap.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">Total Gross OT Pay</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(totalOvertimeGrossPay).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">
                {totalOvertimeHours.toLocaleString()} OT hrs/yr
              </p>
            </div>
          </div>
        </div>

        {/* Revenue CTA */}
        <div className="space-y-2.5 border-t border-slate-700 pt-4">
          <a
            href={AFFILIATE_LINKS.taxFilingPrimary.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 px-4 py-3 text-center text-sm font-bold text-slate-950 transition"
          >
            <DollarSign className="h-4 w-4" />
            {AFFILIATE_LINKS.taxFilingPrimary.cta}
          </a>
          <p className="text-[11px] text-center text-slate-400">
            {AFFILIATE_LINKS.taxFilingPrimary.subtext}
          </p>
        </div>
      </section>
    </div>
  );
}