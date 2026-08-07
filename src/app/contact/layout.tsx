import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Local Mount Toubkal Guides",
  description:
    "Ask our Imlil-based mountain team about private Mount Toubkal climbs, High Atlas trek dates, group prices, transfers, and custom itineraries.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
