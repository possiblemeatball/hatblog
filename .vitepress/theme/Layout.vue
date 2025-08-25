<script setup lang="ts">
import {Content, useData} from 'vitepress';
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

const {frontmatter} = useData()
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
});
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <Sidebar class="md:sticky md:top-4 md:self-start md:max-w-sm
                    not-md:pt-4 not-md:pb-4 md:pr-4" />
    <div class="w-full">
      <div class="p-4 min-h-svh
                  bg-neutral-200 dark:bg-neutral-800">
        <div class="font-serif prose max-w-2xl text-justify prose-neutral dark:prose-invert">
          <h1 class="mt-0 mb-0 text-left" v-if="frontmatter.title">{{ frontmatter.title }}</h1>
          <p class="mt-0 mb-0 text-left text-gray-700 dark:text-gray-400 italic" v-if="frontmatter.description">{{ frontmatter.description }}</p>
          <p class="mt-0 text-left text-gray-700 dark:text-gray-400" v-if="frontmatter.date || frontmatter.author">
            <span v-if="frontmatter.date">published on {{ formatter.format(new Date(frontmatter.date as string)) }}</span>
            <span v-if="frontmatter.author"> by <a :href="frontmatter.author.link">{{ frontmatter.author.name }}</a></span>
          </p>

          <Content />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
