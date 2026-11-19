"use client";

import { useState } from "react";
import { TrendingUp, ShieldCheck, Info } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

function projectBalance(
  seed: number,
  annualContribution: number,
  annualReturnPct: number,
  yearsOfContributions: number,
  totalYears: number
) {
  const r = annualReturnPct / 100;
  let balance = seed;
  for (let year = 1; year <= totalYears; year++) {
    const contrib = year <= yearsOfContributions ? annualContribution : 0;
    balance = (balance + contrib) * (1 + r);
  }
  return balance;
}

export default function TrumpAccountCalculator() {
  const [childAge, setChildAge] = useState<number>(0);
  const [eligibleForSeed, setEligibleForSeed] = useState<boolean>(true);
  const [familyAnnualContrib, setFamilyAnnualContrib] = useState<number>(1500);
  const [employerAnnualContrib, setEmployerAnnualContrib] = useState<number>(1000);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);

  const seedAmount = eligibleForSeed ? 1000 : 0;
  // Section 530A caps total annual private + employer contributions at $5,000/yr
  // (employer portion capped at $2,500/yr, reported on W-2 Box 12 Code TA)
  const cappedEmployer = Math.min(2500, Math.max(0, employerAnnualContrib));
  const totalAnnualContrib = Math.min(
    5000,
    Math.max(0, familyAnnualContrib) + cappedEmployer
  );

  const yearsTo18 = Math.max(1, 18 - childAge);
  const yearsTo25 = Math.max(yearsTo18, 25 - childAge);
  const yearsTo30 = Math.max(yearsTo25, 30 - childAge);

  const balanceAt18 = projectBalance(
    seedAmount,
    totalAnnualContrib,
    expectedReturn,
    yearsTo18,
    yearsTo18
  );
  const balanceAt25 = projectBalance(
    seedAmount,
    totalAnnualContrib,
    expectedReturn,
    yearsTo18,
    yearsTo25
  );
  const balanceAt30 = projectBalance(
    seedAmount,
    totalAnnualContrib,
    expectedReturn,
    yearsTo18,
    yearsTo30
  );

  const totalContributedBy18 = seedAmount + totalAnnualContrib * yearsTo18;
  const investmentGrowthBy18 = Math.max(0, balanceAt18 - totalContributedBy18);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Inputs */}
      <section className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900">
            1. Section 530A Contribution Settings
          </h2>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            W-2 Code TA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Child&apos;s Current Age (0–17)
            </label>
            <input
              type="number"
              min={0}
              max={17}
              value={childAge}
              onChange={(e) =>
                setChildAge(Math.min(17, Math.max(0, Number(e.target.value) || 0)))
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Expected Annual Return (%)
            </label>
            <select
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900"
            >
              <option value={6}>6% (Conservative)</option>
              <option value={8}>8% (Historical Real S&amp;P 500 Avg)</option>
              <option value={10}>10% (Historical Nominal S&amp;P 500 Avg)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Family Annual Contribution ($)
            </label>
            <input
              type="number"
              min={0}
              max={5000}
              step={100}
              value={familyAnnualContrib}
              onChange={(e) =>
                setFamilyAnnualContrib(
                  Math.min(5000, Math.max(0, Number(e.target.value) || 0))
                )
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Employer Match / Year (Max $2,500)
            </label>
            <input
              type="number"
              min={0}
              max={2500}
              step={100}
              value={employerAnnualContrib}
              onChange={(e) =>
                setEmployerAnnualContrib(
                  Math.min(2500, Math.max(0, Number(e.target.value) || 0))
                )
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900"
            />
          </div>
        </div>

        <label className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 cursor-pointer">
          <input
            type="checkbox"
            checked={eligibleForSeed}
            onChange={(e) => setEligibleForSeed(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-emerald-600"
          />
          <span className="text-xs text-slate-700">
            <strong>Include $1,000 Federal Pilot Seed</strong> (for eligible US
            citizen children born Jan 1, 2025 – Dec 31, 2028)
          </span>
        </label>

        <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900">
          <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            Combined annual family + employer contributions are capped at{" "}
            <strong>$5,000/year</strong> until age 18 (currently calculating{" "}
            <strong>${totalAnnualContrib.toLocaleString()}/yr</strong>).
            Projections past age 18 assume no further contributions—compound
            growth only.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">2. Projected Account Growth</h2>
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          </div>

          <div className="rounded-xl bg-slate-800 p-5 text-center space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Projected Balance at Age 18
            </p>
            <p className="text-4xl font-extrabold text-emerald-400">
              ${Math.round(balanceAt18).toLocaleString()}
            </p>
            <p className="text-xs text-slate-300">
              Contributed: ${Math.round(totalContributedBy18).toLocaleString()} •
              Growth: ${Math.round(investmentGrowthBy18).toLocaleString()}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">If Held to Age 25</p>
              <p className="text-base font-bold text-white mt-0.5">
                ${Math.round(balanceAt25).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">No extra deposits</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-3.5">
              <p className="text-slate-400">If Held to Age 30</p>
              <p className="text-base font-bold text-emerald-300 mt-0.5">
                ${Math.round(balanceAt30).toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400">First home / business</p>
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
            Track W-2 Code TA &amp; 2026 Family Tax Benefits →
          </a>
          <p className="text-[11px] text-center text-slate-400">
            Hypothetical compound growth illustration—market returns vary.
          </p>
        </div>
      </section>
    </div>
  );
}