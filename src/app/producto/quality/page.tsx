import Image from "next/image";
import { qualityPage } from "@/content/es";

export default function QualityPage() {
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
          {qualityPage.heroTitle}
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
          {qualityPage.heroSubtitle}
        </p>
      </header>

      <section className="-mx-5 bg-[#00c48e] px-5 py-12 md:-mx-8 md:px-8">
        <div className="mx-auto grid max-w-[1720px] overflow-hidden rounded-md bg-[#efefef] md:grid-cols-[1fr_1fr]">
          <div className="px-9 py-8">
            <div className="flex justify-center">
              <div className="relative h-14 w-72">
                <Image
                  src="/brand/visiortex/modules/quality/visiortex-quality-logoblack.png"
                  alt="VISIORTEX Quality"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-8 border-t border-[#737985]" />

            <div className="mt-8 space-y-6 text-[#4b4b4b]">
              <div>
                <h3 className="text-[22px] font-bold">¿Qué es Quality?</h3>
                <p className="mt-1 text-[22px] leading-[1.18]">
                  {qualityPage.queEsBody}
                </p>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">¿Cómo funciona?</h3>
                <p className="mt-1 text-[22px] leading-[1.18]">
                  {qualityPage.comoFuncionaBody}
                </p>
              </div>
              <div>
                <h3 className="text-[22px] font-bold">¿Qué aporta?</h3>
                <ul className="mt-1 list-disc space-y-1 pl-8 text-[22px] leading-[1.18]">
                  {qualityPage.queAportaBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative min-h-[680px]">
            <Image
              src="/images-web/pagina4imagen1.png"
              alt="Interfaz Quality en operación"
              fill
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


