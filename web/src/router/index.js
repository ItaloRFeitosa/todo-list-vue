import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../views/Tasks.vue";
import AllTasks from "../components/AllTasks.vue";
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
    component: Tasks,
    children: [
      {
        path: "all",
        name: "all-tasks",
        component: AllTasks
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
