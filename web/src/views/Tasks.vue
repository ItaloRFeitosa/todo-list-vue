<template>
  <div class="tasks-container">
    <header>
      <h1>Hey, {{ $route.params.name }}</h1>
      <h4>
        You have
        <strong>7 tasks</strong> to complete
      </h4>
      <div class="tabs">
        <h4 class="selected">All</h4>
        <h4>Not Completed</h4>
        <h4>Completed</h4>
      </div>
    </header>
    <div class="tasks"></div>
    <add-task />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTask from "@/components/AddTask.vue";
export default {
  name: "tasks",
  components: {
    AddTask
  },
  mounted() {
    console.log(this.$store.state.tasks[0]);
  }
};
</script>

<style lang="scss" scoped>
$base-color: #9c38ff;
$light-color: #e4ccfc;
$gray: #aaa;
$lightest-color: #f9f4fe;
$background: #fbfbfb;

.tasks-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: min(500px, 100%);
  header {
    width: 100%;
    h1 {
      margin-bottom: 8px;
    }
    h4 {
      color: $gray;
      margin-bottom: 16px;
      strong {
        color: $base-color;
      }
    }

    .tabs {
      display: flex;
      h4 {
        margin-right: 16px;
        padding: 4px 0;
        &.selected {
          color: $base-color;
          border-bottom: 2px solid $base-color;
        }
      }
    }
  }
}
</style>
