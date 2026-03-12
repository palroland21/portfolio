import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'

const router = createRouter({
    history: createWebHashHistory(), // link cu "#", dar mai safe pt Github Pages ca sa nu dea eroare 404 la refresh
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/project/:slug',
            name: 'project-details',
            component: ProjectDetailsView,
            props: true,
        },
    ],
})

export default router