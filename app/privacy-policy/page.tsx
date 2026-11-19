import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data handling practices for Pay.ResumeClimbAI.com.",
  alternates: { canonical: "https://pay.resumeclimbai.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-6 text-sm text-slate-700 leading-7">
      <h1 className="text-3xl font-extrabold text-slate-950">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last Updated: November 19, 2026</p>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">1. Client-Side Calculations</h2>
        <p>
          All tax and paycheck calculators on <strong>pay.resumeclimbai.com</strong> run
          100% locally in your web browser. We do not collect, transmit, or store your
          salary, overtime hours, tips, MAGI, loan details, or tax estimates on our servers.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">2. Analytics &amp; Cookies</h2>
        <p>
          We may use standard web analytics and affiliate tracking cookies when you click
          outbound partner links to understand site traffic and attribute referrals. You can
          disable cookies anytime through your browser settings.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">3. Affiliate Links &amp; Third Parties</h2>
        <p>
          Some outbound links to tax preparation software and financial services are affiliate
          links. Clicking these links may direct you to third-party websites governed by their
          own privacy policies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">4. Contact</h2>
        <p>
          For privacy inquiries or partnership requests, contact us via{" "}
          <a
            href="https://www.resumeclimbai.com"
            className="text-emerald-700 font-semibold underline"
          >
            ResumeClimbAI.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}