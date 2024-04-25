import { createApp } from "vue";

import { createPinia } from "pinia";
import router from "./router";

import naive from "naive-ui";

import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);

app.mount("#app");
