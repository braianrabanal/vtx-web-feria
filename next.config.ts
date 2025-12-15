import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Salida estática para despliegue en plataformas tipo GitHub Pages / S3.
   * `next build` generará la carpeta `out/` lista para publicar.
   */
  output: "export",
  images: {
    // Desactiva el Image Optimization server de Next para poder exportar estático
    unoptimized: true,
  },
  /**
   * Si vas a desplegar bajo un subpath (por ejemplo, https://usuario.github.io/vtx-landing),
   * descomenta y ajusta estas líneas:
   *
   * basePath: "/vtx-landing",
   * assetPrefix: "/vtx-landing/",
   */
};

export default nextConfig;
