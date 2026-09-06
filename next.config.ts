import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only.
  output: "export",
  images: { unoptimized: true },
  // This project sits inside another one that has its own lockfile, so Turbopack
  // infers the wrong workspace root. Pin it to this directory.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
