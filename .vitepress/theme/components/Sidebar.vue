<script setup lang="ts">
import {useData} from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col select-none justify-center w-full not-md:items-center md:items-end md:min-w-54">
    <div class="text-xl">{{ site.title }}</div>
    <div class="text-sm text-gray-700 dark:text-gray-400 italic">
      {{ site.description }}
    </div>
    <div class="text-sm">
      <span v-for="item in site.themeConfig.nav">
        <a class="underline" :href="item.link">
          {{ item.text }}
        </a>

        <span v-if="site.themeConfig.nav[site.themeConfig.nav.length - 1] != item">
          /
        </span>
      </span>
      </div>
  </div>
</template>

<style scoped>

</style>