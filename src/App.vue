<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <ProgressIndicator />
    <div id="app">
      <div class="demo-heading">
        <span>#</span> Vue.js Scroll Indicator Demo
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import ProgressIndicator from "@/components/ProgressIndicator";
export default {
  components: {
    ProgressIndicator
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
