import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Build çıktısının dizini
  },
  server: {
    port: 8080, // Azure’un dinlediği porta uyumlu
  },
});
