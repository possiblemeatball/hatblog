<script setup lang="ts">
import {useData} from 'vitepress'

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col select-none justify-center w-full items-center md:items-end md:text-end">
    <div class="font-display text-xl">{{ site.title }}</div>
    <div class="font-sans text-sm text-charcoal-black-100 dark:text-charcoal-white-500 italic">
      <div>a quaint, humble blog</div>
      <div>hosting concise, subtle articles</div>
    </div>
    <div class="font-sans text-sm">
      <span v-for="item in site.themeConfig.nav">
        <a class="underline" :href="item.link" :target="item.target">
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