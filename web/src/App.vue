<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
$base-color: #9c38ff;
$light-color: #e4ccfc;
$lightest-color: #f9f4fe;
$background: #fbfbfb;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background;
  padding: 16px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  padding: 16px;
  border-radius: 32px;
  width: max-content;
  background-color: $light-color;
  color: $base-color;
  border: none;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  outline: none;
  align-items: center;
  cursor: pointer;
}

textarea,
input {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid $light-color;
  width: 100%;
  color: $base-color;
  outline: none;
  font-weight: bold;
  transition: 0.4s linear;
  background: transparent;
  &:focus {
    border-bottom: 1px solid $base-color;
  }
  &::placeholder {
    color: $light-color;
  }
}

textarea {
  resize: none;
}
</style>
