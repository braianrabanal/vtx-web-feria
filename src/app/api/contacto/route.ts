import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  nombre?: string;
  email?: string;
  empresa?: string;
  mensaje?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;
    const nombre = body.nombre?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const empresa = body.empresa?.trim() ?? "";
    const mensaje = body.mensaje?.trim() ?? "";

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "El email no es valido." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = (process.env.SMTP_SECURE ?? "false") === "true";
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? user;

    if (!host || !port || !user || !pass || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Falta configuracion SMTP en variables de entorno." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa || "-"}\n\nMensaje:\n${mensaje}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || "-"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo de contacto:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          process.env.NODE_ENV === "development"
            ? `No se pudo enviar el mensaje. ${
                error instanceof Error ? error.message : "Error desconocido."
              }`
            : "No se pudo enviar el mensaje.",
      },
      { status: 500 },
    );
  }
}
