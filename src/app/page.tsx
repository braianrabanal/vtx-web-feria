import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/es";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-14">
      {/* Hero */}
      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-chroma-violet via-deep-frame to-quality-green px-5 py-8 text-clarity-white shadow-[0_26px_80px_rgba(0,0,0,0.7)] md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:px-8 md:py-10">
        <div className="space-y-7">
          <h1 className="font-heading text-balance text-3xl leading-tight md:text-4xl lg:text-5xl">
            {home.hero.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-clarity-white/85 md:text-base">
            {home.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/producto"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-chroma-violet to-quality-green px-6 py-3 text-sm font-semibold text-clarity-white shadow-sm shadow-black/40 transition hover:opacity-90"
            >
              {home.hero.primaryCta}
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-clarity-white/40 px-6 py-3 text-sm font-medium text-clarity-white/95 hover:border-clarity-white"
            >
              {home.hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl bg-deep-frame/80 p-4 text-xs text-clarity-white/85 ring-1 ring-clarity-white/15 backdrop-blur-xl md:p-5">
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-28 md:h-8 md:w-32">
              <Image
                src="/brand/visiortex/logos/visiortex-logo-white.png"
                alt="VISIORTEX®"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[0.75rem]">
              Visión artificial aplicada al control de calidad textil industrial.
            </span>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="space-y-6">
        <h2 className="font-heading text-lg text-clarity-white md:text-xl">
          Módulos VISIORTEX®
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="group flex flex-col justify-between rounded-3xl border border-chroma-violet/60 bg-deep-frame/70 p-5 text-sm shadow-[0_18px_50px_rgba(0,0,0,0.6)] transition hover:border-chroma-violet hover:bg-deep-frame/90">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-36 md:h-10 md:w-40">
                  <Image
                    src="/brand/visiortex/modules/chroma/visiortex-chroma-logo.png"
                    alt="Chroma"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-heading text-xl text-clarity-white">
                {home.chroma.name}
              </h3>
              <p className="whitespace-pre-line text-clarity-white/80">
                {home.chroma.text}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-clarity-white/80">
                {home.chroma.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <Link
                href="/producto/chroma"
                className="inline-flex text-xs font-semibold text-chroma-violet hover:text-chroma-violet/80"
              >
                Ver Chroma →
              </Link>
            </div>
          </article>

          <article className="group flex flex-col justify-between rounded-3xl border border-quality-green/70 bg-deep-frame/70 p-5 text-sm shadow-[0_18px_50px_rgba(0,0,0,0.6)] transition hover:border-quality-green hover:bg-deep-frame/90">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-36 md:h-10 md:w-40">
                  <Image
                    src="/brand/visiortex/modules/quality/visiortex-quality-logo.png"
                    alt="Quality"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-heading text-xl text-clarity-white">
                {home.quality.name}
              </h3>
              <p className="whitespace-pre-line text-clarity-white/80">
                {home.quality.text}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-clarity-white/80">
                {home.quality.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <Link
                href="/producto/quality"
                className="inline-flex text-xs font-semibold text-quality-green hover:text-quality-green/80"
              >
                Ver Quality →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Beneficios */}
      <section className="space-y-5">
        <h2 className="font-heading text-lg text-clarity-white md:text-xl">
          {home.beneficios.title}
        </h2>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {home.beneficios.intro}
        </p>
        <div className="grid gap-3 text-sm text-clarity-white/85 md:grid-cols-2">
          {home.beneficios.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-clarity-white/15 bg-deep-frame/80 p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Retos en planta */}
      <section className="space-y-5">
        <h2 className="font-heading text-lg text-clarity-white md:text-xl">
          {home.retos.title}
        </h2>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {home.retos.intro}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {home.retos.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-clarity-white/15 bg-deep-frame/80 p-4"
            >
              <h3 className="font-heading text-base text-clarity-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-clarity-white/80">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Impacto */}
      <section className="space-y-5 rounded-3xl border border-clarity-white/15 bg-gradient-to-br from-deep-frame/90 via-deep-frame/80 to-chroma-violet/20 p-5 md:p-7">
        <h2 className="font-heading text-lg text-clarity-white md:text-xl">
          {home.impacto.title}
        </h2>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {home.impacto.subtitle}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {home.impacto.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-clarity-white/15 bg-black/20 p-4"
            >
              <p className="font-heading text-2xl text-clarity-white">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-clarity-white/75">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="space-y-5">
        <h2 className="font-heading text-lg text-clarity-white md:text-xl">
          {home.proceso.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {home.proceso.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-clarity-white/15 bg-deep-frame/80 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-quality-green">
                Paso {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-base text-clarity-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-clarity-white/80">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="rounded-3xl border border-quality-green/40 bg-gradient-to-r from-deep-frame/90 via-chroma-violet/20 to-quality-green/20 p-6 md:p-8">
        <h2 className="font-heading text-2xl text-clarity-white md:text-3xl">
          {home.finalCta.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-clarity-white/85 md:text-base">
          {home.finalCta.text}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-quality-green px-6 py-3 text-sm font-semibold text-deep-frame transition hover:bg-quality-green/90"
          >
            {home.finalCta.primary}
          </Link>
          <Link
            href="/producto"
            className="inline-flex items-center justify-center rounded-full border border-clarity-white/40 px-6 py-3 text-sm font-medium text-clarity-white hover:border-clarity-white"
          >
            {home.finalCta.secondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
