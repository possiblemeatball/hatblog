<script setup lang="ts">
import {Content, useData} from 'vitepress';
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

const {frontmatter} = useData()
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <Sidebar class="md:sticky md:top-4 md:self-start md:max-w-sm
                    not-md:pt-4 not-md:pb-4 md:pr-4" />
    <div class="w-full">
      <div class="p-4 min-h-svh
                  bg-neutral-200 dark:bg-neutral-800">
        <div class="font-serif prose max-w-2xl text-justify prose-neutral dark:prose-invert">
          <h1 class="mb-1 text-left">{{ frontmatter.title }}</h1>
          <p class="mt-1 text-left text-sm text-gray-700 dark:text-gray-400 italic">{{ frontmatter.description }}</p>

          <Content />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
