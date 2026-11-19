import type { Metadata } from "next";
import Link from "next/link";
import CarLoanCalculator from "@/components/CarLoanCalculator";

export const metadata: Metadata = {
  title: "Car Loan Interest Deduction Calculator (2026) — $10,000 Auto Tax Savings",
  description:
    "Free 2026 car loan interest tax deduction calculator. Calculate your federal tax savings on US-assembled new auto loan interest up to $10,000 under Schedule 1-A.",
  keywords: [
    "car loan interest deduction calculator",
    "how to calculate car loan interest tax deduction",
    "auto loan interest tax deduction 2026",
    "us assembled car loan deduction",
  ],
  alternates: {
    canonical: "https://pay.resumeclimbai.com/car-loan-interest-calculator",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "2026 Car Loan Interest Deduction Calculator",
      url: "https://pay.resumeclimbai.com/car-loan-interest-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much car loan interest can I deduct in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligible borrowers can deduct up to $10,000 per year in interest paid on a new personal-use passenger vehicle loan whose final assembly takes place in the United States, subject to MAGI phase-outs starting at $100,000 single or $200,000 joint.",
          },
        },
        {
          "@type": "Question",
          name: "Do used cars or leased vehicles qualify for the car loan interest deduction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Only loans for brand-new personal-use vehicles with final assembly in the United States qualify. Used car loans, fleet/commercial vehicles, and leases are excluded.",
          },
        },
      ],
    },
  ],
};

export default function CarLoanInterestPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          2026 Schedule 1-A • US-Assembled New Vehicles
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Car Loan Interest Deduction Calculator (2026)
        </h1>
        <p className="text-slate-600 text-base leading-7">
          Estimate your federal tax savings from the new{" "}
          <strong>$10,000 Car Loan Interest Deduction</strong>. Enter your auto
          loan amount, APR, term, and income to see your Year-1 deductible
          interest and tax refund boost.
        </p>
      </header>

      <CarLoanCalculator />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 text-sm text-slate-700 leading-7">
        <h2 className="text-2xl font-bold text-slate-900">
          2026 Auto Loan Interest Deduction Eligibility Rules
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>US Final Assembly Required:</strong> Your vehicle&apos;s
            final assembly must take place in the United States (verify via the
            NHTSA VIN Decoder; US-built VINs usually start with 1, 4, or 5).
          </li>
          <li>
            <strong>Income Phase-Out:</strong> The $10,000 maximum deduction
            begins phasing out at <strong>$100,000 MAGI</strong> (Single) or{" "}
            <strong>$200,000 MAGI</strong> (Married Filing Jointly), dropping by
            $200 per $1,000 over the threshold until fully phased out at
            $150,000 / $250,000.
          </li>
          <li>
            <strong>Standard Deduction Friendly:</strong> Available as a
            Schedule 1-A deduction even if you do not itemize deductions.
          </li>
        </ul>
        <p className="text-xs text-slate-500 pt-2">
          Explore more 2026 tax savings:{" "}
          <Link href="/" className="text-emerald-700 font-semibold underline">
            No Tax on Overtime Calculator
          </Link>{" "}
          •{" "}
          <Link
            href="/no-tax-on-tips-calculator"
            className="text-emerald-700 font-semibold underline"
          >
            No Tax on Tips Calculator
          </Link>
        </p>
      </section>
    </main>
  );
}