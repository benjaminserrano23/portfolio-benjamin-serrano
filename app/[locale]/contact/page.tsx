import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Benjamín Serrano Ercoli.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}
