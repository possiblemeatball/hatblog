import path from 'path'
import { writeFileSync } from 'fs'
import {defineConfigWithTheme, createContentLoader, type SiteConfig} from 'vitepress'
import tailwindcss from "@tailwindcss/vite";
import {Feed} from "feed";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "man throws blog",
    description: "a quaint, humble blog hosting concise, subtle articles",
    base: "/blog/",
    cleanUrls: true,
    srcExclude: ["README.md"],
    themeConfig: {
        nav: [
            { text: "newsfeed", link: "/blog/" },
            { text: "newsfeed but in rss form", link: "/blog/feed.rss" },
        ]
    },
    vite: {
        build: {
            target: "esnext"
        },
        plugins: [
            tailwindcss(),
        ]
    },
    buildEnd: async (config: SiteConfig) => {
        const feed = new Feed({
            title: "man throws blog",
            description: "a quaint, humble blog hosting concise, subtle articles",
            id: "https://manthrowshat.net/blog/",
            link: "https://manthrowshat.net/blog/",
            language: "en",
            copyright: "© " + new Date().getFullYear() + " Matt \"possiblemeatball\" Walker under CC BY 4.0"
        })

        const posts = await createContentLoader(
            "*.md", {render: true}
        ).load()

        posts.sort(
            (a, b) =>
                +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string)
        )

        for (const { url, excerpt, frontmatter, html } of posts) {
            if (isNaN(new Date(frontmatter.date as string)))
                continue
            feed.addItem({
                title: frontmatter.title,
                id: url,
                link: "https://manthrowshat.net/blog" + url,
                description: frontmatter.description,
                content: html,
                author: [
                    {
                        name: frontmatter.author.name,
                        email: frontmatter.author.email,
                        link: frontmatter.author.link
                    }
                ],
                date: new Date(frontmatter.date as string)
            })
        }

        writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
    }
})
