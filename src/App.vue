<template>
  <div class="base">
    <the-header></the-header>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>9+
  </div>
</template>

<script>
import theHeader from "./components/header.vue";

export default {
  components: { theHeader },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-style: none;
}
.base {
  background-color: rgba(178, 178, 178, 0.135);
}
</style>
