/**
 * Vue Router
 * 
 * Global management of the application's routing.
 */

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./../views/index.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "error.404",
            component: () => import("./../views/404.vue"),
        },
    ],
});

export default router;