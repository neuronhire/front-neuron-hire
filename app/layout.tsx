import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://neuronhire.com";
const OG_IMAGE = {
  url: "/assets/banner.png",
  width: 2628,
  height: 882,
  alt: "NeuronHire - AI-Powered Technical Talent Hiring",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s | NeuronHire",
      default: "NeuronHire - AI-Powered Technical Talent Hiring",
    },
    description:
      "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: "NeuronHire",
      title: "NeuronHire - AI-Powered Technical Talent Hiring",
      description:
        "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: "NeuronHire - AI-Powered Technical Talent Hiring",
      description:
        "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
      images: [OG_IMAGE.url],
      creator: "@neuronhire",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
    icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta property="og:type" content="website" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
