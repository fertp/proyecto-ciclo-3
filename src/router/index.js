import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
// import Productos from "@/views/Productos.vue";
// import Nosotros from "@/views/Nosotros.vue";
// import Producto from "@/views/Producto.vue";
// import Categoria from "@/views/Categoria.vue";
// import Error from "@/views/Error.vue";
// import Login from "@/views/login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/productos",
    name: "productos",
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue'),
  },

  {
    path: "/nosotros",
    name: "nosotros",
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue'),
  },

  {
    path: "/productos/:slug",
    name: "producto",
    component: () => import(/* webpackChunkName: "producto" */ '../views/Producto.vue'),
  },

  {
    path: "/categoria/:slug",
    name: "categoria",
    component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
  },
  
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
  },

  {
    path: "*",
    name: "error",
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
