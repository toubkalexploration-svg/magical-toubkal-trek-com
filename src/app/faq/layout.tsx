import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mount Toubkal Trek FAQs",
  description:
    "Practical answers about Mount Toubkal difficulty, licensed guides, altitude, weather, winter equipment, food, accommodation, and booking from Marrakech.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
