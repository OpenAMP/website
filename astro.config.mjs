import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
  // routes: [
  //   {
  //     path: "/news/tags/[tag].astro",
  //     component: "./src/pages/news/tags/[tag].astro",
  //   },
  // ],
});
