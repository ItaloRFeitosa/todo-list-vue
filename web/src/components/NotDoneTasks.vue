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

  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    this.tasks = this.$store.getters.notDoneTasks;
  },
  updated() {
    this.tasks = this.$store.getters.notDoneTasks;
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-direction: column;
}
</style>
