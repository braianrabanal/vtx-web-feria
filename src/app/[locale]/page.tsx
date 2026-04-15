import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { home, ui } = getDictionary(locale);

  return (
    <div className="space-y-12 md:space-y-14">
      <Reveal delayMs={0}>
        <section className="space-y-8 pt-6 md:pt-10">
          <div className="max-w-[1120px] space-y-2">
            <h1 className="text-[#1A1E29]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(56px, 10.5vw, 138px)", letterSpacing: "clamp(0.5px, 0.25vw, 2px)", lineHeight: "clamp(54px, 9.8vw, 130px)" }}>Visiortex®</h1>
            <p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(48px, 10.5vw, 138px)", color: "#95959586", letterSpacing: "clamp(1px, 0.35vw, 4px)", lineHeight: "clamp(54px, 9.8vw, 130px)" }}>
              {locale === "es" ? "Inspeccion de alta velocidad." : "High-speed inspection."}
            </p>
          </div>
          <p className="max-w-3xl" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.2vw, 28px)", color: "#4B4B4B", lineHeight: "1.25" }}>
            {home.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/producto`} className="inline-flex items-center justify-center rounded-full bg-[#06b893] px-7 py-3 text-lg font-semibold text-white transition duration-500 hover:scale-[1.01] hover:opacity-95 active:scale-[0.995]">
              {ui.home.modules}
            </Link>
            <Link href={`/${locale}/contacto`} className="inline-flex items-center justify-center rounded-full bg-[#6c33a8] px-7 py-3 text-lg font-semibold text-white transition duration-500 hover:scale-[1.01] hover:opacity-95 active:scale-[0.995]">
              {ui.home.contact}
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="vtx-section-wash -mx-5 bg-[#151b2d] px-5 py-10 md:-mx-8 md:px-8 md:py-18">
          <div className="relative mx-auto grid max-w-[1720px] gap-5 md:grid-cols-2">
            <article className="vtx-panel flex min-h-[590px] flex-col rounded-md bg-[#efefef] px-6 py-7 transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:py-9">
              <div className="flex justify-center"><div className="relative h-14 w-72"><Image src="/brand/visiortex/modules/chroma/visiortex-chroma-logoblack.png" alt="Chroma" fill className="scale-[0.92] object-contain" /></div></div>
              <div className="mt-8 border-t border-[#737985]" />
              <div className="mt-8 space-y-6 text-[#4d4f56]">
                <p className="text-[18px] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "inherit", lineHeight: "1.22" }}>{home.chroma.text.split("\n\n")[0]}</p>
                <p className="text-[18px] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "inherit", lineHeight: "1.22" }}>{home.chroma.text.split("\n\n")[1]}</p>
              </div>
              <ul className="mt-6 space-y-1.5 text-[18px] leading-[1.22] text-[#6c33a8] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                {home.chroma.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-6"><Link href={`/${locale}/producto/chroma`} className="text-[18px] font-bold text-[#3f434d] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}><span className="inline-flex items-center gap-2">{ui.home.seeChroma}<span className="text-[18px] font-medium text-[#4f5560]">⟶</span></span></Link></div>
            </article>

            <article className="vtx-panel flex min-h-[590px] flex-col rounded-md bg-[#efefef] px-6 py-7 transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:py-9">
              <div className="flex justify-center"><div className="relative h-14 w-72"><Image src="/brand/visiortex/modules/quality/visiortex-quality-logoblack.png" alt="Quality" fill className="object-contain" /></div></div>
              <div className="mt-8 border-t border-[#737985]" />
              <div className="mt-8 space-y-6 text-[#4d4f56]">
                <p className="text-[18px] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "inherit", lineHeight: "1.22" }}>{home.quality.text.split("\n\n")[0]}</p>
                <p className="text-[18px] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "inherit", lineHeight: "1.22" }}>{home.quality.text.split("\n\n")[1]}</p>
              </div>
              <ul className="mt-6 space-y-1.5 text-[18px] leading-[1.22] text-[#06b893] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                {home.quality.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>
              <div className="mt-6"><Link href={`/${locale}/producto/quality`} className="text-[18px] font-bold text-[#2e3340] md:text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}><span className="inline-flex items-center gap-2">{ui.home.seeQuality}<span className="text-[18px] font-medium text-[#4f5560]">⟶</span></span></Link></div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="-mx-5 space-y-4 bg-[#efefef] px-5 py-8 md:-mx-8 md:px-8">
          <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "20px", color: "#55585f" }}>{ui.home.processTitle}</h2>
          <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {home.proceso.steps.map((step, index) => (
              <div key={step.title} className="contents">
                <article className="rounded-[22px] border border-[#9aa0a8] bg-[#f3f3f4] px-6 py-5">
                  <p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "20px", color: "#4f535a", lineHeight: "1.1" }}>{ui.home.step} {index + 1} | {step.title}</p>
                  <p className="mt-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "20px", color: "#555a62", lineHeight: "1.1" }}>{step.text}</p>
                </article>
                {index < home.proceso.steps.length - 1 && <span className="hidden md:inline-flex md:h-9 md:w-9 md:items-center md:justify-center md:rounded-full md:border md:border-[#b7bcc4] md:bg-[#f7f7f8]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 900, fontSize: "24px", color: "#4f535a" }}>→</span>}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="vtx-section-wash -mx-5 bg-[#151b2d] px-5 py-10 md:-mx-8 md:px-8 md:py-12">
          <div className="vtx-panel relative mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#efefef] md:grid-cols-[1.15fr_1fr]">
            <div className="px-6 py-8 md:px-9 md:py-10">
              <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(24px, 5.2vw, 34px)", color: "#4f535a" }}>{home.beneficios.title}</h2>
              <div className="mt-8 border-t-2 border-[#7f858e]" />
              <p className="mt-6 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.6vw, 22px)", lineHeight: "1.25", color: "#4b4b4b" }}>{home.beneficios.intro}</p>
              <div className="mt-8 border-t-2 border-[#7f858e]" />
              <div className="mt-3 space-y-0">{[0, 2, 1, 3].map((idx) => <p key={home.beneficios.items[idx]} className="border-b-2 border-[#7f858e] py-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.6vw, 22px)", color: "#4b4b4b" }}>{home.beneficios.items[idx]}</p>)}</div>
            </div>
            <div className="flex p-3"><div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-md"><Image src="/images-web/pagina1imagen1.png" alt="Beneficios VISIORTEX" fill className="object-cover object-[50%_center] md:object-right" /></div></div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="-mx-5 bg-[#efefef] px-5 py-10 md:-mx-8 md:px-8">
          <div className="vtx-panel mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#171d31] md:grid-cols-[1.15fr_1fr]">
            <div className="px-6 py-8 text-[#f1f2f4] md:px-9 md:py-10">
              <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(24px, 5.2vw, 34px)", color: "#f1f2f4" }}>{home.retos.title}</h2>
              <div className="mt-8 border-t-2 border-[#c8ccd3]" />
              <p className="mt-6 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.6vw, 22px)", lineHeight: "1.25", color: "#f1f2f4" }}>{home.retos.intro}</p>
              <div className="mt-8 border-t-2 border-[#c8ccd3]" />
              <div className="mt-3 space-y-0">{home.retos.items.map((item) => <div key={item.title} className="border-b-2 border-[#c8ccd3] py-3"><h3 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(18px, 3.6vw, 22px)", color: "#f1f2f4" }}>{item.title}</h3><p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(18px, 3.6vw, 22px)", lineHeight: "1.25", color: "#f1f2f4" }}>{item.text}</p></div>)}</div>
            </div>
            <div className="flex p-3"><div className="relative h-full min-h-[560px] w-full overflow-hidden rounded-md"><Image src="/images-web/pagina1imagen2.png" alt="Retos en planta textil" fill className="object-cover object-[center_38%]" /></div></div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="-mx-5 bg-[#efefef] px-5 py-8 md:-mx-8 md:px-8">
          <div className="mx-auto max-w-[1720px] text-center">
            <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(22px, 4.6vw, 30px)", color: "#4f535a" }}>{home.impacto.title}</h2>
            <p className="mx-auto mt-3 max-w-[1400px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "clamp(16px, 3.7vw, 20px)", color: "#4b4b4b", lineHeight: "1.25" }}>{home.impacto.subtitle}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">{[home.impacto.metrics[0], home.impacto.metrics[2], home.impacto.metrics[1]].map((metric) => <div key={metric.label} className="rounded-2xl border border-[#8e949d] bg-[#ffffff26] px-5 py-3 text-left backdrop-blur-[1px]"><p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(18px, 4vw, 24px)", color: "#4f535a" }}>{metric.value} | <span style={{ fontWeight: 500 }}>{metric.label}</span></p></div>)}</div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="-mx-5 bg-[#e8e8e8] px-5 py-10 md:-mx-8 md:px-8">
          <div className="mx-auto max-w-[1720px]">
            <h3 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "clamp(22px, 4.6vw, 30px)", color: "#4f535a" }}>{ui.home.collaborators}</h3>
            <div className="mt-7 rounded-xl border border-[#c0c3c8] bg-[#f2f2f2] px-6 py-5">
              <div className="grid items-center gap-0 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="relative mx-auto h-24 w-full max-w-[340px]"><Image src="/images-web/uc.png" alt="Logo Universidad de Cantabria" fill className="object-contain" /></div>
                <span className="hidden h-16 w-px bg-[#b4b8bf] md:block" />
                <div className="relative mx-auto h-28 w-full max-w-[380px]"><Image src="/images-web/logo-ctc-gris.png" alt="Logo CTC" fill className="object-contain" /></div>
                <span className="hidden h-16 w-px bg-[#b4b8bf] md:block" />
                <div className="relative mx-auto h-24 w-full max-w-[340px]"><Image src="/images-web/UBU_logo.png" alt="Logo Universidad de Burgos" fill className="object-contain" /></div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
