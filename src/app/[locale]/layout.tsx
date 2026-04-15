import { notFound } from "next/navigation";
import SiteShell from "@/components/site-shell";
import { isLocale } from "@/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <SiteShell locale={locale}>{children}</SiteShell>;
}
