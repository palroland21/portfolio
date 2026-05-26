<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-title">
        <span class="nr">03.</span>
        <h3>Projects</h3>
        <div class="line"></div>
      </div>

      <div class="controls">
        <input
            class="search"
            v-model.trim="query"
            placeholder="Search projects..."
            aria-label="Search projects"
        />

        <select class="select" v-model="sortBy" aria-label="Sort projects">
          <option value="featured">Sort: Featured</option>
          <option value="newest">Sort: Newest</option>
          <option value="name">Sort: Name</option>
        </select>
      </div>

      <div class="project-switch">
        <button
            class="switch-card relevant-card"
            :class="{ active: activeFilter === 'Most Relevant Projects' }"
            @click="activeFilter = 'Most Relevant Projects'; selectedYear = null"
        >
          <span class="switch-kicker">Featured selection</span>
          <span class="switch-title">Most Relevant Projects</span>
          <span class="switch-desc">
            Main projects selected for portfolio overview.
          </span>
        </button>

        <div
            class="switch-card all-card"
            :class="{ active: activeFilter === 'All Projects' }"
            @click="activeFilter = 'All Projects'; selectedYear = null"
        >
          <span class="switch-kicker">Complete archive</span>
          <span class="switch-title">All Projects</span>
          <span class="switch-desc">
            Browse all projects or filter them by creation year.
          </span>

          <div class="year-buttons" @click.stop>
            <button
                v-for="y in [2023, 2024, 2025, 2026]"
                :key="y"
                class="year-btn"
                :class="{ active: selectedYear === y }"
                @click="activeFilter = 'All Projects'; selectedYear = y"
            >
              {{ y }}
            </button>
          </div>
        </div>
      </div>

      <div class="filter-panel">
        <div class="filters">
          <button
              v-for="f in filters"
              :key="f"
              class="pill"
              :class="{ active: activeFilter === f }"
              @click="activeFilter = f; selectedYear = null"
          >
            {{ f }}
          </button>
        </div>
      </div>

      <div class="projects-panel">
        <div class="list">
          <article v-for="p in filteredProjects" :key="p.title" class="card">
            <div class="card-head">
              <h4 class="title">{{ p.title }}</h4>

              <div class="badges">
                <span
                    v-for="t in typeList(p)"
                    :key="t"
                    class="badge"
                    :class="badgeClass(t)"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <p class="desc">{{ p.desc }}</p>

            <div class="chips">
              <span v-for="t in p.tech" :key="t" class="chip">{{ t }}</span>
            </div>

            <div class="card-foot">
              <div class="foot-left">
                <span class="created">Created: {{ p.year }}</span>

                <button
                    v-if="p.detailsEnabled"
                    class="details-btn"
                    @click="openDetails(p)"
                >
                  Show details
                </button>
              </div>

              <a
                  v-if="p.github"
                  class="gh"
                  :href="p.github"
                  target="_blank"
                  rel="noreferrer"
              >
                GitHub <span class="arrow">↗</span>
              </a>

              <span v-else class="gh muted">Private</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { projects } from './projectsData'

export default defineComponent({
  name: 'Projects',

  data() {
    return {
      activeFilter: 'Most Relevant Projects',
      selectedYear: null,
      query: '',
      sortBy: 'featured',
      projects,
    }
  },

  computed: {
    filters() {
      const set = new Set()

      this.projects.forEach((p) => {
        this.typeList(p).forEach((t) => set.add(t))
      })

      return Array.from(set).sort((a, b) => a.localeCompare(b))
    },

    filteredProjects() {
      const q = this.query.toLowerCase()

      let list = this.projects.filter((p) => {
        const types = this.typeList(p)

        const matchFilter =
            (this.activeFilter === 'Most Relevant Projects' && p.featured === true) ||
            (this.activeFilter === 'All Projects' && (!this.selectedYear || p.year === this.selectedYear)) ||
            types.includes(this.activeFilter) ||
            (p.tags || []).includes(this.activeFilter)

        const matchQuery =
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            (p.tech || []).join(' ').toLowerCase().includes(q)

        return matchFilter && matchQuery
      })

      if (this.sortBy === 'newest') {
        list = list.slice().sort((a, b) => (b.year || 0) - (a.year || 0))
      } else if (this.sortBy === 'name') {
        list = list.slice().sort((a, b) => a.title.localeCompare(b.title))
      } else {
        list = list
            .slice()
            .sort(
                (a, b) =>
                    (b.featured === true) - (a.featured === true) ||
                    (b.year || 0) - (a.year || 0)
            )
      }

      return list
    },
  },

  methods: {
    typeList(p) {
      const t = p.type
      return Array.isArray(t) ? t : [t]
    },

    badgeClass(type) {
      const map = {
        'Full-Stack': 'b-full',
        AI: 'b-ai',
        'Machine Learning': 'b-ml',
        'Deep Learning': 'b-dl',
        FPGA: 'b-hw',
        Systems: 'b-sys',
        OpenGL: 'b-gfx',
        OpenCV: 'b-cv',
        Embedded: 'b-emb',
        PHP: 'b-php',
      }

      return map[type] || 'b-default'
    },

    openDetails(project) {
      if (!project.detailsEnabled || !project.slug) return

      this.$router.push({
        name: 'project-details',
        params: { slug: project.slug },
      })
    },
  },
})
</script>

<style scoped src="./Projects.css"></style>