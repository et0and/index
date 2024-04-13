import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Raphael Salaja",
  description:
    "Genreless creator ― blending diverse influences and mediums to produce innovative works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-screen w-screen mx-auto max-w-[512px] p-4">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
