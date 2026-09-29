import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Meridian Health Clinic | Concierge Medicine in Greenwich, CT",
  description:
    "Meridian Health Clinic is a multi-specialty concierge medical practice in Greenwich, Connecticut — combining family medicine, cardiology, pediatrics, diagnostics and 24/7 emergency care with the time, continuity and partnership American patients deserve.",
  keywords: [
    "Meridian Health Clinic",
    "concierge medicine Greenwich CT",
    "private clinic Connecticut",
    "family medicine Greenwich",
    "cardiology CT",
    "pediatrics Greenwich",
    "executive health",
  ],
  authors: [{ name: "Meridian Health Clinic" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Meridian Health Clinic | Concierge Medicine in Greenwich, CT",
    description:
      "Multi-specialty concierge medicine in Greenwich, Connecticut — built around relationships, evidence and time.",
    url: "https://meridianhealth.com",
    siteName: "Meridian Health Clinic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Health Clinic | Concierge Medicine in Greenwich, CT",
    description:
      "Multi-specialty concierge medicine in Greenwich, Connecticut — built around relationships, evidence and time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-cream text-ink`}
      >
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
