import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Productos from "@/views/Productos.vue";
import Nosotros from "@/views/Nosotros.vue";
import Producto from "@/views/Producto.vue";
import Categoria from "@/views/Categoria.vue";
import Error from "@/views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/productos",
    name: "productos",
    component: Productos,
  },

  {
    path: "/nosotros",
    name: "nosotros",
    component: Nosotros,
  },

  {
    path: "/productos/:slug",
    name: "producto",
    component: Producto,
  },

  {
    path: "/categoria/:slug",
    name: "categoria",
    component: Categoria,
  },

  {
    path: "*",
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
