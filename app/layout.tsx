import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abigail — UX, Graphic Design & Creative Direction",
  description: "A multidisciplinary designer and creative lead shaping useful digital, brand and campaign experiences.",
  openGraph: {
    title: "Abigail — UX, Graphic Design & Creative Direction",
    description: "Clear, characterful work across UX, brand, web, print and motion.",
  },
  twitter: {
    card: "summary",
    title: "Abigail — UX, Graphic Design & Creative Direction",
    description: "Clear, characterful work across UX, brand, web, print and motion.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
