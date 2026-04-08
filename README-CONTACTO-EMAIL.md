# Configurar Contacto con Resend

Este proyecto esta configurado para enviar los mensajes del formulario de `Contacto` usando **Resend**.

## 1) Crear API Key en Resend

1. Entra en [resend.com](https://resend.com)
2. Ve a **API Keys**
3. Crea una key nueva (`re_...`)

## 2) Crear `.env.local`

En la raiz del proyecto:

```bash
cp .env.example .env.local
```

Rellena `.env.local` asi:

```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=resend
SMTP_PASS=re_xxxxxxxxxxxxxxxxx

CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=tu_correo_destino@gmail.com
```

### Campos importantes

- `SMTP_PASS`: tu API key de Resend (`re_...`)
- `CONTACT_TO_EMAIL`: correo al que quieres recibir los mensajes
- `CONTACT_FROM_EMAIL`: remitente de salida
  - En pruebas: `onboarding@resend.dev`
  - En produccion: tu dominio verificado en Resend (recomendado)

## 3) Levantar proyecto y probar

```bash
npm run dev
```

Luego:
1. Abre `/contacto`
2. Envía un mensaje
3. Verifica que llega a `CONTACT_TO_EMAIL`

## 4) Configurar Vercel

En **Project > Settings > Environment Variables**, crea las mismas variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Aplicalas a **Production** y **Preview**, y haz **Redeploy**.

## 5) Errores comunes

- **No se pudo enviar el mensaje**
  - API key incorrecta o vacia (`SMTP_PASS`)
  - Variables no cargadas en Vercel

- **No llega el correo**
  - Revisa spam
  - Revisa que `CONTACT_TO_EMAIL` este bien escrito

- **Error con remitente**
  - Usa `onboarding@resend.dev` para pruebas
  - O verifica tu dominio en Resend para usar tu propio remitente

## Referencias del proyecto

- Backend de contacto: `src/app/api/contacto/route.ts`
- Formulario: `src/app/contacto/page.tsx`
