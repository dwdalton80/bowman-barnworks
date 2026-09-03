import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// The site is served from the domain root by default (custom domain or
// user GitHub Pages site). When hosting on a project Pages URL such as
// https://<user>.github.io/bowman-barnworks/, set BASE_PATH=/bowman-barnworks/
// (the deploy workflow forwards the repo variable of the same name).
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  root: path.resolve(import.meta.dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
