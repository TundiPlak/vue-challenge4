<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;

  font: sans-serif;
}

html {
  font-family: "Yusei Magic", sans-serif;
}
</style>
