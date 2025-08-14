<script setup lang="ts">
import {Content, useData} from 'vitepress';
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

const { site, frontmatter } = useData()
</script>

<template>
  <div class="grid grid-flow-row md:grid-flow-col">
    <Sidebar class="md:row-span-3 not-md:pt-12 not-md:pb-4 md:pr-4" />
    <Content class="md:col-span-12 p-4 pt-0 min-h-svh
                    bg-neutral-200 dark:bg-neutral-800
                    prose text-justify
                    prose-p:font-sans prose-h3:font-display
                    prose-neutral dark:prose-invert" />
    <Footer class="md:col-span-12 " />
  </div>
</template>
