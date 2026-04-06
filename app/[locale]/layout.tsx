import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MouseGlow } from "@/components/mouse-glow";
import { JsonLd } from "@/components/json-ld";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://benjaminserrano.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Benjamín Serrano Ercoli | Software Engineer",
    template: "%s | Benjamín Serrano Ercoli",
  },
  description:
    "Portfolio of Benjamín Serrano Ercoli — Full Stack Software Engineer specialized in TypeScript, React, Next.js, and Node.js. Thesis on static analysis for JS/TS ecosystems.",
  keywords: ["Software Engineer", "Full Stack", "TypeScript", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Benjamín Serrano Ercoli", url: BASE_URL }],
  creator: "Benjamín Serrano Ercoli",
  openGraph: {
    type: "website",
    siteName: "Benjamín Serrano Ercoli",
    title: "Benjamín Serrano Ercoli | Software Engineer",
    description:
      "Full Stack Software Engineer — TypeScript, React, Next.js, Node.js. Available for work.",
    url: BASE_URL,
    images: [
      {
        url: "/Yo.jpg",
        width: 800,
        height: 800,
        alt: "Benjamín Serrano Ercoli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamín Serrano Ercoli | Software Engineer",
    description:
      "Full Stack Software Engineer — TypeScript, React, Next.js, Node.js. Available for work.",
    images: ["/Yo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Global background glow */}
        <MouseGlow />
        {/* Animated grid background */}
        <div className="bg-grid-animated pointer-events-none" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/40 blur-[130px] dark:bg-primary/18"
            style={{ animation: "blob-drift-1 18s ease-in-out infinite", willChange: "transform" }}
          />
          <div
            className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[110px] dark:bg-secondary/16"
            style={{ animation: "blob-drift-2 22s ease-in-out infinite", willChange: "transform" }}
          />
          <div
            className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/25 blur-[90px] dark:bg-primary/12"
            style={{ animation: "blob-drift-3 26s ease-in-out infinite", willChange: "transform" }}
          />
        </div>
        <JsonLd />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
