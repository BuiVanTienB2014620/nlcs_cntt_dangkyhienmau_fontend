
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
  {
    path: "/",
   
    component: () => import("@/layouts/Base.vue"),
    children: [
      
      {
        path: "",
        name: "hienmau",
        component: () => import("@/views/TrangChu.vue"),
      },
    
    
      {
        path: "/auth",
        name: "auth",
        component: () => import("@/views/Auth.vue"),
      },
    
      {
        path: "/loginuser",
        name: "login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/users",
        name: "user.register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "/events",
        name: "events",
        component: () => import("@/views/Event.vue"),
      },
    
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
      },

      
    ],
  },
  {
    path: "/admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "user",
        name: "admin-user",
        component: () => import("@/admin/User.vue"),
      },

      {
        path: "blood",
        name: "admin-blood",
        component: () => import("@/admin/Blood.vue"),
      },

      {
        path: "position",
        name: "admin-position",
        component: () => import("@/admin/Position.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
