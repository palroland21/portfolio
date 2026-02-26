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

      <div class="filters">
        <button
            class="pill"
            :class="{ active: activeFilter === 'All Projects' }"
            @click="activeFilter = 'All Projects'"
        >
          All Projects
        </button>

        <button v-for="f in filters" :key="f" class="pill" :class="{ active: activeFilter === f }" @click="activeFilter = f">{{ f }}</button>
      </div>

      <div class="list">
        <article v-for="p in filteredProjects" :key="p.title" class="card">
          <div class="card-head">
            <h4 class="title">{{ p.title }}</h4>
            <div class="badges">
              <span v-for="t in typeList(p)" :key="t" class="badge" :class="badgeClass(t)">{{ t }}</span>
            </div>
          </div>

          <p class="desc">{{ p.desc }}</p>

          <div class="chips">
            <span v-for="t in p.tech" :key="t" class="chip">{{ t }}</span>
          </div>

          <div class="card-foot">
            <span class="created">Created: {{ p.year }}</span>
            <a v-if="p.github" class="gh" :href="p.github" target="_blank" rel="noreferrer">
              GitHub <span class="arrow">↗</span>
            </a>
            <span v-else class="gh muted">Private</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      activeFilter: 'All Projects',
      query: '',
      sortBy: 'featured',

      projects: [
        {
          title: 'RV Auto Seller Platform',
          type: 'Full-Stack',
          year: 2026,
          featured: true,
          desc: 'Car marketplace similar to OLX, focused on vehicle listings. Users can browse and search cars with filters, view listing details, contact sellers, leave reviews, and schedule appointments for viewings. Built with a Spring Boot REST backend secured with JWT authentication and a Vue 3 frontend that consumes the API via Axios.',
          tech: ['Java 17','Spring Boot 3.5','Spring Security','JWT','REST API','PostgreSQL','Spring Data JPA (Hibernate)','Bean Validation','Lombok','Vue 3','Vite','Vue Router','Axios'],
          tags: ['Full-Stack','Marketplace','Auth/JWT','REST','PostgreSQL','Appointments','Reviews'],
          github: 'https://github.com/palroland21/RV-AUTO-SELLER',
        },
        {
          title: 'ResQ - AI Insurance Platform (PoliHack)',
          type: ['Full-Stack', 'AI'],
          year: 2025,
          featured: true,
          desc: 'Crisis response PWA built in 48 hours: Victims create help requests and Rescuers can browse, filter, and accept nearby cases. Includes GPS-based map view (Leaflet), role-based auth, AI medical triage with Gemini (severity 1–3), and Stripe payments for donations/subscriptions.',
          tech: [ 'Java 17','Spring Boot','Spring Security','JWT','PostgreSQL','JPA/Hibernate','Vue 3', 'Google Maps', 'Vite','Pinia','Leaflet (Maps/GPS)','Stripe','Gemini AI','Firebase'],
          tags: [ 'AI Triage','Maps/GPS','Auth/JWT','Stripe Payments','Hackathon', 'APIs', 'Web', 'PWA',],
          github: 'https://github.com/palroland21/PoliHack',
        },
        {
          title: 'Queue Management Simulation',
          type: 'Systems',
          year: 2024,
          featured: false,
          desc: 'Multithreaded queue simulation with a Swing UI for configuring the scenario (clients, queues, simulation time, arrival/service ranges). Generates random clients and dispatches them to servers using scheduling strategies (shortest queue / shortest waiting time), while logging the real-time evolution and computing final stats like average waiting/service time and peak hour.',
          tech: ['Java','OOP','Multithreading','Swing','BlockingQueue','Synchronization','Atomic/Locks','File Logging'],
          tags: ['Concurrency','Scheduling','Simulation','GUI','OOP','Desktop'],
          github: 'https://github.com/palroland21/Queue-Management-Application-in-JAVA',
        },
        {
          title: 'FPGA Memory Game (Nexys A7) + UART Logger',
          type: 'Hardware',
          year: 2026,
          featured: true,
          desc: 'FPGA memory game in VHDL on Nexys4/Nexys A7 with a clear Game FSM (generate → show → input → check → win/lose). Uses a 16-bit LFSR for pseudo-random digit sequences (0–9), Pmod KYPD 4x4 keypad input with edge-detect, and a multiplexed 7-seg driver where the display speed increases with level. After each round, the board sends level + result over UART to a Python (pyserial) logger that adds timestamps and tracks best score.',
          tech: ['VHDL','Vivado','Nexys A7 (Artix-7)','FSM Design','LFSR (16-bit)','7-Segment Multiplexing','Pmod KYPD (4x4)','UART TX','Python','pyserial'],
          tags: ['FPGA','Embedded','Digital Design','UART','Verification','Hardware'],
          github: 'https://github.com/palroland21/VHDL-JocDeMemorie--FPGA-Python',
        },
        {
          title: 'Horror First-Person Game (OpenGL)',
          type: 'Graphics',
          year: 2026,
          featured: true,
          desc: 'First-person horror exploration scene in an abandoned hospital, built in OpenGL with FPS camera (WASD + mouse), door interaction (animated open/close + auto-close), collisions (AABB + player cylinder), gravity with multi-level floor patches, camera flashlight spotlight with shadow mapping (depth pass + PCF), plus distance-based monster audio for atmosphere.',
          tech: ['C++','OpenGL','GLSL','GLFW','GLM','Shadow Mapping','PCF','Collision System (AABB + Cylinder)','miniaudio','stb_image','tinyobjloader','OBJ/MTL Pipeline'],
          tags: ['GameDev','Graphics','Shaders','Shadow Mapping','Physics','Audio'],
          github: 'https://github.com/palroland21/Horror-First-Person-Camera-Game',
        },
        {
          title: 'AI Search Agent (Pacman)',
          type: 'AI',
          year: 2026,
          featured: false,
          desc: 'Search algorithms for the UC Berkeley Pacman AI project. Implemented DFS/BFS/UCS/A* plus advanced problems like CornersProblem and FoodSearchProblem with admissible heuristics (Manhattan-based) and heuristic caching for faster runs. Includes a greedy ClosestDotSearchAgent and passes the autograder with max score.',
          tech: ['Python 3','State-Space Search','DFS','BFS','Uniform Cost Search','A* Search','Admissible Heuristics','Manhattan Distance','Maze Distance','Heuristic Caching (problem.heuristicInfo)','Pacman AI Framework (UC Berkeley)','Autograder'],
          tags: ['AI','Search','A*','UCS','Heuristics','Pacman'],
          github: 'https://github.com/palroland21/AI-Search-Agent-Pacman',
        },
        {
          title: 'AI Multi-Agent Search (Pacman)',
          type: 'AI',
          year: 2026,
          featured: true,
          desc: 'Adversarial multi-agent decision-making for the UC Berkeley Pacman AI project. Implemented a ReflexAgent plus Minimax and Alpha-Beta pruning agents that model Pacman (MAX) vs. Ghosts (MIN), look ahead over game trees, and choose actions using evaluation functions while handling terminal states (win/lose) and depth control.',
          tech: ['Python 3','Adversarial Search','Minimax','Alpha-Beta Pruning','Game Trees','Heuristic Evaluation','Pacman AI Framework (UC Berkeley)','Autograder'],
          tags: ['AI','Game AI','Adversarial Search','Minimax','Alpha-Beta','Heuristics'],
          github: 'https://github.com/palroland21/AI-Multi-Agent-Seach',
        },
        {
          title: 'AI Reinforcement Learning (Pacman)',
          type: 'AI',
          year: 2026,
          featured: true,
          desc: 'Reinforcement Learning agents for the UC Berkeley Pacman project. Implemented MDP planning with Value Iteration (including Prioritized Sweeping), plus model-free Q-Learning with epsilon-greedy exploration and Approximate Q-Learning using feature extractors. Tested in Gridworld and Pacman, with parameter analysis for different optimal policies.',
          tech: ['Python 3','MDP','Value Iteration','Prioritized Sweeping','Q-Learning','Approximate Q-Learning','Epsilon-Greedy','Feature Extractors','Gridworld','Pacman AI Framework (UC Berkeley)','Autograder'],
          tags: ['AI','Reinforcement Learning','MDP','Q-Learning','Planning','Pacman'],
          github: 'https://github.com/palroland21/AI-Reinforcement-Learning',
        },
        {
          title: 'Dozator de Cola (VHDL) – Coin-Operated Dispenser',
          type: 'Hardware',
          year: 2023,
          featured: true,
          desc: 'Digital vending machine implemented in VHDL: accepts 5/10/50 bani coins via photodetector inputs (F0–F2), rejects invalid coins/foreign objects (F3), accumulates credit using an 8-bit adder, and releases Coca-Cola when the user presses the dispense button. If credit is insufficient, it signals “FonduriInsuficiente” and returns coins; if credit exceeds 100 bani, it also triggers change return. Designed as a black-box then split into Control Unit (UC) and Execution Unit (UE) for clean control vs datapath separation.',
          tech: ['VHDL','Digital Design','FSM Control Logic','Control Unit (UC) / Execution Unit (UE)','MUX 4:1','8-bit Adder (Full Adders)','Clocked Logic','I/O Interface (Photocells + Button)'],
          tags: ['FPGA','Hardware','Digital Design','FSM','Datapath','VHDL'],
          github: 'https://github.com/palroland21/PROIECT-Dozator-De-Cola',
        },
        {
          title: 'MIPS Processor (VHDL) – Single-Cycle + Pipeline',
          type: 'Hardware',
          year: 2024,
          featured: true,
          desc: 'Designed and simulated two MIPS CPU architectures in VHDL: a complete single-cycle processor (ALU, register file, instruction/data memory, control signals) and an extended 5-stage pipelined version (IF, ID, EX, MEM, WB) using pipeline registers. Added hazard handling via forwarding and hazard detection, and validated execution flow with dedicated testbenches for arithmetic, branching, and memory instructions.',
          tech: ['VHDL','CPU Architecture','MIPS ISA','Single-Cycle Datapath','5-Stage Pipeline (IF/ID/EX/MEM/WB)','Pipeline Registers','Hazard Detection Unit','Forwarding Unit','Control Unit','ALU','Register File','Testbenches','Simulation/Timing Verification'],
          tags: ['CPU Design','MIPS','Pipeline','Hazards','VHDL','Digital Design'],
          github: 'https://github.com/palroland21/MIPS',
        },
        {
          title: 'BallEscape (Java Game)',
          type: 'Systems',
          year: 2023,
          featured: false,
          desc: 'Small Java arcade-style game where the player controls a ball and must avoid obstacles to survive and score points. Built as a lightweight desktop project focused on game loop logic, collision checks, and simple UI rendering.',
          tech: ['Java','OOP','2D Game Loop','Collision Detection','Desktop UI'],
          tags: ['Java','GameDev','Desktop','OOP'],
          github: 'https://github.com/palroland21/JavaGame_BallEscape',
        },
        {
          title: 'Anti-Theft System (ESP32)',
          type: 'Embedded',
          year: 2024,
          featured: false,
          desc: 'Motion-based anti-theft system for a bicycle built on ESP32. Uses a GY-521 (MPU6050 accelerometer/gyroscope) over I2C to detect movement above calibrated thresholds. The alarm is armed/disarmed from the phone via Arduino IoT Remote, and when motion is detected it triggers a visual alert (2 red LEDs blinking) and an audible alert (active buzzer). A green LED indicates the system is powered/active.',
          tech: ['ESP32','Arduino (C/C++)','MPU6050 / GY-521','I2C (Wire.h)','Arduino IoT Cloud / Arduino IoT Remote','Threshold Calibration','LED + Buzzer Output','Serial Debugging'],
          tags: ['Embedded','ESP32','Sensors','I2C','Alarm','IoT'],
          github: 'https://github.com/palroland21/Anti-theft_system-Arduino',
        },
        {
          title: 'Database Project (PHP + MySQL) – Stored Procedures & Queries',
          type: 'PHP',
          year: 2024,
          featured: false,
          desc: 'Web mini-app in PHP that authenticates users (login + session) and exposes a set of database exercises as interactive queries. Uses prepared statements and calls multiple MySQL stored procedures (CALL ...) to fetch results such as tests by semester/date, correct answers for a given test, fully answered tests, per-test question count and total score, and question ranking based on a computed ratio.',
          tech: ['PHP','HTML','MySQL','Stored Procedures','Prepared Statements','Sessions/Auth','SQL Queries'],
          tags: ['Database','SQL','Stored Procedures','PHP','Web'],
          github: 'https://github.com/palroland21/Database-Project-with-PHP',
        }
      ],
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
            this.activeFilter === 'All Projects' ||
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
        // featured first, then newest
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
        Hardware: 'b-hw',
        Systems: 'b-sys',
        Graphics: 'b-gfx',
        Embedded: 'b-emb',
        PHP: 'b-php',
      }
      return map[type] || 'b-default'
    },
  },
})
</script>

