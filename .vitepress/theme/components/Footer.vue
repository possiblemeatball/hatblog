<script setup lang="ts">
import {useData} from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col select-none w-full justify-center items-center pt-4 pb-8">
    <div class="text-sm text-gray-700 dark:text-gray-400 italic">
      <div>written, edited, and published by <a class="underline" target="_blank" href="https://possiblemeatball.net">possiblemeatball</a></div>
    </div>
    <div class="text-sm">
      <a class="underline" target="_blank" href="https://git.manthrowshat.net/meatball/hatblog">source code</a>
    </div>
  </div>
</template>

<style scoped>

</style>