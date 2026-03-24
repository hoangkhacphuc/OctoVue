import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DocsView from '../views/DocsView.vue';
import StructureView from '../views/StructureView.vue';
import BlogView from '../views/BlogView.vue';
import AuthorView from '../views/AuthorView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ErrorView from '../views/ErrorView.vue';
import MaintenanceView from '../views/MaintenanceView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/docs', component: DocsView },
    { path: '/structure', component: StructureView },
    { path: '/blog', component: BlogView },
    { path: '/author', component: AuthorView },
    { path: '/404', component: NotFoundView },
    { path: '/error', component: ErrorView },
    { path: '/maintenance', component: MaintenanceView },
    { path: '/:pathMatch(.*)*', component: NotFoundView } // Fallback quietly
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
