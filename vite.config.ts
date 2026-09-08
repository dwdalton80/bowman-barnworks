import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// The deploy workflow builds with BASE_PATH=/bowman-barnworks/ so assets
// resolve at the project Pages URL https://dwdalton80.github.io/bowman-barnworks/.
// Local dev/build falls back to "/". To move back to a custom domain at the
// root, restore client/public/CNAME and drop BASE_PATH (or set it to "/").
const base = process.env.BASE_PATH || "/";

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
