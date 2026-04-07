# Configurar Email de Contacto

Esta guia explica como configurar el formulario de `Contacto` para que los mensajes lleguen al correo que tu quieras.

## 1) Crear archivo de entorno local

En la raiz del proyecto, crea un archivo:

` .env.local `

Puedes copiar la plantilla:

```bash
cp .env.example .env.local
```

## 2) Rellenar variables SMTP

Edita `.env.local` con tus datos reales:

```env
SMTP_HOST=smtp.tudominio.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario_smtp
SMTP_PASS=password_smtp

CONTACT_FROM_EMAIL=no-reply@tudominio.com
CONTACT_TO_EMAIL=tu_correo_destino@tudominio.com
```

### Que significa cada variable

- `SMTP_HOST`: servidor SMTP de tu proveedor.
- `SMTP_PORT`: normalmente `587` (TLS) o `465` (SSL).
- `SMTP_SECURE`:
  - `false` para puerto `587`
  - `true` para puerto `465`
- `SMTP_USER`: usuario SMTP.
- `SMTP_PASS`: password SMTP (o app password).
- `CONTACT_FROM_EMAIL`: remitente que aparecera en el email enviado.
- `CONTACT_TO_EMAIL`: correo que recibira los mensajes del formulario.

## 3) Reiniciar servidor

Si tenias `npm run dev` levantado, reinicialo para cargar variables nuevas:
   .
```bash
npm run dev
```

## 4) Probar envio

1. Abre `/contacto`
2. Rellena formulario
3. Pulsa `Enviar Mensaje`
4. Verifica que llega email a `CONTACT_TO_EMAIL`

## 5) Solucion de errores comunes

- **"Falta configuracion SMTP en variables de entorno"**
  - Falta alguna variable en `.env.local`.

- **No se envia con Gmail**
  - Usa App Password (no password normal).
  - Activa 2FA y genera contraseña de aplicacion.

- **Error de autenticacion SMTP**
  - Revisa `SMTP_USER`, `SMTP_PASS`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`.

- **No llega el correo**
  - Mira carpeta spam.
  - Revisa politicas del proveedor (`from` permitido por dominio).

## 6) Ejemplo rapido con Gmail (App Password)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_cuenta@gmail.com
SMTP_PASS=tu_app_password_16_caracteres

CONTACT_FROM_EMAIL=tu_cuenta@gmail.com
CONTACT_TO_EMAIL=tu_cuenta@gmail.com
```

## Nota tecnica

El endpoint backend que envia los correos esta en:

`src/app/api/contacto/route.ts`

La pagina de formulario esta en:

`src/app/contacto/page.tsx`
