import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphael Salaja",
  description:
    "Genreless creator ― blending diverse influences and mediums to produce innovative works.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-screen w-screen mx-auto max-w-[512px]">
        {children}
        <div className="absolute bottom-0 right-0 p-2 text-xs text-muted"></div>
        <Analytics />
      </body>
    </html>
  );
}
