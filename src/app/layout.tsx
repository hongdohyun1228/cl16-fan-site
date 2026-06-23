import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { LiveTicker } from "@/components/layout/LiveTicker";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransition } from "@/components/layout/PageTransition";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Charles Leclerc — CL16 Official Fan Universe",
    template: "%s | CL16 — Charles Leclerc Fan Universe",
  },
  description:
    "The ultimate fan destination for Charles Leclerc and Scuderia Ferrari. Race results, biography, media, community and more.",
  keywords: [
    "Charles Leclerc",
    "CL16",
    "Ferrari",
    "Formula 1",
    "F1",
    "Monaco",
    "Scuderia Ferrari",
    "Tifosi",
  ],
  authors: [{ name: "CL16 Fan Universe" }],
  creator: "CL16 Fan Universe",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cl16.fan",
    siteName: "CL16 Fan Universe",
    title: "Charles Leclerc — CL16 Official Fan Universe",
    description:
      "The ultimate fan destination for Charles Leclerc and Scuderia Ferrari.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charles Leclerc — CL16 Fan Universe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Leclerc — CL16 Official Fan Universe",
    description:
      "The ultimate fan destination for Charles Leclerc and Scuderia Ferrari.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-carbon text-cream font-body antialiased">
        <PageTransition />
        <GlobalNav />
        <LiveTicker />
        <main className="pt-[calc(var(--nav-height)+var(--ticker-height))]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
