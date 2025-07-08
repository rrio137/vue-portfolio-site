import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/resume', name: 'Resume', component: ResumeView },
  { path: '/contact', name: 'Contact', component: ContactView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
