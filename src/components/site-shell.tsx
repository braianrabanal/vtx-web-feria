import HeaderLogo from "@/components/header-logo";
import HeaderNav from "@/components/header-nav";
import LanguageSwitcher from "@/components/language-switcher";
import { getDictionary } from "@/content";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

export default function SiteShell({ locale, children }: Props) {
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col bg-[#f3f3f4] text-[#1b2130]">
      <header className="z-40 bg-[#f3f3f4]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 md:flex-nowrap md:gap-6 md:px-8">
          <HeaderLogo />
          <HeaderNav locale={locale} labels={dict.nav} />
          <LanguageSwitcher
            locale={locale}
            label={dict.ui.languageLabel}
            spanishLabel={dict.ui.languageSpanish}
            englishLabel={dict.ui.languageEnglish}
          />
        </div>
      </header>

      <main className="mx-auto flex-1 max-w-7xl px-5 pb-10 pt-6 md:px-8 md:pt-8">
        {children}
      </main>

      <footer className="bg-[#171d31]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 md:px-8">
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 500,
              fontSize: "20px",
              color: "#f1f2f4",
            }}
          >
            {dict.ui.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
