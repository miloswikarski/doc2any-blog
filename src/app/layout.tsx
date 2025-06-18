import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import WebVitals from "@/components/WebVitals";

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
    default: "Doc2Any - Document Conversion Blog & Tools",
    template: "%s | Doc2Any"
  },
  description: "Expert insights, tutorials, and tools for document conversion. Learn about PDF, DOC, ODT, XLS, PPT conversions and more.",
  keywords: ["document conversion", "PDF converter", "DOC to PDF", "file conversion", "office documents", "ODT", "XLS", "PPT"],
  authors: [{ name: "Milos Wikarski", url: "https://wikarski.com" }],
  creator: "Milos Wikarski",
  publisher: "Grapph.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doc2any.grapph.com",
    siteName: "Doc2Any",
    title: "Doc2Any - Document Conversion Blog & Tools",
    description: "Expert insights, tutorials, and tools for document conversion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doc2Any - Document Conversion Blog & Tools",
    description: "Expert insights, tutorials, and tools for document conversion.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2591708616273466"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-47319849-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-47319849-1');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <WebVitals />
        <StructuredData type="website" data={{}} />
        <StructuredData type="organization" data={{}} />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
