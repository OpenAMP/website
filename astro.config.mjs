import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
    cookieconsent({
      gui_options: {
        consent_modal: {
          layout: "cloud", // box/cloud/bar
          position: "bottom center", // bottom/middle/top + left/right/center
          transition: "slide", // zoom/slide
          swap_buttons: false, // enable to invert buttons
        },
        settings_modal: {
          layout: "box", // box/bar
          position: "left", // left/right
          transition: "slide", // zoom/slide
        },
      },
    }),
  ],
});
