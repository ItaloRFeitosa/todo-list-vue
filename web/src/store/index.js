import Vue from "vue";
import Vuex from "vuex";

import { setTasks, getTasks } from "../services/tasks.mock.api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },

    notDoneTasksCount(state) {
      return state.tasks.filter(task => !task.done).length;
    },

    doneTasks(state) {
      return state.tasks.filter(task => task.done);
    },

    notDoneTasks(state) {
      return state.tasks.filter(task => !task.done);
    }
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    toggleDoneTask({ commit, state }, id) {
      const tasks = [...state.tasks];
      const toggledTask = tasks.find(task => task.id === id);
      toggledTask.done = !toggledTask.done;
      setTasks(tasks);
      commit("updateTasks", tasks);
    },

    addTask({ commit, state }, task) {
      const updatedTasks = [...state.tasks, task];
      setTasks(updatedTasks);
      commit("updateTasks", updatedTasks);
    },

    getTasksFromStorage({ commit }) {
      const tasks = getTasks();
      commit("updateTasks", tasks);
    }
  },
  modules: {}
});
