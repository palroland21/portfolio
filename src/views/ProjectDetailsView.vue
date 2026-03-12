<template>
  <ProjectDetails :slug="slug" />
</template>

<script setup>
import ProjectDetails from '@/components/sections/ProjectDetails.vue'

defineProps({
  slug: {
    type: String,
    required: true,
  },
})
</script>