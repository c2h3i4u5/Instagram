import { createRouter, createWebHistory } from "vue-router";
// import App from "./App.vue";
// import header from "./components/header.vue";
import loginPage from "./components/loginPage.vue";
import mainPage from "./components/mainPage.vue";
import registerPage from "./components/registerPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/register", component: registerPage },
    { path: "/homepage", component: mainPage },
    { path: "/login", component: loginPage },
  ],
});

export default router;
