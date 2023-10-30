
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
        path: "/resblood",
        name: "resblood",
        component: () => import("@/views/ReBlood.vue"),
        children: [
          {
            path: "",
            name: "welcome",
            component: () => import("@/views/reblood/welcome.vue"),
          },
          
          {
            path: "tap",
            name: "tap",
            component: () => import("@/views/reblood/tap.vue"),
          },
          {
            path: "medical",
            name: "medical",
            component: () => import("@/views/reblood/medical.vue"),
          },
          {
            path: "infor",
            name: "infor",
            component: () => import("@/views/reblood/infor.vue"),
          },

        ],
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
    name: "admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "",
        name: "awelcome",
        component: () => import("@/admin/AWelcome.vue"),
      },
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
      {
        path: "addposition",
        name: "addposition",
        component: () => import("@/admin/position/addposition.vue"),
      },
      {
        path: "editposition",
        name: "editposition",
        component: () => import("@/admin/position/editposition.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
