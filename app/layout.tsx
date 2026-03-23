import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MouseGlow } from "@/components/mouse-glow";
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
    default: "Benjamín Serrano Ercoli | Software Engineer",
    template: "%s | Benjamín Serrano Ercoli",
  },
  description:
    "Software engineer portfolio — projects and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
