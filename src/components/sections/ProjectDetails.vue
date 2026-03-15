<template>
  <section class="project-details section">
    <div class="container">
      <button class="back-btn" @click="goBack">← Back to projects</button>

      <div v-if="project" class="details-card">
        <div class="hero">
          <div>
            <p class="eyebrow">Project details</p>
            <h1>{{ project.title }}</h1>
            <p class="lead">{{ project.summary }}</p>
          </div>

          <a
              v-if="project.github"
              class="github-btn"
              :href="project.github"
              target="_blank"
              rel="noreferrer"
          >
            View GitHub ↗
          </a>
        </div>

        <div class="meta-grid">
          <div class="meta-box">
            <h3>Type</h3>
            <p>{{ project.type }}</p>
          </div>

          <div class="meta-box">
            <h3>Year</h3>
            <p>{{ project.year }}</p>
          </div>

          <div class="meta-box">
            <h3>Role</h3>
            <p>{{ project.role }}</p>
          </div>
        </div>

        <div class="content-grid">
          <div class="content-box">
            <h2>What the project can do</h2>
            <ul>
              <li v-for="item in project.features" :key="item" v-html="item"></li>
            </ul>
          </div>

          <div class="content-box">
            <h2>What I implemented</h2>
            <ul>
              <li v-for="item in project.implemented" :key="item" v-html="item"></li>
            </ul>
          </div>
        </div>

        <div v-if="project.engineeringHighlights?.length" class="content-box">
          <h2>Engineering Highlights</h2>
          <ul>
            <li v-for="item in project.engineeringHighlights" :key="item" v-html="item"></li>
          </ul>
        </div>

        <div class="content-box">
          <h2>Technologies used</h2>
          <div class="chips">
            <span v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</span>
          </div>
        </div>

        <div class="content-box">
          <h2>Interface screenshots</h2>
          <div class="gallery">
            <img
                v-for="img in project.images"
                :key="img.src"
                :src="img.src"
                :alt="img.alt"
            />
          </div>
        </div>
      </div>

      <div v-else class="details-card">
        <h1>Project not found</h1>
        <p>This details page is not available.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ProjectDetails',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const projectsMap = {
      'rv-auto-seller': {
        title: 'RV Auto Seller Platform',
        type: 'Full-Stack',
        year: 2026,
        role: 'Full-Stack Developer',
        github: 'https://github.com/palroland21/RV-AUTO-SELLER',

        summary:
             'Secure full-stack car marketplace built with Spring Boot and Vue. The platform includes JWT-based authentication, role-based access, admin management, vehicle listing and filtering, seller-buyer interaction, appointment scheduling, and review functionality through a PostgreSQL-backed REST API.',

        features: [
          'Browse active car listings with <span class="hl">image galleries</span>',
          'View detailed vehicle pages and <span class="hl">seller information</span>',
          'Search by title and filter by <span class="hl">brand</span>, <span class="hl">model</span>, <span class="hl">price</span>, <span class="hl">year</span>, <span class="hl">fuel type</span>, <span class="hl">mileage</span>, <span class="hl">location</span>, and <span class="hl">gearbox</span>',
          'Register, log in, and access <span class="hl">protected user actions</span>',
          'Schedule <span class="hl">viewing / test-drive appointments</span>',
          'Leave <span class="hl">reviews and feedback</span> for sellers',
          '<span class="hl">Seller dashboard</span> for listing management and image handling',
          '<span class="hl">Admin dashboard</span> for user management, listing moderation, and platform statistics',
        ],

        implemented: [
          'Built a <span class="hl">Spring Boot REST API</span> for authentication, listings, appointments, reviews, and admin workflows',
          'Implemented <span class="hl">authentication and authorization</span> with <span class="hl">Spring Security</span> and <span class="hl">JWT</span>',
          'Designed and mapped backend entities using <span class="hl">JPA / Hibernate</span> with <span class="hl">PostgreSQL</span> persistence',
          'Developed <span class="hl">CRUD workflows</span> for listings, seller operations, appointment requests, and admin actions',
          'Implemented server-side <span class="hl">multipart image upload</span> and storage for vehicle galleries',
          'Built the <span class="hl">Vue frontend</span> and integrated it with backend endpoints using <span class="hl">Axios</span>',
          'Validated and tested API request flows using <span class="hl">Postman</span>',
        ],

        engineeringHighlights: [
          '<span class="hl">Client-server architecture</span> with a separate <span class="hl">Vue frontend</span> and <span class="hl">Spring Boot backend</span>',
          '<span class="hl">REST API</span> communication for authentication, listings, appointments, reviews, and admin flows',
          '<span class="hl">Role-based access control</span> for <span class="hl">Client</span>, <span class="hl">Seller</span>, and <span class="hl">Administrator</span>',
          '<span class="hl">JWT-secured</span> authentication with <span class="hl">protected endpoints</span>',
          '<span class="hl">PostgreSQL</span> persistence through <span class="hl">Spring Data JPA</span> and <span class="hl">Hibernate</span>',
          '<span class="hl">Multipart image upload</span> with server-side file handling and storage',
          'Frontend-backend integration through <span class="hl">Axios</span>-based API calls',
          '<span class="hl">Seller</span> and <span class="hl">admin workflows</span> designed for realistic marketplace scenarios',
        ],

        tech: [
          'Java',
          'Spring Boot',
          'Spring Web (REST)',
          'Spring Security',
          'JWT',
          'Spring Data JPA',
          'Hibernate',
          'Bean Validation',
          'Lombok',

          'Vue 3',
          'Vite',
          'TypeScript',
          'Axios',

          'REST API',
          'SQL',
          'PostgreSQL',
          'CORS',

          'Postman',
          'Git',
          'GitHub'
        ],

        images: [
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/1.png`, alt: 'RV Auto Seller homepage' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/2.png`, alt: 'RV Auto Seller filters and search interface' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/3.png`, alt: 'RV Auto Seller listing details page' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/4.png`, alt: 'RV Auto Seller login and register pages' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/5.png`, alt: 'RV Auto Seller seller dashboard for managing listings' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/6.png`, alt: 'RV Auto Seller appointments management page' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/7.png`, alt: 'RV Auto Seller add new listing page 1' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/8.png`, alt: 'RV Auto Seller add new listing page 2' },
          { src: `${import.meta.env.BASE_URL}images/rv-auto-seller/9.png`, alt: 'RV Auto Seller admin dashboard with tables and statistics' },
        ],
      },
    }

    const project = computed(() => projectsMap[props.slug] || null)

    return {
      project,
    }
  },

  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
})
</script>

