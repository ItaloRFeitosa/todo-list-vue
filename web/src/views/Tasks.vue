<template>
  <div class="tasks-container">
    <header>
      <h1>Hey, {{ $route.params.name }}</h1>
      <h4>
        You have
        <strong>{{ notDoneTasksCount }} tasks</strong> to complete
      </h4>
      <div class="tabs">
        <h4
          v-bind:class="{ selected: checkPathName('all-tasks') }"
          v-on:click="() => setRoute('all-tasks')"
        >
          All
        </h4>
        <h4
          v-bind:class="{ selected: checkPathName('not-done-tasks') }"
          v-on:click="() => setRoute('not-done-tasks')"
        >
          Not Completed
        </h4>
        <h4
          v-bind:class="{ selected: checkPathName('done-tasks') }"
          v-on:click="() => setRoute('done-tasks')"
        >
          Completed
        </h4>
      </div>
    </header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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

  data() {
    return {
      tasks: []
    };
  },

  methods: {
    setRoute(routeName) {
      console.log(routeName);
      this.$router.push({ name: routeName });
    },

    checkPathName(routeName) {
      return routeName === this.$route.name;
    }
  },

  mounted() {
    this.$store.dispatch("getTasksFromStorage");
  },

  computed: {
    notDoneTasksCount() {
      return this.$store.getters.notDoneTasksCount;
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

.tasks-container {
  position: relative;
  display: flex;
  flex-direction: column;
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
        transition: color 0.2s linear;
        cursor: pointer;
        &.selected {
          color: $base-color;
          border-bottom: 2px solid $base-color;
        }
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.8s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