<style scoped>
.section { padding: 88px 0; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 18px; }

.section-title { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.section-title h3 { margin: 0; font-size: 32px; letter-spacing: 0.4px; }
.line { height: 1px; flex: 1; background: rgba(255,255,255,0.10); }
.nr { color: var(--accent); margin-right: 8px; font-weight: 700; }

.controls{
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 12px 0 14px;
  flex-wrap: wrap;
}

.search{
  flex: 1;
  min-width: 220px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(5,7,11,0.35);
  color: var(--text);
  outline: none;
}

.search:focus{
  border-color: rgba(39,245,214,0.35);
  box-shadow: 0 0 0 3px rgba(39,245,214,0.08);
}

.select{
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(5,7,11,0.35);
  color: rgba(255,255,255,0.85);
  outline: none;
}

.filters{
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10px 2px 18px;
  scrollbar-width: thin;
}

.pill{
  white-space: nowrap;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: rgba(215,221,231,0.70);
  padding: 10px 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.18s ease;
  font-weight: 700;
  font-size: 13px;
}

.pill:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.06);
}

.pill.active{
  background: rgba(39,245,214,0.20);
  border-color: rgba(39,245,214,0.45);
  color: #bffdf4;
}

.list{
  display: grid;
  gap: 18px;
  margin-top: 6px;
}

