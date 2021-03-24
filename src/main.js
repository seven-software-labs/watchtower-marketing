import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import "./assets/app.css";
import RegisterComponents from "./register-components";
const app = createApp(App);

RegisterComponents(app);

app.config.globalProperties.$url = (path = "") => (import.meta.env.VITE_APP_URL + "/" + path);

app.use(Router);
app.mount("#app");
