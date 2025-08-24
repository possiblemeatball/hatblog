<script setup lang="ts">
import {Content} from 'vitepress';
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <Sidebar class="md:sticky md:top-4 md:self-start md:max-w-sm
                    not-md:pt-4 not-md:pb-4 md:pr-4" />
    <div class="w-full">
      <div class="p-4 min-h-svh
                  bg-neutral-200 dark:bg-neutral-800">
        <Content class="font-serif prose text-justify prose-neutral dark:prose-invert" />
      </div>
      <Footer />
    </div>
  </div>
</template>
