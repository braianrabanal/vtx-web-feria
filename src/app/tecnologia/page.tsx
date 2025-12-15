import { tecnologiaPage } from "@/content/es";

export default function TecnologiaPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-heading text-2xl text-clarity-white md:text-3xl">
          {tecnologiaPage.title}
        </h1>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {tecnologiaPage.intro}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-heading text-lg text-clarity-white">
          {tecnologiaPage.flujoTitle}
        </h2>
        <ul className="space-y-1.5 text-sm text-clarity-white/85">
          {tecnologiaPage.pasos.map((paso) => (
            <li key={paso}>• {paso}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg text-clarity-white">
          {tecnologiaPage.modularidadTitle}
        </h2>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {tecnologiaPage.modularidadBody}
        </p>
      </section>
    </div>
  );
}


