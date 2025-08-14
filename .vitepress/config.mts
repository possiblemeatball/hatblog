import {defineConfigWithTheme} from 'vitepress'
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "man throws blog",
    description: "a quaint, humble blog hosting concise, subtle articles",
    titleTemplate: ":title / hatblog",
    base: "/blog/",
    cleanUrls: true,
    themeConfig: {

    },
    vite: {
        plugins: [
            tailwindcss()
        ]
    }
})
