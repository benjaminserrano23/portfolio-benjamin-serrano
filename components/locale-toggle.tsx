"use client";

import { useLocale } from "./locale-provider";

export function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="flex h-9 items-center justify-center rounded-lg border border-border px-2.5 text-xs font-semibold transition-colors hover:bg-muted"
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
