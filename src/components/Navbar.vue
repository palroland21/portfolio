<template>
 <header class="nav">
   <div class="navbar">
     <a class="brand" href="#home" @click.prevent="goTo('home')"><span class="brand-logo">RP</span></a>

     <nav class="menu">
       <a href="#about" @click.prevent="goTo('about')"><span class="nr">01.</span>About</a>
       <a href="#skills" @click.prevent="goTo('skills')"><span class="nr">02.</span>Skills</a>
       <a href="#projects" @click.prevent="goTo('projects')"><span class="nr">03.</span>Projects</a>
       <a href="#contact" @click.prevent="goTo('contact')"><span class="nr">04.</span>Contact</a>
     </nav>
   </div>
 </header>
</template>

<script setup>
function goTo(section) {
  const el = document.getElementById(section)
  if(!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>


<style scoped>
.nav {
  position: sticky;
  top: 0;
  background: rgba(5,7,11,0.55);
  border-bottom: 1px solid var(--border);
}

.navbar {
  height: 64px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 0.5px;
}

.menu {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 14px;

  a {
    color: var(--muted);
    padding: 10px 10px;
    border-radius: 10px;
    transition: 0.2s ease;
  }

  a:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.06)
  }

  .nr {
    color: var(--accent);
    margin-right: 8px;
  }
}
@media (max-width: 900px){
  .menu {gap: 8px;}
  .menu a { padding: 10px 8px; }
}

</style>