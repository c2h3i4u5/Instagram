import { createRouter, createWebHistory } from "vue-router";
// import App from "./App.vue";
import header from "./components/header.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/homepage", component: header }],
});

export default router;
