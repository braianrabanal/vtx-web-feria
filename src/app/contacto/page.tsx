import { contactoPage } from "@/content/es";

export default function ContactoPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="font-heading text-2xl text-clarity-white md:text-3xl">
          {contactoPage.title}
        </h1>
        <p className="max-w-xl text-sm text-clarity-white/80">
          {contactoPage.intro}
        </p>
      </header>

      {/* Formulario simple compatible con despliegues estáticos (GitHub Pages).
          Reemplaza el correo en `action` por la dirección de destino real. */}
      <form
        action="mailto:info@tusitioweb.com"
        method="post"
        encType="text/plain"
        className="space-y-4 rounded-3xl border border-clarity-white/15 bg-deep-frame/80 p-6 text-sm text-clarity-white/90"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="block text-xs text-clarity-white/75" htmlFor="nombre">
              {contactoPage.nombre}
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="w-full rounded-xl border border-clarity-white/25 bg-transparent px-3 py-2 text-sm outline-none focus:border-quality-green"
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs text-clarity-white/75" htmlFor="email">
              {contactoPage.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-clarity-white/25 bg-transparent px-3 py-2 text-sm outline-none focus:border-quality-green"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs text-clarity-white/75" htmlFor="empresa">
            {contactoPage.empresa}
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            className="w-full rounded-xl border border-clarity-white/25 bg-deep-frame px-3 py-2 text-sm text-clarity-white outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs text-clarity-white/75" htmlFor="mensaje">
            {contactoPage.mensaje}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full rounded-xl border border-clarity-white/25 bg-deep-frame px-3 py-2 text-sm text-clarity-white outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-chroma-violet to-quality-green px-6 py-2.5 text-xs font-semibold text-clarity-white shadow-sm shadow-black/40 hover:opacity-90"
        >
          {contactoPage.submit}
        </button>
      </form>
    </div>
  );
}


