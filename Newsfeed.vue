<script setup lang="ts">
import { data as posts } from './posts.data'

</script>

<template>
  <div class="text-left">
    <h1 class="mb-1">Newsfeed</h1>
    <p class="mt-1 text-sm text-gray-700 dark:text-gray-400 italic">for all our prime, exclusive articles on nothing but the most meaningful topics.</p>
    <div v-for="post in posts" class="select-none">
      <div v-if="post.frontmatter.date">
        <h2 class="mt-0 pt-4 mb-1">
          <a :href="'/blog'+post.url">{{ post.frontmatter.title }}</a>
          <span class="text-sm text-gray-700 dark:text-gray-400 font-normal pl-1">
          published {{ new Date(post.frontmatter.date).toLocaleString() }}
          by {{ post.frontmatter.author }}
        </span>
        </h2>
        <p class="mt-1 mb-1 text-sm text-gray-700 dark:text-gray-400 italic">
          {{ post.frontmatter.description }}
        </p>
        <p class="mt-1">
          {{ post.frontmatter.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>