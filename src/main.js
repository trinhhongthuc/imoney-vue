import "@/assets/style/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import defineLayout from "./defineLayout";
import router from "./router";
import store from "./store/store";

const app = createApp(App);
defineLayout(app);

app.use(store);
app.use(router);
app.mount("#app");
