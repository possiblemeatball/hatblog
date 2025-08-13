import {defineConfigWithTheme} from 'vitepress'
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "man throws hat",
    description: "a personal homepage",
    base: "/",
    cleanUrls: true,
    themeConfig: {

    },
    vite: {
        plugins: [
            tailwindcss()
        ]
    }
})
