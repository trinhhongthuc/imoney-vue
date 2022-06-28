import { defineAsyncComponent } from "vue";

const defineLayout = (app) => {
  app.component(
    "defaultLayout",
    defineAsyncComponent(() => import("@/Layouts/DefaultLayout.vue"))
  ),
    app.component(
      "authLayout",
      defineAsyncComponent(() => import("@/Layouts/AuthLayout.vue"))
    );
};

export default defineLayout;
