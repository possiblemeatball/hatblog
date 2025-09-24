<script setup lang="ts">
import { data as posts } from './posts.data'
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
});
</script>

<template>
  <div v-for="post in posts" class="select-none">
    <h2 class="mt-0 pt-4 mb-0">
      <a :href="'/blog'+post.url">{{ post.frontmatter.title }}</a>
    </h2>
    <p class="mt-0 mb-2 text-sm italic">
      {{ post.frontmatter.description }}
    </p>
    <div class="prose-p:mt-2 prose-p:mb-2" v-html="post.excerpt" />
    <p class="mt-0 mb-4 text-sm">
      published on {{ formatter.format(new Date(post.frontmatter.date)) }}
      by <a :href="post.frontmatter.author.link">{{ post.frontmatter.author.name }}</a>
    </p>
  </div>
</template>

<style scoped>

</style>