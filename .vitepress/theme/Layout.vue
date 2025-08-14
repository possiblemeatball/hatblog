<script setup lang="ts">
import {Content, useData} from 'vitepress'
import Sidebar from "./components/Sidebar.vue";

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-0">
    <Sidebar class="select-none w-lg
                    md:h-screen md:text-right md:pr-4
                    not-md:w-screen not-md:text-center not-md:pt-12 not-md:pb-4" />
    <Content class="container max-w-screen max-h-screen p-4 pt-0 bg-neutral-200 dark:bg-neutral-800 prose prose-h3:font-display text-justify prose-p:font-sans prose-neutral dark:prose-invert" />
  </div>
</template>
