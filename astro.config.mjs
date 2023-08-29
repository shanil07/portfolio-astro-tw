import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://shanil07.github.io/",
  outDir: "D:Coding Projectsshanil07.github.io",
  integrations: [tailwind(), react()],
});
