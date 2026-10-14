import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Morocco Adventure Tours from Marrakech | Magical Toubkal Trek",
    template: "%s | Magical Toubkal Trek",
  },
  description:
    "Compare private Mount Toubkal climbs, High Atlas village treks, and Merzouga desert tours from Marrakech with experienced local guides and drivers.",
  alternates: { canonical: "/treks" },
  openGraph: {
    title: "Morocco Adventure Tours | Magical Toubkal Trek",
    description:
      "Private Mount Toubkal climbs, High Atlas walking holidays, and Merzouga desert tours from Marrakech.",
    url: "/treks",
    type: "website",
  },
};

export default function TreksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
