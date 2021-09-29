import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Productos from "@/views/Productos.vue";
import Nosotros from "@/views/Nosotros.vue";
import Producto from "@/views/Producto.vue";
import Error from "@/views/Error.vue";
import Index from "@/views/admin/Index.vue";
import Create from "@/views/admin/Create.vue";
import Edit from "@/views/admin/Edit.vue";
import Show from "@/views/admin/Show.vue";

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

  // {
  //   path: "/producto",
  //   name: "producto",
  //   component: Producto,
  // },

  {
    path: "/productos/:slug",
    name: "producto",
    component: Producto,
  },

  {
    path: "*",
    name: "error",
    component: Error,
  },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
