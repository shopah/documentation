import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "en-US",
  title: "Shopah Express",
  description:
    "A guide to Shopah Express website and mobile application administration usage",
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    ["@vuepress/back-to-top"],
  ],
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    repo: "shopah/documentation",
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
