<template>
  <div class="add-task-container">
    <div v-if="modalIsShown" class="add-task-modal">
      <div class="modal">
        <header>
          <h2>Add Task</h2>
          <v-icon v-on:click="toggleModal" name="times" />
        </header>
        <form>
          <input v-model="title" type="text" placeholder="Title of the Task" />
          <textarea
            v-model="description"
            type="text"
            rows="5"
            placeholder="Type task details"
          />
          <input v-model="date" type="datetime-local" placeholder="Your Name" />
        </form>
        <button v-on:click="addTask">Add task</button>
      </div>
    </div>
    <button v-on:click="toggleModal">
      <v-icon name="plus" scale="0.9" />Add a new task
    </button>
  </div>
</template>

<script>
import "vue-awesome/icons/times";
import "vue-awesome/icons/plus";
import { v4 as uuid } from "uuid";

import Icon from "vue-awesome/components/Icon";

export default {
  name: "add-task",
  data: () => ({
    modalIsShown: false,
    title: "",
    date: "",
    description: ""
  }),

  components: {
    "v-icon": Icon
  },
  methods: {
    toggleModal() {
      this.modalIsShown = !this.modalIsShown;
    },

    addTask() {
      const newTask = {
        id: uuid(),
        title: this.title,
        description: this.description,
        date: new Date(this.date),
        done: false
      };

      this.$store.dispatch("addTask", newTask);
      this.toggleModal();
    }
  },

  watch: {
    modalIsShown() {
      this.title = "";
      this.date = "";
      this.description = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$base-color: #9c38ff;
$light-color: #e4ccfc;
$gray: #aaa;
$lightest-color: #f9f4fe;
$background: #fbfbfb;
.add-task-container {
  svg {
    color: $base-color;
    cursor: pointer;
  }

  > button {
    position: fixed;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);

    svg {
      margin-right: 8px;
    }
  }

  .add-task-modal {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #00000022;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    div.modal {
      width: min(500px, 100%);
      background-color: $background;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 24px;

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;

        h2 {
          color: $base-color;
        }
      }

      textarea,
      input {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
