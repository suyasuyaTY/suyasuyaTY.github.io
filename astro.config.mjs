// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import { unified } from "@astrojs/markdown-remark";
import remarkLinkCard from "remark-link-card-plus";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://suyasuyaTY.github.io",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    expressiveCode({ themes: ["github-light", "github-dark"] }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-light",
      },
    },
    processor: unified({
      remarkPlugins: [
        [
          remarkLinkCard,
          {
            cache: true,
            shortenUrl: true,
            thumbnailPosition: "right",
          },
        ],
      ],
    }),
  },
});
