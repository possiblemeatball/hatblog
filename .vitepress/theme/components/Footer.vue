<script setup lang="ts">
import {useData} from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col select-none w-full justify-center items-center pt-4 pb-8">
    <div class="text-sm italic text-center text-charcoal-black-100 dark:text-charcoal-white-500">
      <div>© {{ new Date().getFullYear() }} Matt "possiblemeatball" Walker under <a class="underline" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></div>
      <div>written, edited, and published by <a class="underline" target="_blank" href="https://possiblemeatball.net">possiblemeatball</a></div>
      <div>
        <a class="underline" target="_blank" href="https://git.manthrowshat.net/meatball/hatblog">source code</a> /
        <a class="underline" target="_blank" href="https://github.com/mubin6th/charcoal/">color scheme</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>