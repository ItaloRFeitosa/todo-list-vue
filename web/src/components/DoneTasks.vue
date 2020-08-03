<template>
  <div class="tasks">
    <task-card v-for="task in tasks" v-bind:key="task.id" v-bind:task="task" />
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "all-tasks",
  components: {
    TaskCard
  },

  computed: {
    tasks() {
      return this.$store.getters.doneTasks;
    }
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-direction: column;
}
</style>
