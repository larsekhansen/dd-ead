import { defineConfig } from "npm:astro@3.6.4/config";
import react from "npm:@astrojs/react@3.0.9";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    optimizeDeps: {
      exclude: ["@astrojs/react"]
    },
    ssr: {
      noExternal: ["@digdir/designsystemet*"]
    }
  }
});
