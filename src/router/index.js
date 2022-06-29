import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const validateUser = (to, from, next) => {
  if (window.localStorage.getItem("user")) next({ name: "Home", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "defaultLayout",
    },
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
    beforeEnter: validateUser,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    meta: {
      layout: "authLayout",
    },
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUp.vue"),
    beforeEnter: validateUser,
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: "defaultLayout",
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    meta: {
      layout: "defaultLayout",
    },
    component: () =>
      import(/* webpackChunkName: "setting" */ "../views/SettingView.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "defaultLayout",
    },
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      layout: "defaultLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "new-transaction" */ "../views/NewTransactionView.vue"
      ),
  },
  {
    path: "/select-category",
    name: "SelectCategory",
    meta: {
      layout: "defaultLayout",
    },
    component: () =>
      import(
        /* webpackChunkName: "select-category" */ "../views/SelectCategoryView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
