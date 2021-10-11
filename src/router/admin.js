import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/views/admin/Index.vue";

import ProductIndex from "@/views/admin/products/Index.vue";
import Create from "@/views/admin/products/Create.vue";
import Edit from "@/views/admin/products/Edit.vue";
import Show from "@/views/admin/products/Show.vue";

import CategoriasIndex from "@/views/admin/categories/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: Index,
  },

  {
    path: "/admin/productos/",
    name: "productsIndex",
    component: ProductIndex,
  },

  {
    path: "/admin/productos/create",
    name: "productsCreate",
    component: Create,
  },

  {
    path: "/admin/productos/edit/:id",
    name: "productsEdit",
    component: Edit,
  },

  {
    path: "/admin/productos/show/:id",
    name: "productsShow",
    component: Show,
  },

  {
    path: "/admin/categorias",
    name: "categorias",
    component: CategoriasIndex,
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
