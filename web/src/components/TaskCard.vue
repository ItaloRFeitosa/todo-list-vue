<template>
  <div class="card-task-container">
    <div class="task-details">
      <h4>{{ task.title }}</h4>

      <span>Due {{ formatDate }}</span>
    </div>

    <div
      v-if="!task.done"
      class="done-circle"
      v-on:click="() => toggleDoneTasks(task.id)"
    />
    <div v-else class="done-circle" v-on:click="() => toggleDoneTasks(task.id)">
      <v-icon name="check-circle" />
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/check-circle";

import Icon from "vue-awesome/components/Icon";

function formatTimeUnit(val) {
  return String(val).length === 1 ? `0${val}` : `${val}`;
}

function nameOfWeekDay(index) {
  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return weekNames[index];
}

export default {
  name: "task-card",

  props: {
    task: Object
  },
  components: {
    "v-icon": Icon
  },
  computed: {
    formatDate() {
      const date = new Date(this.task.date);
      const hour = formatTimeUnit(date.getHours());
      const min = formatTimeUnit(date.getMinutes());
      const day = formatTimeUnit(date.getDate());
      const month = formatTimeUnit(date.getMonth() + 1);
      const dayOfWeek = date.getDay();
      return `${nameOfWeekDay(dayOfWeek)} ${day}/${month} ${hour}:${min}`;
    }
  },

  methods: {
    toggleDoneTasks(id) {
      this.$store.dispatch("toggleDoneTask", id);
    }
  }
};
</script>

<style lang="scss" scoped>
$base-color: #9c38ff;
$light-color: #e4ccfc;
$lightest-color: #f9f4fe;
$background: #fbfbfb;
$gray: #aaa;

.card-task-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 8px 0;
  .task-details {
    display: flex;
    flex-direction: column;
    h4 {
      font-weight: bold;
      color: $base-color;
      margin-bottom: 4px;
    }
    span {
      color: $gray;
      font-size: 14px;
    }
  }

  .done-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    border: 2px solid $base-color;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      color: $base-color;
    }
  }
}
</style>
