import type { Metadata } from "next";
import Link from "next/link";
import TrumpAccountCalculator from "@/components/TrumpAccountCalculator";

export const metadata: Metadata = {
  title: "Trump Account Calculator (Section 530A) — Kids Investment Growth Estimator",
  description:
    "Free Trump Account (530A) growth calculator. Project your child's compound investment balance at ages 18, 25, and 30 with the $1,000 federal seed, family deposits, and W-2 Code TA employer match.",
  keywords: [
    "trump account calculator",
    "trump account growth calculator",
    "trump accounts calculator",
    "trump account for kids calculator",
    "section 530a account calculator",
  ],
  alternates: {
    canonical: "https://pay.resumeclimbai.com/trump-account-calculator",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Trump Account (Section 530A) Growth Calculator",
      url: "https://pay.resumeclimbai.com/trump-account-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can you contribute to a Trump Account (Section 530A) each year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Total annual contributions from parents, family, and employers are capped at $5,000 per child per year until the year the child turns 18. Employers may contribute up to $2,500 tax-free (reported on W-2 Box 12 Code TA), which counts toward the $5,000 limit.",
          },
        },
        {
          "@type": "Question",
          name: "Who qualifies for the $1,000 federal seed deposit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Section 530A pilot program, eligible US citizen children born between January 1, 2025, and December 31, 2028, with a valid Social Security Number qualify for a one-time $1,000 Treasury seed deposit.",
          },
        },
        {
          "@type": "Question",
          name: "How are Trump Account funds invested?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Section 530A accounts must be invested in eligible low-cost mutual funds or ETFs tracking broad US equity indices (such as the S&P 500) with annual expense ratios capped at 0.10%.",
          },
        },
      ],
    },
  ],
};

export default function TrumpAccountPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Section 530A • $1,000 Pilot Seed &amp; W-2 Box 12 Code TA
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Trump Account (530A) Growth Calculator
        </h1>
        <p className="text-slate-600 text-base leading-7">
          Project how a Section 530A child investment account grows from birth to
          ages 18, 25, and 30. Model the $1,000 federal seed deposit, annual
          family contributions, and tax-free employer contributions up to the
          $5,000 annual limit.
        </p>
      </header>

      <TrumpAccountCalculator />

      {/* Growth Comparison Table */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 text-sm text-slate-700 leading-7">
        <h2 className="text-2xl font-bold text-slate-900">
          Sample 530A Compound Growth Scenarios (8% Annual Return)
        </h2>
        <p>
          Because Section 530A accounts invest in low-fee broad US stock index
          funds and compound tax-deferred, even modest yearly deposits grow
          significantly by adulthood:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="py-2 pr-4">Annual Deposit (Ages 0–18)</th>
                <th className="py-2 pr-4">With $1,000 Seed at Age 18</th>
                <th className="py-2 pr-4">Held to Age 25</th>
                <th className="py-2">Held to Age 30</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2.5 pr-4 font-semibold">$0 (Seed Only)</td>
                <td className="py-2.5 pr-4">$3,996</td>
                <td className="py-2.5 pr-4">$6,848</td>
                <td className="py-2.5">$10,063</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">$1,000 / year</td>
                <td className="py-2.5 pr-4">$44,442</td>
                <td className="py-2.5 pr-4">$76,166</td>
                <td className="py-2.5">$111,913</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">$2,500 / year</td>
                <td className="py-2.5 pr-4">$105,112</td>
                <td className="py-2.5 pr-4">$180,143</td>
                <td className="py-2.5">$264,689</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">$5,000 / year (Max)</td>
                <td className="py-2.5 pr-4 font-bold text-emerald-700">$206,227</td>
                <td className="py-2.5 pr-4">$353,437</td>
                <td className="py-2.5">$519,315</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500">
          Planning your 2026 paycheck deductions? Also check our{" "}
          <Link href="/" className="text-emerald-700 font-semibold underline">
            No Tax on Overtime Calculator
          </Link>{" "}
          and{" "}
          <Link
            href="/car-loan-interest-calculator"
            className="text-emerald-700 font-semibold underline"
          >
            Car Loan Interest Deduction Calculator
          </Link>
          .
        </p>
      </section>
    </main>
  );
}