.card{
  background: rgba(16,22,32,0.55);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  padding: 22px 22px 18px;
  box-shadow: 0 14px 35px rgba(0,0,0,0.18);
  transition: 0.18s ease;
}

.card:hover{
  transform: translateY(-2px);
  border-color: rgba(39,245,214,0.28);
}

.card-head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 10px;
}

.title{
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: rgba(255,255,255,0.92);
}

.badges{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.badge{
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.06);
  color: rgba(215,221,231,0.75);
}

/* badge variants */
.b-full{ background: rgba(39,245,214,0.16); border-color: rgba(39,245,214,0.25); color: #bffdf4; }
.b-ai{ background: rgba(120,160,255,0.12); border-color: rgba(120,160,255,0.22); color: rgba(190,205,255,0.95); }
.b-hw{ background: rgba(255,180,90,0.10); border-color: rgba(255,180,90,0.22); color: rgba(255,220,175,0.95); }
.b-sys{ background: rgba(160,255,180,0.10); border-color: rgba(160,255,180,0.22); color: rgba(205,255,215,0.95); }
.b-gfx{ background: rgba(255,120,190,0.10); border-color: rgba(255,120,190,0.22); color: rgba(255,200,235,0.95); }
.b-emb{ background: rgba(160,140,255,0.12); border-color: rgba(160,140,255,0.22); color: rgba(220,210,255,0.95); }
.b-php{ background: rgba(80,220,160,0.10); border-color: rgba(80,220,160,0.24); color: rgba(190,125,230,0.95); }

.desc{
  margin: 0 0 14px;
  color: rgba(215,221,231,0.68);
  line-height: 1.75;
  font-size: 14px;
  max-width: 92%;
}

.chips{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.chip{
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  color: rgba(215,221,231,0.70);
}

.card-foot{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gh{
  color: rgba(215,221,231,0.75);
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  transition: 0.18s ease;
}

.gh:hover{
  color: rgba(39,245,214,0.90);
}

.arrow{
  color: var(--accent);
  margin-left: 6px;
}

.muted{ opacity: 0.6; }

.created{
  font-size: 13px;
  font-weight: 700;
  color: rgba(215,221,231,0.60);
}

@media (max-width: 720px){
  .desc{ max-width: 100%; }
  .card{ padding: 18px 16px 14px; }
}
</style>