
import Trangchu from "@/views/Trangchu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "hienmau",
        component: Trangchu,
    },
    {
        path: "/login",
        name: "login",
        component:()=> import("@/views/Login.vue"),

    },
    {
        path: "/users",
        name: "user.register",
        component: () => import("@/views/Register.vue"),

    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/:events",
        name: "event",
        component: () => import("@/views/Event.vue"),
    },
    
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;