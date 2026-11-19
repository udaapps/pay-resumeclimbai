import type { Metadata } from "next";
import Link from "next/link";
import OvertimeCalculator from "@/components/OvertimeCalculator";

export const metadata: Metadata = {
  title: "No Tax on Overtime Calculator (2026) — W-2 Code TT & Refund Estimator",
  description:
    "Free 2026 No Tax on Overtime calculator. Instantly estimate your federal tax refund boost under Schedule 1-A and W-2 Box 12 Code TT ($12,500 single / $25,000 joint cap).",
  keywords: [
    "no tax on overtime calculator",
    "how to calculate no tax on overtime",
    "no tax on overtime tax refund calculator",
    "no tax on overtime calculator 2026",
    "w2 box 12 code tt calculator",
  ],
  alternates: {
    canonical: "https://pay.resumeclimbai.com/",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "2026 No Tax on Overtime Calculator",
      url: "https://pay.resumeclimbai.com/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is the 2026 No Tax on Overtime deduction calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the 2026 federal overtime deduction (Schedule 1-A), eligible workers can deduct the 0.5x FLSA overtime premium portion of time-and-a-half pay—up to $12,500 for single filers or $25,000 for married couples filing jointly.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find my qualified overtime amount on my 2026 W-2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Starting with 2026 Form W-2, employers report qualified FLSA overtime premium compensation in Box 12 using Code TT.",
          },
        },
        {
          "@type": "Question",
          name: "Does No Tax on Overtime eliminate Social Security and Medicare taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The deduction reduces federal taxable income only. FICA payroll taxes (6.2% Social Security and 1.45% Medicare) and applicable state income taxes still apply.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          Updated November 2026 • Schedule 1-A &amp; W-2 Box 12 Code TT
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          No Tax on Overtime Calculator (2026)
        </h1>
        <p className="text-slate-600 text-base leading-7">
          Calculate your estimated 2026 federal tax refund increase under the{" "}
          <strong>No Tax on Overtime</strong> deduction. Enter your hourly wage,
          weekly overtime hours, and tax bracket to see your qualified deduction
          and net tax savings instantly.
        </p>
      </header>

      <OvertimeCalculator />

      {/* Hub Cards for Internal Linking */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          More 2026 US Tax &amp; Paycheck Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <Link
            href="/no-tax-on-tips-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-400 transition"
          >
            <p className="font-bold text-slate-900">No Tax on Tips Calculator</p>
            <p className="mt-1 text-xs text-slate-600">
              Estimate your $25,000 federal tips deduction (W-2 Code TP).
            </p>
          </Link>
          <Link
            href="/trump-account-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-400 transition"
          >
            <p className="font-bold text-slate-900">Trump Account (530A)</p>
            <p className="mt-1 text-xs text-slate-600">
              Project child investment growth with $1,000 seed &amp; contributions.
            </p>
          </Link>
          <Link
            href="/tipped-occupation-code"
            className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-400 transition"
          >
            <p className="font-bold text-slate-900">TTOC Code Finder</p>
            <p className="mt-1 text-xs text-slate-600">
              Search the official 3-digit Treasury Tipped Occupation Codes.
            </p>
          </Link>
          <Link
            href="/car-loan-interest-calculator"
            className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-400 transition"
          >
            <p className="font-bold text-slate-900">Car Loan Interest</p>
            <p className="mt-1 text-xs text-slate-600">
              Calculate up to $10,000 in US-assembled auto loan interest savings.
            </p>
          </Link>
        </div>
      </section>

      {/* Deep SEO Guide + Worked Example */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 text-sm text-slate-700 leading-7">
        <h2 className="text-2xl font-bold text-slate-900">
          How the 2026 No Tax on Overtime Rule Works
        </h2>
        <p>
          Many hourly workers assume their entire time-and-a-half overtime check
          is tax-free. In reality, the federal deduction applies strictly to the{" "}
          <strong>FLSA overtime premium</strong>—the extra <strong>0.5×</strong>{" "}
          paid above your regular hourly rate for hours worked beyond 40 in a
          workweek.
        </p>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <h3 className="font-bold text-slate-900 mb-1">
            Worked Example: $28/hr Worker With 8 OT Hours/Week
          </h3>
          <p>
            At $28/hr regular pay, your time-and-a-half rate is $42/hr, and the
            qualified overtime premium is <strong>$14/hr</strong>. Working 8
            overtime hours per week for 48 weeks gives 384 overtime hours × $14
            = <strong>$5,376</strong> reported in W-2 Box 12 Code TT. In the 22%
            federal tax bracket, that deduction saves{" "}
            <strong>$1,183</strong> in federal income tax.
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 pt-2">
          2026 Deduction Limits &amp; Income Phase-Outs
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                <th className="py-2 pr-4">Filing Status</th>
                <th className="py-2 pr-4">Max Annual Deduction</th>
                <th className="py-2">MAGI Phase-Out Begins</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-semibold">Single / Head of Household</td>
                <td className="py-2 pr-4">$12,500</td>
                <td className="py-2">$150,000 ($100 reduction per $1,000 over)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Married Filing Jointly</td>
                <td className="py-2 pr-4">$25,000</td>
                <td className="py-2">$300,000 ($100 reduction per $1,000 over)</td>
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
              Where do I find qualified overtime on my 2026 W-2?
            </h3>
            <p className="mt-1">
              Employers report qualified FLSA overtime premium compensation in{" "}
              <strong>Box 12, Code TT</strong> on your 2026 Form W-2, which you
              carry over to Schedule 1-A when filing in early 2027.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">
              Does No Tax on Overtime eliminate Social Security and Medicare taxes?
            </h3>
            <p className="mt-1">
              No. FICA payroll taxes (6.2% Social Security and 1.45% Medicare)
              are still withheld on all overtime wages, and state income tax
              rules vary by state.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">
              Can I claim this deduction if I take the Standard Deduction?
            </h3>
            <p className="mt-1">
              Yes. The overtime deduction is an above-the-line / Schedule 1-A
              deduction available whether you take the standard deduction or
              itemize.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}