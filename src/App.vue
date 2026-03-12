<template>
  <div class="page">
    <Navbar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.page {
  min-height: 100vh;
}
</style>