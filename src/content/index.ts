import * as es from "@/content/es";
import * as en from "@/content/en";
import type { Locale } from "@/i18n/config";

const dictionaries = { es, en } as const;

export type SiteDictionary = typeof es;

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale];
}
