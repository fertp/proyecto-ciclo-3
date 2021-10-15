import Vue from "vue";
import decode from "jwt-decode";
import VueRouter from "vue-router";

import Index from "@/views/admin/Index.vue";

import ProductIndex from "@/views/admin/products/Index.vue";
import Create from "@/views/admin/products/Create.vue";
import Edit from "@/views/admin/products/Edit.vue";
import Show from "@/views/admin/products/Show.vue";
import Login from "@/views/admin/login/Login.vue";

import Imagen from "@/views/admin/Image.vue";

import CategoriasIndex from "@/views/admin/categories/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: Index,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/productos/",
    name: "productsIndex",
    component: ProductIndex,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/productos/create",
    name: "productsCreate",
    component: Create,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/productos/edit/:id",
    name: "productsEdit",
    component: Edit,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/productos/show/:id",
    name: "productsShow",
    component: Show,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/categorias",
    name: "categorias",
    component: CategoriasIndex,
    meta: { requiresAuth: true },
  },

  {
    path: "/admin/image",
    name: "image",
    component: Imagen,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/login",
    name: "login",
    component: Login,
  },

  {
    path: "/admin/*",
    name: "error",
    component: Error,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = decode(localStorage.getItem("token"));
    if (!token) {
      this.$router.push({ name: "login" });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
