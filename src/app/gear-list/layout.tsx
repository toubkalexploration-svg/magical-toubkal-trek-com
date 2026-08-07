import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mount Toubkal Packing List & Trek Gear",
  description:
    "Use this practical Mount Toubkal packing checklist for boots, layers, waterproofs, summit-day gear, sun protection, winter crampons, and refuge essentials.",
  alternates: { canonical: "/gear-list" },
};

export default function GearLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
