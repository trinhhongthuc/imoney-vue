<template>
  <div class="container">
    <div class="row fixed bottom-0 left-0 right-0 w-full h-14 px-8 bg-while">
      <ul class="flex justify-between h-full items-center">
        <li v-for="menuItem in bottomMenu" :key="menuItem.icon">
          <router-link :to="{ name: menuItem.pathName, params: {} }">
            <img class="h-4 w-4" :src="menuItem.icon" alt="menuItem.icon" />
          </router-link>
        </li>
      </ul>

      <router-link
        :to="{ name: 'Home', params: {} }"
        class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-primary rounded-full text-while cursor-pointer"
      >
        <i class="fa-solid fa-plus text-2xl"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/assets/images/slack-brands.svg";
import Chart from "@/assets/images/chart-column-solid.svg";
import Bar from "@/assets/images/bars-staggered-solid.svg";
import User from "@/assets/images/user-solid.svg";
import Plus from "@/assets/images/plus-solid.svg";

import { reactive } from "vue";

export default {
  setup() {
    const bottomMenu = reactive([
      {
        icon: Dashboard,
        pathName: "Home",
      },
      {
        icon: Chart,
        pathName: "Home",
      },
      {
        icon: Bar,
        pathName: "Home",
      },
      {
        icon: User,
        pathName: "Home",
      },
    ]);

    return {
      bottomMenu,
      Plus,
    };
  },
};
</script>

<style scoped>
li:nth-child(2) {
  margin-right: 10%;
}
li:nth-child(3) {
  margin-left: 10%;
}
</style>
