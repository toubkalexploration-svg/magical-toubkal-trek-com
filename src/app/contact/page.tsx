"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Compass,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PhoneCall,
  Send,
  User,
  Users,
} from "lucide-react";
import {
  contactEmail,
  contactPhoneDisplay,
  whatsappUrl,
} from "../data/contact";
import { treks } from "../data/treks";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tourSlug, setTourSlug] = useState(treks[0].slug);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [message, setMessage] = useState("");

  const selectedTourTitle = useMemo(() => {
    if (tourSlug === "custom") {
      return "Custom itinerary request";
    }
    return treks.find((trek) => trek.slug === tourSlug)?.title || treks[0].title;
  }, [tourSlug]);

  const inquiryText = useMemo(() => {
    const adultCount = adults || "0";
    const childCount = children || "0";

    return (
      `Hello Magical Toubkal Trek team,\n\n` +
      `I would like to request a trek booking:\n\n` +
      `- Selected Trek: ${selectedTourTitle}\n` +
      `- Preferred Start Date: ${startDate || "To be discussed"}\n` +
      `- Preferred End Date: ${endDate || "Flexible / not sure yet"}\n` +
      `- Adults: ${adultCount}\n` +
      `- Children: ${childCount}\n` +
      `- Full Name: ${name || "Not provided yet"}\n` +
      `- Email: ${email || "Not provided yet"}\n` +
      `- Phone / WhatsApp: ${phone || "Not provided yet"}\n` +
      `- Notes:\n${message || "None"}\n\n` +
      `Please let me know if these dates are available and how to confirm.`
    );
  }, [adults, children, email, endDate, message, name, phone, selectedTourTitle, startDate]);

  const whatsappBookingUrl = `${whatsappUrl}?text=${encodeURIComponent(inquiryText)}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Trek Booking request from ${name}`);
    const body = encodeURIComponent(`${inquiryText}\n\nBest regards,\n${name}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-slate-50/20 pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-4">
            <Compass className="h-3.5 w-3.5" />
            Contact & Book
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-brand-slate sm:text-4xl">
            Request Your Trek Booking
          </h1>
          <div className="h-1 w-12 bg-brand-terracotta mx-auto mt-4" />
          <p className="mt-4 text-sm text-slate-500">
            Choose your trek, group details, and preferred dates. You can send the request by email or open a ready-to-send WhatsApp message with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-start">
          
          {/* Quick info panel */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Contact Card */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_30px_rgba(28,45,55,0.01)] space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800">Local Guiding Crew</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                Contact our local office in Imlil for custom tour packages or route customization.
              </p>
              
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Guiding Office</span>
                    <span className="text-slate-500 text-xs">Imlil Center, Village of Imlil, BP 42152, Morocco</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">WhatsApp</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-brand-terracotta hover:underline text-xs font-bold">
                      {contactPhoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Email Address</span>
                    <a href={`mailto:${contactEmail}`} className="text-brand-terracotta hover:underline text-xs break-all">
                      {contactEmail}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trek titles */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_30px_rgba(28,45,55,0.01)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">Available Trek Options</h3>
              <ul className="mt-4 space-y-3">
                {treks.map((trek) => (
                  <li key={trek.slug} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-semibold leading-relaxed text-slate-600">{trek.title}</span>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {trek.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response alert */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5 text-xs text-slate-600 leading-relaxed">
              <p className="font-bold text-emerald-800 uppercase tracking-wider mb-1">⚡ Fast Support Guarantee</p>
              We respond to all emails within 1 hour during Moroccan business hours. Chat inquiries on WhatsApp receive immediate attention.
            </div>

          </div>

          {/* Interactive Booking Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_30px_rgba(28,45,55,0.01)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight text-brand-slate">Booking Inquiry Form</h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">No payment required to request availability</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <User className="h-3.5 w-3.5 text-brand-terracotta" />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Sarah Connor"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Mail className="h-3.5 w-3.5 text-brand-terracotta" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., sarah@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Phone className="h-3.5 w-3.5 text-brand-terracotta" />
                  Phone / WhatsApp Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="E.g., +44 7700 900123"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                />
              </div>

              {/* Trek selection */}
              <div className="space-y-1.5">
                <label htmlFor="tour" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Compass className="h-3.5 w-3.5 text-brand-terracotta" />
                  Select Trekking Tour
                </label>
                <select
                  id="tour"
                  value={tourSlug}
                  onChange={(e) => setTourSlug(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 font-semibold cursor-pointer"
                >
                  {treks.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.title} ({t.duration})
                    </option>
                  ))}
                  <option value="custom">Custom itinerary / private trek</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="startDate" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5 text-brand-terracotta" />
                    Preferred Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="endDate" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5 text-brand-terracotta" />
                    Preferred End Date
                  </label>
                  <input
                    id="endDate"
                    type="date"
                    min={startDate || new Date().toISOString().split("T")[0]}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 font-semibold"
                  />
                </div>
              </div>

              {/* Group numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="adults" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Users className="h-3.5 w-3.5 text-brand-terracotta" />
                    Adults
                  </label>
                  <input
                    id="adults"
                    type="number"
                    min="1"
                    required
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="children" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Users className="h-3.5 w-3.5 text-brand-terracotta" />
                    Children
                  </label>
                  <input
                    id="children"
                    type="number"
                    min="0"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="msg" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <MessageSquare className="h-3.5 w-3.5 text-brand-terracotta" />
                  Custom Requirements / Questions
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your fitness levels, gear requirements, dietary constraints, or custom transfer needs..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800"
                />
              </div>

              {/* Submit */}
              <div className="grid gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta px-5 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-terracotta-dark hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Booking Request by Email</span>
                </button>
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-emerald-700"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Send Booking Request by WhatsApp</span>
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}
