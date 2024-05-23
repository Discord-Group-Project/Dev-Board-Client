import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["localhost", "img.dummyapi.io"],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind(), react(), sitemap()],
});
