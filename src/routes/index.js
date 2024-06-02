import { createRouter, createWebHistory } from 'vue-router'
import Settings from "@/components/Settings.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'settings',
            component: Settings
        }
    ]
})

export default router
