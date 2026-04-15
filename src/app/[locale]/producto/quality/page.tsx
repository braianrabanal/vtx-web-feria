import Image from "next/image";
import Reveal from "@/components/reveal";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function QualityPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { qualityPage } = getDictionary(locale);

  return (
    <div className="space-y-12 md:space-y-14">
      <Reveal>
        <header className="space-y-8 pt-6 md:pt-10">
          <h1 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(46px, 10vw, 126px)", lineHeight: "0.95", color: "#1A1E29" }}>{qualityPage.heroTitle}</h1>
          <p className="max-w-[1120px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.2vw, 28px)", lineHeight: "1.25", color: "#4B4B4B" }}>{qualityPage.heroSubtitle}</p>
        </header>
      </Reveal>

      <Reveal delayMs={70}>
        <section className="-mx-5 bg-[#00c48e] px-5 py-10 md:-mx-8 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#efefef] md:grid-cols-[1fr_1fr]">
            <div className="px-6 py-7 md:px-9 md:py-8">
              <div className="flex justify-center"><div className="relative h-14 w-72"><Image src="/brand/visiortex/modules/quality/visiortex-quality-logoblack.png" alt="VISIORTEX Quality" fill className="object-contain" /></div></div>
              <div className="mt-8 border-t border-[#737985]" />
              <div className="mt-8 space-y-6 text-[#4b4b4b]">
                <div>
                  <h3 className="text-[18px] font-bold md:text-[22px]">{qualityPage.queEsTitle}</h3>
                  <p className="mt-1 text-[18px] leading-[1.22] md:text-[22px] md:leading-[1.18]">{qualityPage.queEsBody}</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold md:text-[22px]">{qualityPage.comoFuncionaTitle}</h3>
                  <p className="mt-1 text-[18px] leading-[1.22] md:text-[22px] md:leading-[1.18]">{qualityPage.comoFuncionaBody}</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold md:text-[22px]">{qualityPage.queAportaTitle}</h3>
                  <ul className="mt-1 list-disc space-y-1 pl-6 text-[18px] leading-[1.22] md:pl-8 md:text-[22px] md:leading-[1.18]">
                    {qualityPage.queAportaBullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid min-h-[360px] grid-rows-2 gap-2 bg-[#f7f7f7] p-2 md:min-h-[680px] md:gap-3 md:p-3">
              <div className="relative min-h-[170px] overflow-hidden rounded-md border border-[#d8d8d8]">
                <Image src="/images-web/pagina4imagen1.png" alt="Interfaz Quality en operacion" fill className="object-cover object-center" />
              </div>
              <div className="relative min-h-[170px] overflow-hidden rounded-md border border-[#d8d8d8]">
                <Image src="/images-web/defecto_webvtx.png" alt="Mapa termico de defecto detectado" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
