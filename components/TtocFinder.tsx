"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

type TtocItem = {
  code: string;
  occupation: string;
  category: string;
  examples: string;
};

const TTOC_LIST: TtocItem[] = [
  { code: "101", occupation: "Bartenders", category: "Food & Beverage", examples: "Mixologists, barbacks receiving pooled tips" },
  { code: "102", occupation: "Waiters & Waitresses", category: "Food & Beverage", examples: "Restaurant servers, banquet servers, cocktail servers" },
  { code: "103", occupation: "Food Servers (Non-Restaurant)", category: "Food & Beverage", examples: "Room service, catering, stadium/venue servers" },
  { code: "104", occupation: "Dining Room & Cafeteria Attendants", category: "Food & Beverage", examples: "Bussers, food runners, bartender helpers" },
  { code: "105", occupation: "Chefs & Head Cooks (Tipped)", category: "Food & Beverage", examples: "Hibachi chefs, sushi chefs receiving direct customer tips" },
  { code: "106", occupation: "Cooks & Food Prep Workers", category: "Food & Beverage", examples: "Line cooks in valid tip-sharing pools" },
  { code: "107", occupation: "Baristas & Counter Attendants", category: "Food & Beverage", examples: "Coffee shop baristas, ice cream & bakery counter staff" },
  { code: "108", occupation: "Dishwashers (Tip Pool)", category: "Food & Beverage", examples: "Back-of-house staff in qualifying tip pools" },
  { code: "109", occupation: "Hosts & Hostesses", category: "Food & Beverage", examples: "Restaurant hosts managing seating and takeout tips" },
  { code: "201", occupation: "Baggage Porters & Bellhops", category: "Hospitality & Lodging", examples: "Hotel bellhops, airport skycaps, cruise porters" },
  { code: "202", occupation: "Concierges", category: "Hospitality & Lodging", examples: "Hotel and luxury residential concierges" },
  { code: "203", occupation: "Hotel & Motel Housekeepers", category: "Hospitality & Lodging", examples: "Room attendants, turndown service staff" },
  { code: "204", occupation: "Valet & Parking Attendants", category: "Hospitality & Lodging", examples: "Hotel, restaurant, and event valet drivers" },
  { code: "301", occupation: "Hairdressers, Hairstylists & Cosmetologists", category: "Personal Care & Beauty", examples: "Salon stylists, colorists, shampoo assistants" },
  { code: "302", occupation: "Barbers", category: "Personal Care & Beauty", examples: "Licensed barbers, shave specialists" },
  { code: "303", occupation: "Manicurists & Pedicurists", category: "Personal Care & Beauty", examples: "Nail technicians, spa nail artists" },
  { code: "304", occupation: "Skincare Specialists & Estheticians", category: "Personal Care & Beauty", examples: "Facialists, waxing and lash technicians" },
  { code: "305", occupation: "Massage Therapists", category: "Personal Care & Beauty", examples: "Spa and wellness massage therapists" },
  { code: "306", occupation: "Tattoo Artists & Body Piercers", category: "Personal Care & Beauty", examples: "Custom tattoo and piercing specialists" },
  { code: "401", occupation: "Taxi & Rideshare Drivers", category: "Transportation & Delivery", examples: "Uber, Lyft, cab, and black-car chauffeurs" },
  { code: "402", occupation: "Food & Grocery Delivery Drivers", category: "Transportation & Delivery", examples: "Pizza delivery, DoorDash, Instacart, courier drivers" },
  { code: "403", occupation: "Shuttle & Tour Bus Drivers", category: "Transportation & Delivery", examples: "Airport shuttle, limo, and sightseeing drivers" },
  { code: "404", occupation: "Movers & Furniture Delivery Crew", category: "Transportation & Delivery", examples: "Residential moving crews and white-glove delivery" },
  { code: "501", occupation: "Gambling Dealers", category: "Gaming & Entertainment", examples: "Blackjack, poker, craps, and roulette dealers" },
  { code: "502", occupation: "Slot & Casino Floor Attendants", category: "Gaming & Entertainment", examples: "Jackpot payout attendants, keno runners" },
  { code: "503", occupation: "Tour & Travel Guides", category: "Recreation & Events", examples: "City guides, fishing charters, rafting and ski guides" },
  { code: "504", occupation: "Caddies & Golf Course Attendants", category: "Recreation & Events", examples: "Golf caddies, bag drop, beverage cart staff" },
  { code: "505", occupation: "DJs, Musicians & Event Entertainers", category: "Recreation & Events", examples: "Wedding DJs, lounge musicians, coat check attendants" },
  { code: "601", occupation: "Car Wash & Auto Detailers", category: "Home & Auto Services", examples: "Hand car wash staff and mobile auto detailers" },
  { code: "602", occupation: "Pet Groomers & Dog Walkers", category: "Home & Auto Services", examples: "Salon pet groomers, bathers, boarding staff" },
];

const CATEGORIES = [
  "All",
  "Food & Beverage",
  "Hospitality & Lodging",
  "Personal Care & Beauty",
  "Transportation & Delivery",
  "Gaming & Entertainment",
  "Recreation & Events",
  "Home & Auto Services",
];

export default function TtocFinder() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TTOC_LIST.filter((item) => {
      const matchesCat = category === "All" || item.category === category;
      const matchesQuery =
        !q ||
        item.code.includes(q) ||
        item.occupation.toLowerCase().includes(q) ||
        item.examples.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-7 relative">
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search job title, keyword, or 3-digit code (e.g., bartender, 102, uber)..."
            className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-2.5 text-sm text-slate-900"
          />
        </div>
        <div className="md:col-span-5">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All" ? "All Occupation Categories" : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
              <th className="py-2.5 pr-4">TTOC</th>
              <th className="py-2.5 pr-4">Occupation</th>
              <th className="py-2.5 pr-4">Category</th>
              <th className="py-2.5">Common Job Titles</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-500">
                  No matching occupation found for &quot;{query}&quot;. Try a
                  broader term like server, driver, stylist, or hotel.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.code} className="hover:bg-slate-50">
                  <td className="py-3 pr-4">
                    <span className="inline-block rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-mono font-bold text-emerald-800">
                      {item.code}
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-semibold text-slate-900">
                    {item.occupation}
                  </td>
                  <td className="py-3 pr-4 text-xs text-slate-600">
                    {item.category}
                  </td>
                  <td className="py-3 text-xs text-slate-600">
                    {item.examples}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl bg-slate-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <div>
          <p className="font-bold">Found your tipped occupation?</p>
          <p className="text-xs text-slate-300">
            Estimate your 2026 federal tax savings up to the $25,000 cap.
          </p>
        </div>
        <Link
          href="/no-tax-on-tips-calculator"
          className="rounded-xl bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 text-xs font-bold text-slate-950 text-center shrink-0 transition"
        >
          Open No Tax on Tips Calculator →
        </Link>
      </div>
    </section>
  );
}