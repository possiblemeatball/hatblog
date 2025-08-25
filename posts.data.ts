import { createContentLoader } from "vitepress";

export default createContentLoader('post/*.md', {
    includeSrc: false,
    render: true,
    excerpt: (file, options) => {
        file.excerpt = file.content.split('\n\n').slice(0, 1).join("")
    },
    transform(data) {
        return data.sort((a, b) => {
            return +new Date(b.frontmatter.date).getTime()
                - new Date(a.frontmatter.date).getTime()
        })
    },
})