import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/views/admin/Index.vue";
import Create from "@/views/admin/Create.vue";
import Edit from "@/views/admin/Edit.vue";
import Show from "@/views/admin/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "adminIndex",
    component: Index,
  },

  {
    path: "/admin/create",
    name: "adminCreate",
    component: Create,
  },

  {
    path: "/admin/edit/:id",
    name: "adminEdit",
    component: Edit,
  },

  {
    path: "/admin/show/:id",
    name: "adminShow",
    component: Show,
  },

  {
    path: "/admin/*",
    name: "error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
