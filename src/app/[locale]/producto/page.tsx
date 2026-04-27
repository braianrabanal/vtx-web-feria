import Link from "next/link";
import Reveal from "@/components/reveal";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductoPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { producto, ui } = getDictionary(locale);

  return (
    <div className="space-y-12 md:space-y-14">
      <Reveal>
        <header className="space-y-8 pt-6 md:pt-10">
          <h1 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(46px, 10vw, 126px)", lineHeight: "0.95", color: "#1A1E29" }}>{ui.product.title}</h1>
          <p className="max-w-[1120px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.2vw, 28px)", lineHeight: "1.25", color: "#4B4B4B" }}>{producto.intro}</p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="vtx-section-wash -mx-5 bg-[#151b2d] px-5 py-14 md:-mx-8 md:px-8">
          <div className="mx-auto grid max-w-[1720px] gap-5 md:grid-cols-2">
            <Link href={`/${locale}/producto/chroma`} className="vtx-panel block rounded-md bg-[#efefef] px-6 py-7 transition duration-500 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:py-9">
              <div className="flex justify-center"><div className="relative h-14 w-72"><img src="/brand/visiortex/modules/chroma/visiortex-chroma-logoblack.png" alt="VISIORTEX Chroma" className="h-full w-full scale-[0.92] object-contain" /></div></div>
              <div className="mt-8 border-t border-[#737985]" />
              <p className="mt-8 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.4vw, 22px)", lineHeight: "1.22", color: "#4b4b4b" }}>{producto.chromaBlock}</p>
              <p className="mt-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(18px, 3.4vw, 22px)", color: "#353945" }}><span className="inline-flex items-center gap-2">{ui.product.seeChroma}<span className="text-[18px] font-medium text-[#4f5560]">⟶</span></span></p>
            </Link>

            <Link href={`/${locale}/producto/quality`} className="vtx-panel block rounded-md bg-[#efefef] px-6 py-7 transition duration-500 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:py-9">
              <div className="flex justify-center"><div className="relative h-14 w-72"><img src="/brand/visiortex/modules/quality/visiortex-quality-logoblack.png" alt="VISIORTEX Quality" className="h-full w-full object-contain" /></div></div>
              <div className="mt-8 border-t border-[#737985]" />
              <p className="mt-8 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.4vw, 22px)", lineHeight: "1.22", color: "#4b4b4b" }}>{producto.qualityBlock}</p>
              <p className="mt-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(18px, 3.4vw, 22px)", color: "#353945" }}><span className="inline-flex items-center gap-2">{ui.product.seeQuality}<span className="text-[18px] font-medium text-[#4f5560]">⟶</span></span></p>
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <section className="-mx-5 bg-[#efefef] md:-mx-8">
          <div className="relative mx-auto max-w-[1720px] overflow-hidden px-5 py-3 md:px-8">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-auto w-full rounded-md border border-[#c8cbd1] bg-black"
            >
              <source src="/VideoVisiortex2026.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de vídeo.
            </video>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
