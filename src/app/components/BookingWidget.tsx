"use client";

import { useState, useMemo } from "react";
import { Send, PhoneCall, Calendar, Users, MessageSquare } from "lucide-react";
import type { Trek } from "../data/treks";
import { getPriceForGroup } from "../data/treks";
import { contactEmail, contactPhone } from "../data/contact";

type BookingWidgetProps = {
  trek: Trek;
};

export function BookingWidget({ trek }: BookingWidgetProps) {
  const [peopleInput, setPeopleInput] = useState("2");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const people = useMemo(() => {
    const parsed = Number.parseInt(peopleInput, 10);
    return Math.max(1, isNaN(parsed) ? 1 : parsed);
  }, [peopleInput]);

  const { pricePerPerson, total } = useMemo(() => {
    return getPriceForGroup(trek, people);
  }, [trek, people]);

  function handlePeopleChange(val: string) {
    const digits = val.replace(/\D/g, "");
    if (!digits) {
      setPeopleInput("");
      return;
    }
    setPeopleInput(String(Math.max(1, Number.parseInt(digits, 10))));
  }

  // Generate pre-filled WhatsApp link
  const whatsappBookingUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello Magical Toubkal Trek! I'd like to book the "${trek.title}" tour.\n\n` +
      `📅 Travel Date: ${date || "Not specified yet"}\n` +
      `👥 Group Size: ${people} travelers\n` +
      `💰 Est. Price: €${pricePerPerson} per person (€${total} total)\n` +
      `📝 Notes: ${notes || "None"}\n\n` +
      `Please let me know if this date is available and how to proceed!`
    );
    return `https://wa.me/${contactPhone.replace(/\+/g, "")}?text=${text}`;
  }, [trek, date, people, pricePerPerson, total, notes]);

  // Generate pre-filled Mailto link
  const emailBookingUrl = useMemo(() => {
    const subject = encodeURIComponent(`Booking Inquiry: ${trek.title}`);
    const body = encodeURIComponent(
      `Hello Magical Toubkal Trek,\n\n` +
      `I would like to inquire about booking the "${trek.title}" tour:\n\n` +
      `- Proposed Date: ${date || "To be discussed"}\n` +
      `- Number of Travelers: ${people}\n` +
      `- Estimated Total Price: €${total} (€${pricePerPerson} per person)\n` +
      `- Special Requests/Notes: ${notes || "None"}\n\n` +
      `Please confirm availability for our party.\n\n` +
      `Best regards,\n[My Name]`
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [trek, date, people, pricePerPerson, total, notes]);

  return (
    <div className="glass-panel rounded-2xl shadow-[0_24px_80px_rgba(28,45,55,0.06)] border border-slate-200/80 overflow-hidden sticky top-24">
      {/* Header banner */}
      <div className="bg-brand-slate p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-terracotta">Book With Local Guides</p>
        <h3 className="text-2xl font-extrabold mt-1 tracking-tight">Reserve This Tour</h3>
        <p className="text-xs text-slate-300 leading-relaxed mt-2">
          Check the group price and send your dates. No payment needed to ask.
        </p>
      </div>

      {/* Inputs */}
      <div className="p-6 space-y-5 bg-white/50">
        
        {/* People counter */}
        <div className="space-y-1.5">
          <label htmlFor="travelers" className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-brand-terracotta" />
            Number of Travelers
          </label>
          <div className="flex gap-2 items-center">
            <input
              id="travelers"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={peopleInput}
              onChange={(e) => handlePeopleChange(e.target.value)}
              onBlur={() => {
                if (!peopleInput || people < 1) setPeopleInput("1");
              }}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta"
            />
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setPeopleInput(String(people + 1))}
                className="px-2.5 py-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200"
              >
                +
              </button>
              <button
                onClick={() => setPeopleInput(String(Math.max(1, people - 1)))}
                className="px-2.5 py-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {/* Date picker */}
        <div className="space-y-1.5">
          <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brand-terracotta" />
            Proposed Start Date
          </label>
          <input
            id="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta"
          />
        </div>

        {/* Custom notes */}
        <div className="space-y-1.5">
          <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-brand-terracotta" />
            Special Requests / Dietary Needs
          </label>
          <textarea
            id="notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="E.g., vegetarian meals, sleeping bag rental, airport transfer..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta"
          />
        </div>

        {/* Pricing display */}
        <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 flex flex-col gap-2.5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 font-medium">Rate per person:</span>
            <span className="font-bold text-slate-800">€{pricePerPerson}</span>
          </div>
          <div className="border-t border-slate-200/60 pt-2 flex justify-between items-end">
            <span className="text-slate-500 font-bold uppercase tracking-wide text-xs mb-1">Estimated Total:</span>
            <div className="text-right">
              <span className="text-2xl font-black text-brand-slate leading-none">€{total}</span>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase mt-0.5">VAT & local taxes included</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid gap-3 pt-2">
          {/* WhatsApp Primary */}
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Book via WhatsApp</span>
          </a>

          {/* Email Secondary */}
          <a
            href={emailBookingUrl}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-brand-slate transition-colors duration-200"
          >
            <Send className="h-4 w-4 text-brand-terracotta" />
            <span>Send Email Inquiry</span>
          </a>
        </div>

        <p className="text-[10px] text-center text-slate-400 font-semibold uppercase tracking-wider mt-2">
          ⚡ WhatsApp is fastest when we are between trips
        </p>

      </div>
    </div>
  );
}
