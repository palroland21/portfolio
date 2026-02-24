<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-title">
        <span class="nr">02.</span>
        <h3>Skills</h3>
        <div class="line"></div>
      </div>

      <div class="skills-grid">
        <div v-for="col in columns" :key="col.title" class="col">
          <h4 class="col-title">{{ col.title }}</h4>

          <div v-for="s in col.items" :key="s.label" class="skill">
            <div class="row">
              <span class="label">{{ s.label }}</span>
              <span class="pct">{{ s.value }}%</span>
            </div>

            <div class="track">
              <div class="fill" :style="{ width: s.value + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const columns = [
  {
    title: 'FULL-STACK',
    items: [
      { label: 'Java / Spring Boot', value: 95 },
      { label: 'REST APIs', value: 95 },
      { label: 'Vue.js', value: 90 },
      { label: 'Spring Security', value: 80 },
      { label: 'JUnit / Mockito', value: 75 },
    ],
  },
  {
    title: 'DATA & DEVOPS',
    items: [
      { label: 'SQL / PostgreSQL', value: 95 },
      { label: 'JPA / Hibernate', value: 90 },
      { label: 'Git / GitLab', value: 95 },
      { label: 'CI/CD', value: 80 },
      { label: 'Docker', value: 70 },
    ],
  },
  {
    title: 'SYSTEMS & C/C++',
    items: [
      { label: 'C / C++', value: 85 },
      { label: 'Data Structures & Algorithms', value: 90 },
      { label: 'Multithreading', value: 80 },
      { label: 'OpenGL / Graphics', value: 75 },
      { label: 'OOP / Design Patterns', value: 95 },
    ],
  },
  {
    title: 'AI, HARDWARE & 3D',
    items: [
      { label: 'FPGA / VHDL', value: 90 },
      { label: 'Xilinx Vivado', value: 85 },
      { label: 'Vitis / HLS', value: 70 },
      { label: 'AI APIs (Gemini/OpenAI)', value: 65 },
      { label: 'Blender', value: 70 },
    ],
  },
]
</script>

<style scoped>
.section { padding: 88px 0; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 18px; }

.section-title { display: flex; align-items: center; gap: 14px; margin-bottom: 26px; }
.section-title h3 { margin: 0; font-size: 28px; letter-spacing: 0.4px; }
.line { height: 1px; flex: 1; background: rgba(255,255,255,0.10); }
.nr { color: var(--accent); margin-right: 8px; }

.skills-grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 34px;
  margin-top: 10px;
}

.col-title{
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(39,245,214,0.85);
}

.skill{ margin-bottom: 18px; }

.row{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.label{
  color: rgba(255,255,255,0.90);
  font-size: 13px;
  letter-spacing: 0.2px;
}

.pct{
  color: rgba(215,221,231,0.65);
  font-size: 12px;
}

.track{
  height: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
}

.fill{
  height: 100%;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 14px rgba(39,245,214,0.25);
}

@media (max-width: 1100px){
  .skills-grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 700px){
  .skills-grid{ grid-template-columns: 1fr; gap: 20px; }
}
</style>