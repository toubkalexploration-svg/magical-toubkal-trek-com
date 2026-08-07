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
    "Book Mount Toubkal climbs, M'goun wilderness routes, and Imlil Berber village hikes with licensed local High Atlas mountain guides.",
  metadataBase: new URL("https://www.magical-toubkal-trek.com"),
  applicationName: "Magical Toubkal Trek",
  authors: [{ name: "Magical Toubkal Trek", url: "/about" }],
  creator: "Magical Toubkal Trek",
  publisher: "Magical Toubkal Trek",
  category: "travel",
  openGraph: {
    title: "Magical Toubkal Trek | Mount Toubkal Climbs & Atlas Mountain Guides",
    description:
      "Trek Mount Toubkal and the High Atlas with local guides, cooks, and muleteers from the valleys around Imlil.",
    url: "https://www.magical-toubkal-trek.com",
    siteName: "Magical Toubkal Trek",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 384,
        height: 384,
        alt: "Magical Toubkal Trek logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magical Toubkal Trek | Local High Atlas Guides",
    description: "Private Mount Toubkal climbs and High Atlas treks led by local guides from Imlil, Morocco.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
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
