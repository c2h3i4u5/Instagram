<template>
  <div class="base">
    <!-- <main-page></main-page> -->
    <login-page></login-page>
  </div>
</template>

<script>
// import mainPage from "./components/mainPage.vue";
import loginPage from "./components/loginPage.vue";

export default {
  components: { loginPage },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-style: none;
}
</style>
