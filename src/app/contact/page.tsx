"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Compass } from "lucide-react";
import { contactEmail, contactPhoneDisplay, whatsappUrl } from "../data/contact";
import { treks } from "../data/treks";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tour, setTour] = useState(treks[0].title);
  const [date, setDate] = useState("");
  const [size, setSize] = useState("2");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Trek Booking request from ${name}`);
    const body = encodeURIComponent(
      `Hello Magical Toubkal Trek team,\n\n` +
      `I would like to request a trek booking:\n\n` +
      `- Tour Selected: ${tour}\n` +
      `- Planned Date: ${date || "To be discussed"}\n` +
      `- Group Size: ${size} people\n` +
      `- Client Name: ${name}\n` +
      `- Client Email: ${email}\n` +
      `- Custom Requests:\n${message || "None"}\n\n` +
      `Please let me know if these dates are available and how to confirm.\n\n` +
      `Best regards,\n${name}`
    );

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
            Fill out the form below or chat directly on WhatsApp. We will help you organize the ideal mountain adventure.
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
                    <span className="font-semibold text-slate-800 block">WhatsApp Chat</span>
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

            {/* Response alert */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5 text-xs text-slate-600 leading-relaxed">
              <p className="font-bold text-emerald-800 uppercase tracking-wider mb-1">⚡ Fast Support Guarantee</p>
              We respond to all emails within 1 hour during Moroccan business hours. Chat inquiries on WhatsApp receive immediate attention.
            </div>

          </div>

          {/* Interactive Booking Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_30px_rgba(28,45,55,0.01)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
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

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
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

              {/* Grid: Tour Dropdown & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Selected Tour */}
                <div className="space-y-1.5">
                  <label htmlFor="tour" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Select Trekking Tour
                  </label>
                  <select
                    id="tour"
                    value={tour}
                    onChange={(e) => setTour(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 font-semibold cursor-pointer"
                  >
                    {treks.map((t) => (
                      <option key={t.slug} value={t.title}>
                        {t.title} ({t.duration})
                      </option>
                    ))}
                    <option value="Custom Itinerary Request">Custom Climb / Other Peak</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Planned Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-700 font-semibold"
                  />
                </div>

              </div>

              {/* Group Size */}
              <div className="space-y-1.5">
                <label htmlFor="size" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Number of Trekkers
                </label>
                <input
                  id="size"
                  type="number"
                  min="1"
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20 focus:border-brand-terracotta text-slate-800 font-semibold"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="msg" className="text-xs font-bold uppercase tracking-wider text-slate-500">
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
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta px-5 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-terracotta-dark hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                <span>Submit Booking Request</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}
