<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.body"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useContent } from "@nuxt/content";

const route = useRoute();
const { data: post } = await useContent("content")
  .where({ slug: route.params.slug })
  .fetch();
</script>
