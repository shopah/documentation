import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "en-US",
  title: "Shopah Express",
  description: "E-Commerce Project Management User Guide",
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
  ],
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      },
    ],
    ["@vuepress/back-to-top"],
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],
  ],
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/bag.png",
    repo: "shopah/documentation",
    editLink: false,
    navbar: [
      // NavbarItem
      {
        text: "Home",
        link: "/",
      },
      // NavbarGroup
      {
        text: "User Guide",
        children: [
          { text: "Getting Started", link: "/guide/getting-started.md" },
        ],
      },
      {
        text: "Project Status",
        children: [
          { text: "Getting Started", link: "/guide/getting-started.md" },
        ],
      },
      {
        text: "Developer Website",
        link: "https://lexacle.com",
      },
    ],
  },
  base: "/",
});