<style>
.section{
  padding: 88px 0;
}

.container{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 18px;
}

.back-btn{
  margin-bottom: 22px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.86);
  padding: 10px 14px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 700;
}

.details-card{
  background: rgba(16,22,32,0.55);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 14px 35px rgba(0,0,0,0.18);
}

.hero{
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 26px;
  flex-wrap: wrap;
}

.eyebrow{
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.hero h1{
  margin: 0 0 12px;
  font-size: 38px;
}

.lead{
  margin: 0;
  max-width: 760px;
  color: rgba(215,221,231,0.72);
  line-height: 1.8;
}

.github-btn{
  text-decoration: none;
  color: #bffdf4;
  border: 1px solid rgba(39,245,214,0.35);
  background: rgba(39,245,214,0.10);
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 700;
}

.meta-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

.meta-box,
.content-box{
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 18px;
}

.meta-box h3,
.content-box h2{
  margin-top: 0;
}

.content-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.content-box{
  margin-bottom: 16px;
}

.content-box ul{
  margin: 0;
  padding-left: 18px;
  color: rgba(215,221,231,0.75);
  line-height: 1.8;
}

.content-box .hl {
  font-weight: 900;
  color: #86efac;
  text-shadow: 0 0 8px rgba(134, 239, 172, 0.16);
}

.chips{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip{
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  color: rgba(215,221,231,0.70);
}

.gallery{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.gallery img{
  width: 100%;
  display: block;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  object-fit: cover;
}

@media (max-width: 900px){
  .meta-grid,
  .content-grid,
  .gallery{
    grid-template-columns: 1fr;
  }

  .hero h1{
    font-size: 30px;
  }
}
</style>