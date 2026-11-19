import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Affiliate Disclosure",
  description:
    "About Pay.ResumeClimbAI.com, our 2026 US tax calculator methodology, and FTC affiliate disclosure.",
  alternates: { canonical: "https://pay.resumeclimbai.com/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-6 text-sm text-slate-700 leading-7">
      <h1 className="text-3xl font-extrabold text-slate-950">
        About Pay.ResumeClimbAI &amp; Affiliate Disclosure
      </h1>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">Our Mission</h2>
        <p>
          Pay.ResumeClimbAI.com is an independent career and paycheck tools hub built by{" "}
          <strong>UDA Apps</strong> (creators of ResumeClimb AI). Our free calculators help
          US hourly workers, tipped employees, and families estimate 2026 federal deductions
          under Schedule 1-A, W-2 Box 12 (Codes TT, TP, TA), and Box 14b (TTOC).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">FTC Affiliate Disclosure</h2>
        <p>
          In accordance with FTC guidelines, please note that pay.resumeclimbai.com may earn
          an affiliate commission when you click links to tax preparation software or
          financial partners and complete a qualifying signup or filing—at no additional cost
          to you. Editorial calculations and formulas remain completely independent.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">Educational Disclaimer</h2>
        <p>
          All results are educational estimates only and do not constitute legal, tax, or
          accounting advice. Always verify your final return with a qualified CPA or official
          IRS instructions.
        </p>
      </section>
    </main>
  );
}