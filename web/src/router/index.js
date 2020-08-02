import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../views/Tasks.vue";
import AllTasks from "../components/AllTasks.vue";
import DoneTasks from "../components/DoneTasks.vue";
import NotDoneTasks from "../components/NotDoneTasks.vue";
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
      },
      {
        path: "done",
        name: "done-tasks",
        component: DoneTasks
      },
      {
        path: "not-done",
        name: "not-done-tasks",
        component: NotDoneTasks
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
