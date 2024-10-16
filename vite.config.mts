import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
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
});
