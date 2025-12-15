import { qualityPage } from "@/content/es";

export default function QualityPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-heading text-2xl text-clarity-white md:text-3xl">
          {qualityPage.heroTitle}
        </h1>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {qualityPage.heroSubtitle}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-heading text-lg text-clarity-white">
          {qualityPage.queEsTitle}
        </h2>
        <p className="max-w-2xl whitespace-pre-line text-sm text-clarity-white/80">
          {qualityPage.queEsBody}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg text-clarity-white">
          {qualityPage.comoFuncionaTitle}
        </h2>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {qualityPage.comoFuncionaBody}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg text-clarity-white">
          {qualityPage.queAportaTitle}
        </h2>
        <ul className="space-y-1.5 text-sm text-clarity-white/85">
          {qualityPage.queAportaBullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}


