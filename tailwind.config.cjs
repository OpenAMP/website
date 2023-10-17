/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        secondary: "rgb(87,87,87)",
        openampred: "#dc4a4a",
        black: "#212529",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      sans: ["Lato", "system-ui", ...defaultTheme.fontFamily.sans],
    },
    transitionProperty: {
      maxHeight: "max-height",
      spacing: "margin, padding",
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),

    require("tw-elements/dist/plugin.cjs"),
  ],
};
