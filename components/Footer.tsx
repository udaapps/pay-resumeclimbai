import Link from "next/link";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-bold text-white text-base">
              Pay.ResumeClimbAI — 2026 US Tax Hub
            </p>
            <p className="text-xs leading-6 text-slate-400">
              Free, privacy-first 2026 federal tax deduction calculators built for
              US hourly workers, tipped employees, and families. 100% browser-based
              — we never store your salary or tax numbers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">2026 Tax Calculators</p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400">
                  No Tax on Overtime Calculator (W-2 Code TT)
                </Link>
              </li>
              <li>
                <Link
                  href="/no-tax-on-tips-calculator"
                  className="hover:text-emerald-400"
                >
                  No Tax on Tips Calculator (W-2 Code TP)
                </Link>
              </li>
              <li>
                <Link
                  href="/trump-account-calculator"
                  className="hover:text-emerald-400"
                >
                  Trump Account (530A) Growth Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tipped-occupation-code"
                  className="hover:text-emerald-400"
                >
                  Treasury Tipped Occupation Code (TTOC) Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/car-loan-interest-calculator"
                  className="hover:text-emerald-400"
                >
                  Car Loan Interest Deduction Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white">Grow Your Career Income</p>
            <p className="text-xs leading-6 text-slate-400">
              Tax deductions help you keep more of what you earn. Ready to land a
              higher-paying role?
            </p>
            <a
              href={AFFILIATE_LINKS.resumeCrossSell.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition"
            >
              {AFFILIATE_LINKS.resumeCrossSell.cta}
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-5 text-[11px] leading-5 text-slate-400 space-y-3">
          <p>
            <strong>Tax &amp; Financial Disclaimer:</strong> All calculators on
            pay.resumeclimbai.com provide educational estimates based on 2026
            federal tax provisions (Schedule 1-A / Public Law 119-21). They do
            not constitute official tax, legal, or accounting advice. FICA
            (Social Security &amp; Medicare) and state income taxes may still
            apply. Always consult a qualified CPA or official IRS instructions
            before filing.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <p>© 2026–2027 Pay.ResumeClimbAI.com. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-emerald-400 underline">
                About &amp; Affiliate Disclosure
              </Link>
              <Link href="/privacy-policy" className="hover:text-emerald-400 underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}