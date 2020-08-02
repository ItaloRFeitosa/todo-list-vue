<template>
  <div class="add-task-modal">
    <button>Add a new task</button>
  </div>
</template>

<script>
export default {
  name: "add-task"
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
}
</style>
