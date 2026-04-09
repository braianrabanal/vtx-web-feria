"use client";

import { FormEvent, useState } from "react";
import { contactoPage } from "@/content/es";
import Reveal from "@/components/reveal";

export default function ContactoPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "success" | "warning" | "error"; message: string }
    | null
  >(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: String(formData.get("nombre") || ""),
      email: String(formData.get("email") || ""),
      empresa: String(formData.get("empresa") || ""),
      mensaje: String(formData.get("mensaje") || ""),
    };

    async function sendOnce() {
      return await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    try {
      let res: Response;
      try {
        res = await sendOnce();
      } catch {
        // Reintento único si hubo corte de red/connection reset,
        // que puede ocurrir aunque el backend haya enviado el email.
        await sleep(600);
        res = await sendOnce();
      }

      let data: { ok?: boolean; error?: string } | null = null;
      try {
        data = (await res.json()) as { ok?: boolean; error?: string };
      } catch {
        data = null;
      }

      if (!res.ok) {
        setStatus({
          kind: "error",
          message: data?.error || "No se pudo enviar el mensaje.",
        });
        return;
      }

      if (data && data.ok === false) {
        setStatus({
          kind: "error",
          message: data.error || "No se pudo enviar el mensaje.",
        });
        return;
      }

      form.reset();
      setStatus({ kind: "success", message: "Mensaje enviado correctamente." });
    } catch (error) {
      setStatus({
        kind: "warning",
        message:
          process.env.NODE_ENV === "development"
            ? `No se pudo confirmar el envío por un problema de red. (${
                error instanceof Error ? error.message : "Error desconocido"
              }) Si te ha llegado el correo, ignora este aviso.`
            : "No se pudo confirmar el envío por un problema de red. Si te ha llegado el correo, ignora este aviso.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="space-y-10 md:space-y-12">
      <Reveal>
      <header className="space-y-8 pt-6 md:pt-10">
        <h1
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(46px, 10vw, 126px)",
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
            fontSize: "clamp(18px, 3.2vw, 28px)",
            lineHeight: "1.25",
            color: "#4B4B4B",
          }}
        >
          {contactoPage.intro}
        </p>
      </header>
      </Reveal>

      <Reveal delayMs={70}>
      <section className="-mx-5 bg-[#efefef] px-5 pb-10 md:-mx-8 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[1720px] space-y-6 rounded-md bg-[#171d31] px-6 py-7 md:px-10 md:py-9"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="text-[18px] font-semibold text-[#f1f2f4] md:text-[22px]"
              >
                {contactoPage.nombre}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="h-14 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[16px] text-[#f1f2f4] outline-none md:h-16 md:text-[20px]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[18px] font-semibold text-[#f1f2f4] md:text-[22px]"
              >
                {contactoPage.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-14 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[16px] text-[#f1f2f4] outline-none md:h-16 md:text-[20px]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="empresa"
              className="text-[18px] font-semibold text-[#f1f2f4] md:text-[22px]"
            >
              {contactoPage.empresa}
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className="h-14 w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 text-[16px] text-[#f1f2f4] outline-none md:h-16 md:text-[20px]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mensaje"
              className="text-[18px] font-semibold text-[#f1f2f4] md:text-[22px]"
            >
              {contactoPage.mensaje}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={7}
              required
              className="w-full rounded-xl border border-[#8f95a0] bg-[#3d4250] px-4 py-3 text-[16px] text-[#f1f2f4] outline-none md:text-[20px]"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#f1f2f4] px-8 text-[16px] font-semibold text-[#353945] transition duration-500 hover:scale-[1.01] hover:opacity-95 active:scale-[0.995] disabled:opacity-60 md:h-14 md:text-[20px]"
          >
            {isSending ? "Enviando..." : contactoPage.submit}
          </button>

          {status && (
            <p
              className={`text-[14px] md:text-[18px] ${
                status.kind === "success"
                  ? "text-[#00c48e]"
                  : status.kind === "error"
                    ? "text-[#ff8d8d]"
                    : "text-[#f3d37a]"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </section>
      </Reveal>
    </div>
  );
}


