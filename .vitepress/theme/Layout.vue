<script setup lang="ts">
import {Content, useData} from 'vitepress'
import Sidebar from "./components/Sidebar.vue";

const { site, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-0">
    <Sidebar class="select-none bg-white dark:bg-black
                    md:h-screen md:text-right md:pl-36 md:pr-4
                    not-md:w-screen not-md:text-center not-md:pt-12 not-md:pb-4" />
    <div class="container max-w-screen-sm p-4 pt-0">
      <Content class="prose prose-h3:font-display text-justify prose-p:font-sans max-w-none prose-neutral dark:prose-invert" />
    </div>
  </div>
</template>
