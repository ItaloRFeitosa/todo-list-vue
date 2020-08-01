<template>
  <div class="login-container">
    <div class="login-content">
      <h1>Welcome</h1>
      <h4>Please, tell me your name:</h4>
      <input v-model="name" type="text" placeholder="Your Name" />
      <button v-on:click="() => this.$router.push(`${name}/tasks`)">
        Let's Start <v-icon name="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/arrow-right";

import Icon from "vue-awesome/components/Icon";

export default {
  components: {
    "v-icon": Icon
  },

  data: () => ({
    name: ""
  })
};
</script>

<style lang="scss" scoped>
$base-color: #9c38ff;
$light-color: #e4ccfc;
$lightest-color: #f9f4fe;
$background: #fbfbfb;

.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $lightest-color;
    padding: 48px;
    border-radius: 8px;
    h1 {
      margin-bottom: 48px;
    }

    h4 {
      margin-bottom: 16px;
    }

    input {
      margin-bottom: 16px;
    }
  }
}
</style>
