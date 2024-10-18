import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      components: "/src/components",
      declarations: "src/declarations",
      assets: "/src/assets",
      hooks: "/src/hooks",
      styles: "/src/styles",
      src: ".",
    },
  },
  server: {
    hmr: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
