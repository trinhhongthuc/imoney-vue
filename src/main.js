import "@/assets/style/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import defineLayout from "./defineLayout";
import router from "./router";
import store from "./store/store";

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

const app = createApp(App);
defineLayout(app);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount("#app");
