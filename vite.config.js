import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: false, // Deactivate esbuild and use cssnano for CSS only
    minify: false,
    // Other build options go here
  },
  plugins: [react()],
});
