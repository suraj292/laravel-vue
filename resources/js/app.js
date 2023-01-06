import './bootstrap';

import {createApp} from "vue";

import App from "./App.vue";

import router from "./router.js";

// import  Store from "./connection/store.js";
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app")


