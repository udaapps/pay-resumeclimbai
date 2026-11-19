import type { Metadata } from "next";
import Link from "next/link";
import TipsCalculator from "@/components/TipsCalculator";

export const metadata: Metadata = {
  title: "No Tax on Tips Calculator (2026) — W-2 Code TP & Refund Estimator",
  description:
    "Free 2026 No Tax on Tips calculator. Estimate your federal income tax refund boost under the $25,000 qualified tips deduction (W-2 Box 12 Code TP & Schedule 1-A).",
  keywords: [
    "no tax on tips calculator",
    "no tax on tips refund calculator",
    "how to calculate no tax on tips",
    "no tax on tip calculator",
    "w2 box 12 code tp calculator",
  ],
  alternates: {
    canonical: "https://pay.resumeclimbai.com/no-tax-on-tips-calculator",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "2026 No Tax on Tips Calculator",
      url: "https://pay.resumeclimbai.com/no-tax-on-tips-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the maximum No Tax on Tips deduction for 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligible workers can deduct up to $25,000 per return in qualified cash and credit card tips on their 2026 federal income tax return, subject to MAGI phase-outs starting at $150,000 single or $300,000 married filing jointly.",
          },
        },
        {
          "@type": "Question",
          name: "Do mandatory service charges or auto-gratuities count as qualified tips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Qualified tips must be voluntary payments determined by the customer. Mandatory service charges and automatic gratuities added to large-party bills are treated as regular wages.",
          },
        },
        {
          "@type": "Question",
          name: "Are tips still subject to Social Security and Medicare taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The 2026 deduction removes federal income tax on qualified tips up to $25,000, but 7.65% FICA payroll taxes (Social Security and Medicare) and applicable state income taxes still apply.",
          },
        },
      ],
    },
  ],
};

export default function NoTaxOnTipsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          2026 Tax Year • W-2 Box 12 Code TP &amp; Box 14b TTOC
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          No Tax on Tips Calculator (2026)
        </h1>
        <p className="text-slate-600 text-base leading-7">
          Estimate how much federal income tax you save under the 2026{" "}
          <strong>No Tax on Tips</strong> deduction. Enter your weekly reported
          tips, filing status, and tax bracket to calculate your Schedule 1-A
          deduction and remaining FICA payroll taxes.
        </p>
      </header>

      <TipsCalculator />

      {/* Guide & Worked Example */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 text-sm text-slate-700 leading-7">
        <h2 className="text-2xl font-bold text-slate-900">
          How the 2026 Qualified Tips Deduction Works
        </h2>
        <p>
          Starting with the 2026 tax return filed in early 2027, workers in
          eligible customarily tipped occupations can deduct up to{" "}
          <strong>$25,000</strong> in reported voluntary tips (cash, credit/debit
          card, or tip pools) from federal taxable income—even if they claim the
          standard deduction.
        </p>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900 mb-1">
            Worked Example: Server Earning $350/Week in Reported Tips
          </h3>
          <p>
            Working 50 weeks per year equals <strong>$17,500</strong> in
            reported tips (shown in W-2 Box 12 Code TP). Since $17,500 is under
            the $25,000 annual cap and MAGI is below $150,000, the full $17,500
            qualifies. In the 12% federal tax bracket, that reduces federal
            income tax by <strong>$2,100</strong>—though roughly{" "}
            <strong>$1,339</strong> in FICA payroll tax (7.65%) still applies.
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 pt-2">
          Quick Rules Summary
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="py-2 pr-4">Provision</th>
                <th className="py-2">2026 Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-semibold">Maximum Annual Deduction</td>
                <td className="py-2">$25,000 per tax return</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">W-2 Reporting Boxes</td>
                <td className="py-2">Box 12 Code TP (qualified tips) &amp; Box 14b (3-digit TTOC)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">MAGI Phase-Out</td>
                <td className="py-2">Starts at $150,000 Single / $300,000 Married Filing Jointly</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Eligible Tip Types</td>
                <td className="py-2">Voluntary cash, card, and tip-pool amounts (excludes mandatory service charges)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 text-sm text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-slate-900">
              Can I claim both No Tax on Tips and No Tax on Overtime?
            </h3>
            <p className="mt-1">
              Yes. If you work in an eligible tipped occupation and also earn
              FLSA overtime pay, the two deductions are tracked separately on
              Schedule 1-A.{" "}
              <Link href="/" className="text-emerald-700 font-semibold underline">
                Calculate your overtime tax savings here →
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">
              What if I am self-employed or receive a 1099-NEC / 1099-K?
            </h3>
            <p className="mt-1">
              Self-employed workers in listed tipped occupations (such as salon
              stylists or rideshare drivers) may also qualify for reported
              voluntary tips, capped at net business income from the tipped
              activity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}