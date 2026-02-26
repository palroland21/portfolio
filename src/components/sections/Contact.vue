<template>
  <section id="contact" class="section contact">
    <div class="container">

      <div class="contact-title">
        <span class="nr">04.</span>
        <h3>Get In Touch</h3>
      </div>

      <p class="contact-text">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div class="contact-actions">
        <a class="btn primary" :href="mailtoLink">Say Hello</a>

        <a class="btn ghost" :href="linkedin" target="_blank" rel="noreferrer">
          LinkedIn <span class="arrow">↗</span>
        </a>

        <a class="btn ghost" :href="github" target="_blank" rel="noreferrer">
          GitHub <span class="arrow">↗</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      email: 'palroland2004@gmail.com',
      linkedin: 'https://www.linkedin.com/in/roland-pal-13384b299/',
      github: 'https://github.com/palroland21',
    }
  },
  computed: {
    mailtoLink() {
      const subject = encodeURIComponent('Hello from your portfolio')
      const body = encodeURIComponent('Hi Roland,\n\n')
      return `mailto:${this.email}?subject=${subject}&body=${body}`
    },
  },
}
</script>

<style scoped>
.section{
  padding: 110px 0 90px;
}

.container{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
  text-align: center;
}

/* title like in screenshot: lines left/right + centered text */
.contact-title{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  margin-bottom: 22px;
}

.contact-title::before,
.contact-title::after{
  content: "";
  height: 1px;
  width: min(260px, 26vw);
  background: rgba(255,255,255,0.10);
}

.nr{
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.6px;
  font-size: 13px;
}

.contact-title h3{
  margin: 0;
  font-size: 34px;
  letter-spacing: 0.5px;
}

.contact-text{
  max-width: 520px;
  margin: 0 auto 30px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 15px;
}

.contact-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* buttons */
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-decoration: none;
  transition: 0.18s ease;
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.88);
  background: rgba(16,22,32,0.35);
}

.btn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.06);
}

.btn.primary{
  background: rgba(39,245,214,0.18);
  border-color: rgba(39,245,214,0.45);
  color: #bffdf4;
  padding: 12px 22px;
}

.btn.primary:hover{
  background: rgba(39,245,214,0.24);
}

.btn.ghost{
  background: transparent;
  border-color: rgba(255,255,255,0.14);
}

.arrow{
  color: var(--accent);
  font-size: 14px;
  margin-left: 2px;
}

@media (max-width: 700px){
  .contact-title h3{ font-size: 30px; }
  .contact-title::before,
  .contact-title::after{ width: 22vw; }
}
</style>