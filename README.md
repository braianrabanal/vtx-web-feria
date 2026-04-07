Landing de **VISIORTEX** construida con [Next.js](https://nextjs.org) y Tailwind, lista para desplegar en Vercel.

## Estructura

- `src/app` – layout y página principal de la landing (`page.tsx`).
- `public` – assets estáticos (incluido el logotipo de Visiortex).
- `docs` – documentación de referencia: PDFs de proyectos y carpetas de identidad de marca.

## Desarrollo (pnpm)

```bash
npm install
npm dev
```

Después, abre `http://localhost:3000` en el navegador.

## Configuración de Email de Contacto

Para configurar el envío real de correos desde el formulario de `Contacto`, revisa:

- `README-CONTACTO-EMAIL.md`

## Despliegue en Vercel

1. Haz push del repo a GitHub/GitLab/Bitbucket.
2. En Vercel crea un **New Project** y selecciona este repo.
3. Deja como comandos por defecto:
   - Build: `pnpm build`
   - Start: `pnpm start`

La raíz del proyecto es este directorio (no hay ya subcarpeta `web`).
