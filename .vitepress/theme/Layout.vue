<script setup lang="ts">
import {Content, useData} from 'vitepress';
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

const { site, frontmatter } = useData()
</script>

<template>
  <div class="grid grid-flow-row md:grid-flow-col">
    <Sidebar class="md:sticky md:top-4 md:self-start md:row-span-3
                    not-md:pt-4 not-md:pb-4 md:pr-4" />
    <div class="md:col-span-12 md:overflow-y-auto">
      <Content class="p-4 pt-0 min-h-svh
                    bg-neutral-200 dark:bg-neutral-800
                    prose text-justify
                    prose-p:font-sans prose-h3:font-display
                    prose-neutral dark:prose-invert" />
      <Footer />
    </div>
  </div>
</template>
