import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/es";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-14">
      <section className="space-y-8 pt-6 md:pt-10">
        <div className="max-w-[1120px] space-y-2">
          <h1
            className="text-[#1A1E29]"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 700,
              fontSize: "138px",
              letterSpacing: "2px",
              lineHeight: "130px",
            }}
          >
            Visiortex®
          </h1>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 700,
              fontSize: "138px",
              color: "#95959586",
              letterSpacing: "4px",
              lineHeight: "130px",
            }}
          >
            Inspección de alta velocidad.
          </p>
        </div>
        <p
          className="max-w-3xl"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 400,
            fontSize: "28px",
            color: "#4B4B4B",
          }}
        >
          {home.hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/producto"
            className="inline-flex items-center justify-center rounded-full bg-[#06b893] px-7 py-3 text-lg font-semibold text-white transition hover:opacity-90"
          >
            VER MÓDULOS
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#6c33a8] px-7 py-3 text-lg font-semibold text-white transition hover:opacity-90"
          >
            CONTACTO
          </Link>
        </div>
      </section>

      <section className="-mx-5 bg-[#151b2d] px-5 py-14 md:-mx-8 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-[1720px] gap-5 md:grid-cols-2">
          <article className="flex min-h-[590px] flex-col rounded-md bg-[#efefef] px-10 py-9">
            <div className="flex justify-center">
              <div className="relative h-14 w-72">
                <Image
                  src="/brand/visiortex/modules/chroma/visiortex-chroma-logoblack.png"
                  alt="Chroma"
                  fill
                  className="scale-[0.92] object-contain"
                />
              </div>
            </div>
            <div className="mt-8 border-t border-[#737985]" />
            <div className="mt-8 space-y-6 text-[#4d4f56]">
              <p className="text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.18" }}>
                {home.chroma.text.split("\n\n")[0]}
              </p>
              <p className="text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.18" }}>
                {home.chroma.text.split("\n\n")[1]}
              </p>
            </div>
            <ul className="mt-6 space-y-1.5 text-[22px] leading-[1.22] text-[#6c33a8]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}>
              {home.chroma.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/producto/chroma" className="text-[22px] font-bold text-[#3f434d]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}>
                Ver Chroma -&gt;
              </Link>
            </div>
          </article>

          <article className="flex min-h-[590px] flex-col rounded-md bg-[#efefef] px-10 py-9">
            <div className="flex justify-center">
              <div className="relative h-14 w-72">
                <Image src="/brand/visiortex/modules/quality/visiortex-quality-logoblack.png" alt="Quality" fill className="object-contain" />
              </div>
            </div>
            <div className="mt-8 border-t border-[#737985]" />
            <div className="mt-8 space-y-6 text-[#4d4f56]">
              <p className="text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.18" }}>
                {home.quality.text.split("\n\n")[0]}
              </p>
              <p className="text-[22px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.18" }}>
                {home.quality.text.split("\n\n")[1]}
              </p>
            </div>
            <ul className="mt-6 space-y-1.5 text-[22px] leading-[1.22] text-[#06b893]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}>
              {home.quality.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/producto/quality" className="text-[22px] font-bold text-[#2e3340]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}>
                Ver Quality -&gt;
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="-mx-5 space-y-4 bg-[#efefef] px-5 py-8 md:-mx-8 md:px-8">
        <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "20px", color: "#55585f" }}>
          El proceso de Visiortex®
        </h2>
        <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {home.proceso.steps.map((step, index) => (
            <div key={step.title} className="contents">
              <article className="rounded-[22px] border border-[#9aa0a8] bg-[#f3f3f4] px-6 py-5">
                <p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "20px", color: "#4f535a", lineHeight: "1.1" }}>
                  Paso {index + 1} | {step.title}
                </p>
                <p className="mt-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "20px", color: "#555a62", lineHeight: "1.1" }}>
                  {step.text}
                </p>
              </article>
              {index < home.proceso.steps.length - 1 && (
                <span className="hidden md:inline-flex md:h-9 md:w-9 md:items-center md:justify-center md:rounded-full md:border md:border-[#b7bcc4] md:bg-[#f7f7f8]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 900, fontSize: "24px", color: "#4f535a" }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="-mx-5 bg-[#151b2d] px-5 py-12 md:-mx-8 md:px-8">
        <div className="mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#efefef] md:grid-cols-[1.15fr_1fr]">
          <div className="px-9 py-10">
            <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "34px", color: "#4f535a" }}>Beneficios</h2>
            <div className="mt-8 border-t-2 border-[#7f858e]" />
            <p className="mt-8 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.2", color: "#4b4b4b" }}>
              {home.beneficios.intro}
            </p>
            <div className="mt-8 border-t-2 border-[#7f858e]" />
            <div className="mt-3 space-y-0">
              {[0, 2, 1, 3].map((idx) => (
                <p key={home.beneficios.items[idx]} className="border-b-2 border-[#7f858e] py-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", color: "#4b4b4b" }}>
                  {home.beneficios.items[idx]}
                </p>
              ))}
            </div>
          </div>
          <div className="p-3">
            <div className="relative min-h-[500px] overflow-hidden rounded-md">
              <Image src="/images-web/pagina1imagen1.png" alt="Beneficios VISIORTEX en planta" fill className="object-cover object-right" />
            </div>
          </div>
        </div>
      </section>

      <section className="-mx-5 bg-[#efefef] px-5 py-10 md:-mx-8 md:px-8">
        <div className="mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#171d31] md:grid-cols-[1.15fr_1fr]">
          <div className="px-9 py-10 text-[#f1f2f4]">
            <h2 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "34px", color: "#f1f2f4" }}>{home.retos.title}</h2>
            <div className="mt-8 border-t-2 border-[#c8ccd3]" />
            <p className="mt-8 max-w-[760px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.2", color: "#f1f2f4" }}>
              {home.retos.intro}
            </p>
            <div className="mt-8 border-t-2 border-[#c8ccd3]" />
            <div className="mt-3 space-y-0">
              {home.retos.items.map((item) => (
                <div key={item.title} className="border-b-2 border-[#c8ccd3] py-3">
                  <h3 style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: "22px", color: "#f1f2f4" }}>{item.title}</h3>
                  <p style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: "22px", lineHeight: "1.2", color: "#f1f2f4" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-3">
            <div className="relative min-h-[560px] overflow-hidden rounded-md">
              <Image src="/images-web/pagina1imagen2.png" alt="Retos frecuentes en planta textil" fill className="object-cover object-[center_38%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
