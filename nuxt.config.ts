// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      api_url: "",
      image_url: "",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./app/assets/icons",
      },
    ],
  },
  sitemap: {
    sources: ["/api/sitemap/urls"],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: "weekly",
    },
  },
  robots: {
    disallow: ["/account"],
  },
  app: {
    head: {
      title: "Магазин",
      titleTemplate: "%s | Shoppe",
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
        {
          rel: "manifest",
          crossorigin: "anonymous",
          href: "/manifest.webmanifest",
        },
      ],
    },
  },
});
