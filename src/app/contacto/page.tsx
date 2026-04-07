"use client";

import { FormEvent, useState } from "react";
import { contactoPage } from "@/content/es";

export default function ContactoPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      nombre: String(formData.get("nombre") || ""),
      email: String(formData.get("email") || ""),
      empresa: String(formData.get("empresa") || ""),
      mensaje: String(formData.get("mensaje") || ""),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus({
          ok: false,
          message: data.error || "No se pudo enviar el mensaje.",
        });
        return;
      }

      event.currentTarget.reset();
      setStatus({ ok: true, message: "Mensaje enviado correctamente." });
    } catch {
      setStatus({ ok: false, message: "Error de red al enviar el mensaje." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="space-y-10 md:space-y-12">
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
          {contactoPage.title}
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
          {contactoPage.intro}
        </p>
      </header>

      <section className="-mx-5 bg-[#efefef] px-5 pb-10 md:-mx-8 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[1720px] space-y-6 rounded-md bg-[#171d31] px-10 py-9"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="text-[22px] font-semibold text-[#f1f2f4]"
              >
                {contactoPage.nombre}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="h-16 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[20px] text-[#f1f2f4] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[22px] font-semibold text-[#f1f2f4]"
              >
                {contactoPage.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-16 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[20px] text-[#f1f2f4] outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="empresa"
              className="text-[22px] font-semibold text-[#f1f2f4]"
            >
              {contactoPage.empresa}
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className="h-16 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[20px] text-[#f1f2f4] outline-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mensaje"
              className="text-[22px] font-semibold text-[#f1f2f4]"
            >
              {contactoPage.mensaje}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={7}
              required
              className="w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 py-3 text-[20px] text-[#f1f2f4] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#f1f2f4] px-8 text-[20px] font-semibold text-[#353945] transition hover:opacity-90 disabled:opacity-60"
          >
            {isSending ? "Enviando..." : contactoPage.submit}
          </button>

          {status && (
            <p
              className={`text-[18px] ${status.ok ? "text-[#00c48e]" : "text-[#ff8d8d]"}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}


