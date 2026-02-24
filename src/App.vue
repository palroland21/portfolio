<template>
  <div class="page">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
import Projects from './components/sections/Projects.vue'
import Contact from './components/sections/Contact.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
}
</style>