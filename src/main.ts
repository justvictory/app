import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./assets/tailwind.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(i18n).use(router).mount("#app");
