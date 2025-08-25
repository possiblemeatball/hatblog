<script setup lang="ts">
import { data as posts } from './posts.data'

</script>

<template>
  <div v-for="post in posts" class="select-none">
    <div v-if="post.frontmatter.date">
      <h2 class="mt-0 pt-4 mb-0">
        <a :href="'/blog'+post.url">{{ post.frontmatter.title }}</a>
      </h2>
      <p class="mt-0 mb-2 text-sm text-gray-700 dark:text-gray-400 italic">
        {{ post.frontmatter.description }}
      </p>
      <div class="prose-p:mt-2 prose-p:mb-2" v-html="post.excerpt" />
      <p class="mt-0 mb-4 text-sm text-gray-700 dark:text-gray-400">
        published on {{ new Date(post.frontmatter.date).toLocaleString() }}
        by <a :href="post.frontmatter.author.link">{{ post.frontmatter.author.name }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>