import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://tyrewarriors.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tyre Warriors | 24/7 Mobile Truck Tyre Fitting & Breakdown — Perth",
  description:
    "24/7 truck tyre breakdown specialists in Perth. Mobile truck tyre fitting, roadside assistance, trailer tyres and fleet maintenance. Call 0406 409 409 — fast response across Perth metro.",
  keywords: [
    "truck tyres Perth",
    "mobile truck tyre fitting",
    "24/7 tyre breakdown",
    "fleet tyre maintenance",
    "trailer tyres Perth",
    "roadside tyre assistance",
    "commercial tyres Wattleup",
  ],
  openGraph: {
    title: "Tyre Warriors — 24/7 Truck Tyre Breakdown Specialists, Perth",
    description:
      "Fast roadside response, fleet maintenance and premium truck tyre solutions across Perth. Call 0406 409 409.",
    url: SITE_URL,
    siteName: "Tyre Warriors",
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  name: "Tyre Warriors",
  description:
    "24/7 mobile truck tyre fitting, roadside breakdown assistance and fleet tyre maintenance across Perth, Western Australia.",
  telephone: "+61406409409",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "42 Power Ave",
    addressLocality: "Wattleup",
    addressRegion: "WA",
    postalCode: "6166",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -32.1804, longitude: 115.8276 },
  areaServed: { "@type": "City", name: "Perth" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  makesOffer: [
    "24/7 Mobile Truck Tyre Fitting",
    "Roadside Breakdown Assistance",
    "Truck Tyre Replacement",
    "Trailer Tyres",
    "Fleet Tyre Maintenance",
    "Commercial Tyre Services",
    "Emergency Callouts",
    "Truck & Trailer Tyre Supply",
  ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
