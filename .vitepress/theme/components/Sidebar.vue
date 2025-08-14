<script setup lang="ts">
import {useData} from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col justify-center not-md:items-center md:items-right">
    <div class="text-xl">{{ site.title }}</div>
    <div class="text-sm text-gray-700 dark:text-gray-400 italic">
      <div>{{ site.description }}</div>
      <div>written, edited, and published by <a class="underline" target="_blank" href="https://possiblemeatball.net">possiblemeatball</a></div>
    </div>
    <div class="text-sm">
      <a href="/blog">newsfeed</a> /
      <a href="/blog/posts">see all posts</a> /
      <a target="_blank" href="https://git.manthrowshat.net/meatball/hatblog">source code</a>
    </div>
  </div>
</template>

<style scoped>

</style>