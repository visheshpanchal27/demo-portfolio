import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
};

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.seo.url,
    siteName: profile.name,
    images: [{ url: profile.seo.ogImage, width: 1200, height: 630, alt: profile.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: profile.seo.twitterHandle,
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Content Creator",
    url: profile.seo.url,
    sameAs: [profile.instagram, profile.youtube, profile.tiktok, profile.twitter],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#080808] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
