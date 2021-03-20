import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router.js";

import BaseCard from "./components/baseCard.vue";

const app = createApp(App);

// app.use(router);
app.component("baseCard", BaseCard);

app.mount("#app");
