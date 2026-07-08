import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Magical Toubkal Trek",
    default: "Magical Toubkal Trek | Mount Toubkal Climbs & High Atlas Mountain Guides",
  },
  description:
    "Book Mount Toubkal trekking climbs, Jebel M'goun wilderness routes, and local Imlil Valley Berber village walking tours. Fully guided by certified local mountain experts.",
  metadataBase: new URL("https://www.magical-toubkal-trek.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Magical Toubkal Trek | Mount Toubkal Climbs & Atlas Mountain Guides",
    description:
      "Trek Mount Toubkal (4,167m) and the High Atlas Mountains. Certified local guides, cooks, and mules for safe and unforgettable Moroccan mountain climbs.",
    url: "https://www.magical-toubkal-trek.com",
    siteName: "Magical Toubkal Trek",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="font-sans antialiased text-foreground bg-background min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
