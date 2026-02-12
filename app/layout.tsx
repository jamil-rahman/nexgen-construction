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
  title: "NexGen Construction | Professional Construction Services in GTA, Ontario",
  description:
    "Licensed & insured construction company serving the Greater Toronto Area. Kitchen renovations, bathroom remodeling, basement finishing, deck building & full home renovations. Free quotes — call 416-371-0546.",
  keywords: [
    "construction company GTA",
    "home renovation Toronto",
    "kitchen renovation Ontario",
    "bathroom remodeling GTA",
    "basement finishing Toronto",
    "deck building Ontario",
    "general contractor GTA",
    "licensed insured contractor",
    "NexGen Construction",
  ],
  authors: [{ name: "NexGen Construction" }],
  creator: "NexusMediaAgency Ltd.",
  metadataBase: new URL("https://nexgenconstruction.ca"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "NexGen Construction | Professional Construction Services in GTA",
    description:
      "Licensed & insured construction company serving the Greater Toronto Area. Kitchen renovations, bathrooms, basements, decks & full home renovations. Free quotes available.",
    type: "website",
    locale: "en_CA",
    siteName: "NexGen Construction",
    url: "https://nexgenconstruction.ca",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "NexGen Construction — Professional Construction Services in GTA, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Construction | Construction Services in GTA",
    description:
      "Licensed & insured construction company serving the Greater Toronto Area. Free quotes — call 416-371-0546.",
    images: ["/images/hero/hero.jpg"],
  },
  icons: {
    icon: "/images/logos/logo.png",
    apple: "/images/logos/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
