import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [react()],
  site: "https://ki.digdir.no",
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "en"],
    fallback: {
      en: "nb"
    }
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true
    }
  }
});
