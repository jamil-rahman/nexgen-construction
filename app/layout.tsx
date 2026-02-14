import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexGen Construction | Licensed Contractor in Toronto GTA",
  description:
    "Award-winning construction company in Toronto GTA. Expert kitchen renovations, bathroom remodeling, basement finishing & deck building. Licensed, insured, WSIB-compliant. 20+ years experience. Free quotes — (416) 371-0546.",
  keywords: [
    "construction company Toronto",
    "licensed contractor GTA",
    "kitchen renovation Toronto",
    "bathroom remodeling GTA",
    "basement finishing Toronto",
    "deck builder Ontario",
    "home renovation contractor",
    "residential construction GTA",
    "WSIB compliant contractor",
    "insured renovation company",
    "Toronto home improvement",
    "GTA general contractor",
    "NexGen Construction Toronto",
    "professional contractor Ontario",
    "affordable home renovations",
  ],
  authors: [{ name: "NexGen Construction" }],
  creator: "NexusMediaAgency Ltd.",
  metadataBase: new URL("https://nexgenconstruction.ca"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "NexGen Construction | Licensed Contractor in Toronto GTA",
    description:
      "Award-winning construction company in Toronto GTA. Expert kitchen renovations, bathroom remodeling, basement finishing & deck building. Licensed, insured, WSIB-compliant. Free quotes available.",
    type: "website",
    locale: "en_CA",
    siteName: "NexGen Construction",
    url: "https://nexgenconstruction.ca",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NexGen Construction — Licensed Construction Contractor Serving Toronto and Greater Toronto Area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Construction | Licensed Contractor Toronto GTA",
    description:
      "Award-winning construction company in Toronto GTA. Kitchen renovations, bathrooms, basements, decks. Licensed & insured. Free quotes — (416) 371-0546.",
    images: ["/images/hero/hero.jpg"],
  },
  icons: {
    icon: "/images/logos/logo.png",
    apple: "/images/logos/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NexGen Construction",
    "image": "https://nexgenconstruction.com/images/logos/logo.png",
    "description": "Professional construction company specializing in kitchen renovations, basement finishing, bathroom remodeling, and full home renovations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "360 Pitfield Rd",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "postalCode": "M15 3E6",
      "addressCountry": "CA"
    },
    "telephone": "+1-416-371-0546",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${lato.variable} font-lato antialiased bg-white text-gray-800`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
