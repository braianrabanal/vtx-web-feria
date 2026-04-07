import Image from "next/image";
import { chromaPage } from "@/content/es";

export default function ChromaPage() {
  return (
    <div className="space-y-12 md:space-y-14">
      <header className="space-y-8 pt-6 md:pt-10">
        <h1
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: "126px",
            lineHeight: "0.95",
            color: "#1A1E29",
          }}
        >
          {chromaPage.heroTitle}
        </h1>
        <p
          className="max-w-[1120px]"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "1.2",
            color: "#4B4B4B",
          }}
        >
          {chromaPage.heroSubtitle}
        </p>
      </header>

      <section className="-mx-5 bg-[#6e29a5] px-5 py-12 md:-mx-8 md:px-8">
        <div className="mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#efefef] md:grid-cols-[1fr_1fr]">
          <div className="px-9 py-8">
            <div className="flex justify-center">
              <div className="relative h-14 w-72">
                <Image
                  src="/brand/visiortex/modules/chroma/visiortex-chroma-logoblack.png"
                  alt="VISIORTEX Chroma"
                  fill
                  className="scale-[0.92] object-contain"
                />
              </div>
            </div>
            <div className="mt-8 border-t border-[#737985]" />

            <div className="mt-8 space-y-6 text-[#4b4b4b]">
              <div>
                <h3 className="text-[22px] font-bold">¿Qué es Chroma?</h3>
                <p className="mt-1 text-[22px] leading-[1.18]">
                  Chroma es el módulo de VISIORTEX® dedicado al control cromático
                  del tejido en línea de producción. Su objetivo es garantizar la
                  consistencia del color mediante una medición continua y objetiva.
                </p>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">¿Cómo funciona?</h3>
                <p className="mt-1 text-[22px] leading-[1.18]">
                  El sistema monitoriza el color del tejido durante la producción,
                  detectando desviaciones respecto a los valores de referencia y
                  generando alertas cuando se superan los umbrales definidos.
                </p>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">¿Qué aporta?</h3>
                <ul className="mt-1 list-disc space-y-1 pl-8 text-[22px] leading-[1.18]">
                  {chromaPage.queAportaBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative min-h-[680px]">
            <Image
              src="/images-web/pagina3imagen1.png"
              alt="Interfaz Chroma en operación"
              fill
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


