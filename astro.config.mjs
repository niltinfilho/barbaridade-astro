// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://niltinfilho.github.io",
  base: "/barbaridade-astro",
  vite: {
    plugins: [tailwindcss()],
  },
});
