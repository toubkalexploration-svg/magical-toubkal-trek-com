import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "High Atlas Trekking Tours from Marrakech | Magical Toubkal Trek",
    template: "%s | Magical Toubkal Trek",
  },
  description:
    "Compare private Mount Toubkal climbs, Berber village hikes, Azzaden and Imenane valley treks, and longer High Atlas routes led by local Imlil guides.",
  alternates: { canonical: "/treks" },
  openGraph: {
    title: "High Atlas Trekking Tours | Magical Toubkal Trek",
    description:
      "Guided Toubkal climbs and High Atlas walking holidays with a local Imlil mountain team.",
    url: "/treks",
    type: "website",
  },
};

export default function TreksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
