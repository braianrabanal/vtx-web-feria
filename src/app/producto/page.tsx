import { producto } from "@/content/es";

export default function ProductoPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-heading text-2xl text-clarity-white md:text-3xl">
          {producto.title}
        </h1>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {producto.intro}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-chroma-violet/60 bg-deep-frame/80 p-5 text-sm text-clarity-white/85">
          <h2 className="font-heading text-lg text-clarity-white">Chroma</h2>
          <p>{producto.chromaBlock}</p>
        </div>
        <div className="space-y-3 rounded-3xl border border-quality-green/70 bg-deep-frame/80 p-5 text-sm text-clarity-white/85">
          <h2 className="font-heading text-lg text-clarity-white">Quality</h2>
          <p>{producto.qualityBlock}</p>
        </div>
      </section>

      <section>
        <p className="max-w-2xl text-sm text-clarity-white/80">
          {producto.cierre}
        </p>
      </section>
    </div>
  );
}


