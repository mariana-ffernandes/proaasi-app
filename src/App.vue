<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
