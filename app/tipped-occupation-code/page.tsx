import type { Metadata } from "next";
import TtocFinder from "@/components/TtocFinder";

export const metadata: Metadata = {
  title: "Treasury Tipped Occupation Code (TTOC) List & Lookup — 2026 W-2 Box 14b",
  description:
    "Search Treasury Tipped Occupation Codes (TTOC) for 2026 Form W-2 Box 14b and Schedule 1-A. Instantly check if your job qualifies for the $25,000 No Tax on Tips deduction.",
  keywords: [
    "treasury tipped occupation code",
    "what is treasury tipped occupation code",
    "treasury tipped occupation code ttoc",
    "treasury tipped occupation codes list",
    "w2 box 14b tipped occupation code",
  ],
  alternates: {
    canonical: "https://pay.resumeclimbai.com/tipped-occupation-code",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Treasury Tipped Occupation Code (TTOC) Finder",
      url: "https://pay.resumeclimbai.com/tipped-occupation-code",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Treasury Tipped Occupation Code (TTOC)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Treasury Tipped Occupation Code (TTOC) is a 3-digit IRS/Treasury identifier reported in Box 14b of 2026 Form W-2 confirming that an employee works in an occupation that customarily and regularly receives tips.",
          },
        },
        {
          "@type": "Question",
          name: "Where does the TTOC appear on my 2026 Form W-2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Employers enter the 3-digit TTOC in Box 14b alongside your qualified tip dollar amount in Box 12 (Code TP). You enter both on Schedule 1-A when filing your 2026 federal tax return.",
          },
        },
      ],
    },
  ],
};

export default function TippedOccupationCodePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          2026 Form W-2 Box 14b Reference
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Treasury Tipped Occupation Code (TTOC) Lookup
        </h1>
        <p className="text-slate-600 text-base leading-7">
          Look up 3-digit <strong>Treasury Tipped Occupation Codes</strong>{" "}
          used to verify eligibility for the 2026 federal No Tax on Tips
          deduction (Schedule 1-A &amp; W-2 Box 14b).
        </p>
      </header>

      <TtocFinder />

      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 text-sm text-slate-700 leading-7">
        <h2 className="text-2xl font-bold text-slate-900">
          What Is a Treasury Tipped Occupation Code (TTOC)?
        </h2>
        <p>
          To prevent non-tipped roles from reclassifying wages as tips, the US
          Treasury established a list of eligible customarily tipped occupations
          and assigned each a 3-digit <strong>TTOC</strong>. Starting with 2026
          W-2 forms, payroll providers print this code in{" "}
          <strong>Box 14b</strong> while reporting total qualified tips in{" "}
          <strong>Box 12 Code TP</strong>.
        </p>
        <p className="text-xs text-slate-500">
          <strong>Reference Note:</strong> Always confirm the exact 3-digit code
          printed on your official 2026 Form W-2 Box 14b or published in the
          final IRS Schedule 1-A instructions before submitting your tax return.
        </p>
      </section>
    </main>
  );
}