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
  title: {
    template: "%s | NeuronHire",
    default: "NeuronHire - AI-Powered Technical Talent Hiring",
  },
  description:
    "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
  keywords: [
    "technical hiring",
    "AI recruitment",
    "developer jobs",
    "tech talent",
    "software engineer hiring",
    "remote developers",
    "tech recruitment",
    "programming jobs",
  ],
  authors: [{ name: "NeuronHire Team" }],
  creator: "NeuronHire",
  publisher: "NeuronHire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neuronhire.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuronhire.com",
    title: "NeuronHire - AI-Powered Technical Talent Hiring",
    description:
      "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
    siteName: "NeuronHire",
    images: [
      {
        url: "https://neuronhire.com/assets/banner.png",
        width: 2628,
        height: 882,
        alt: "NeuronHire - AI-Powered Technical Talent Hiring",
      },
      {
        url: "https://neuronhire.com/assets/banner.png",
        width: 2628,
        height: 882,
        alt: "NeuronHire - AI-Powered Technical Talent Hiring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuronHire - AI-Powered Technical Talent Hiring",
    description:
      "Find and hire the best technical talent with AI-powered matching. Connect with top developers, engineers, and tech professionals worldwide.",
    images: ["https://neuronhire.com/assets/banner.png"],
    creator: "@neuronhire",
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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
