<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-title"><span class="nr">01.</span><h3>About Me</h3><div class="line"></div></div>
      <p class="p-muted">
        I’m a calm, focused person who likes to do things properly and finish what I start. I enjoy learning, especially when I can practice it right away and see real progress. I pay attention to details, I like keeping things organized, and I’m the type of person who prefers clean and clear work, not rushed solutions.
        <br><br>
        I’m also reliable and consistent. If I don’t know something, I look it up, test it, and ask questions until it makes sense. I learn fast, but I also care about understanding, not only copying. I work well on my own when I need deep focus, and I also like teamwork when people communicate clearly and have the same goal.
        <br><br>
        Overall, I’m motivated, easy to work with, and I genuinely enjoy improving. I like challenges, I like building useful things, and I want to be part of a team where I can grow and contribute in a serious way.
      </p>
    </div>
  </section>
</template>

<style scoped>
.section{
  padding: 88px 0;
}

.container{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
}

.section-title{
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.section-title h3{
  margin: 0;
  font-size: 28px;
  letter-spacing: 0.4px;
}

.line{
  height: 1px;
  flex: 1;
  background: rgba(255,255,255,0.10);
}

.nr{
  color: var(--accent);
  margin-right: 8px;
}

.p-muted{
  color: var(--muted);
}

</style>