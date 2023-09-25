import ContactBook from "@/views/ContactBook.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "hienmau",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/donors/:id",
        name: "donor.edit",
        component: () => import("@/views/ContactEdit.Vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },{
        path: "/contacts",
        name: "contact.add",
        component: () => import("@/views/ContactNew.vue")
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;