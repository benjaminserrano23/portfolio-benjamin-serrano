import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Benjamín Serrano Ercoli.",
};

export default function ContactPage() {
  return <ContactContent />;
}
