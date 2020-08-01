import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../views/Tasks.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/:name/tasks",
    name: "tasks",
    component: Tasks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
