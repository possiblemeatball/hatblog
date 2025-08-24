import { createContentLoader } from "vitepress";

export default createContentLoader('*.md', {
    includeSrc: false,
    render: true,
    excerpt: true,
    transform(data) {
        return data.sort((a, b) => {
            return +new Date(b.frontmatter.date).getTime()
                - new Date(a.frontmatter.date).getTime()
        })
    },
})