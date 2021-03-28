import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseCard from "./components/baseCard.vue";

// import { rtdbPlugin } from "vuefire";

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(rtdbPlugin);

app.component("baseCard", BaseCard);

app.mount("#app");
