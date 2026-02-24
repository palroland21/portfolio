<template>
 <section id="home" class="section hero">
   <div class="grid-bg" aria-hidden="true"></div>

   <div class="hero-inner">
     <div class="profile-wrap">
       <img class="profile" src="/profile.jpg" alt="Roland Pal" />
       <div class="profile-ring" aria-hidden="true"></div>
     </div>

     <div class="hero-text">
       <p class="header">Hi, I'm</p>
       <h1 class="name">Roland Pal</h1>
       <h2 class="role">Software Engineer</h2>
       <p class="desc">
         Computer Science student at Technical University of Cluj-Napoca. Building full-stack apps,
         exploring AI, and designing hardware architectures.
       </p>

       <div class="btn_group">
         <button class="btn primary" @click="goTo('about')">About Me</button>
         <button class="btn" @click="goTo('projects')">Projects</button>
         <a class="btn" href="https://github.com/palroland21" target="_blank" rel="noreferrer">Github<span class="arrow">↗</span></a>
       </div>
     </div>

   </div>
 </section>
</template>

<script setup>
function goTo(id){
  const el = document.getElementById(id)
  if(!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.section {
  position: relative;
}

.hero {
  position: relative;
  min-height: calc(100vh - 64px); /* height ecran - height navbar */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.grid-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image:
    linear-gradient(rgba(39,245,214,0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(39,245,214,0.14) 1px, transparent 1px);
  background-size: 72px 72px;
  opacity: 0.28;
}

.hero-inner {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
  display: grid;
  grid-template-columns: 260px 1fr; /* 260px pt poza si restu pt text*/
  gap: 46px;
  align-items: center;
}

.profile-wrap {
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  display: grid;
  place-items: center;
}

.profile {
  width: 200px;
  height: 200px;
  border-radius: 999px;
  object-fit: cover;
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 0 0 10px rgba(39,245,214,0.06);
}

.profile-ring {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 999px;
  border: 2px solid rgba(39,245,214,0.35);
}

.header{
  margin: 0 0 10px;
  color: var(--accent);
  letter-spacing: 0.6px;
}

.name{
  margin: 0;
  font-size: 56px;
  line-height: 1.05;
  letter-spacing: 1px;
}

.role{
  margin: 10px 0 14px;
  font-size: 22px;
  color: rgba(215,221,231,0.75);
  font-weight: 600;
}

.desc{
  margin: 0 0 22px;
  max-width: 620px;
  color: rgba(215,221,231,0.65);
  line-height: 1.7;
}

.btn_group{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn{
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(16,22,32,0.55);
  color: var(--text);
  padding: 12px 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
}

.btn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.06);
}

.btn.primary{
  background: rgba(39,245,214,0.16);
  border-color: rgba(39,245,214,0.40);
  color: #bffdf4;
}

.arrow{
  margin-left: 6px;
  color: var(--accent);
}

@media (max-width: 900px){
  .hero-inner{
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .name{ font-size: 44px; }
  .btn_group{ justify-content: center; }
}
</style>