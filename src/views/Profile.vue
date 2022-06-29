<template>
  <div class="container mx-auto mt-10">
    <div class="row">
      <div class="px-8 flex flex-col items-center">
        <div class="h-20 w-20 rounded-full overflow-hidden">
          <img
            class="h-full w-full"
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/91175558_111679750483951_8395185295737225216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m7rSAMsscWkAX_m_qTx&tn=akbT7FKmgl5WNsaU&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-nwQBf8ekgt0dMcH85gjhJbVviiAub8WqWi-um7Vz1DQ&oe=62DFBD66"
            alt="this is avaatr"
          />
        </div>
        <h2 class="font-bold text-xl title mt-1">{{ user.fullName }}</h2>
        <p class="text-center text-sm text-gray-400 mt-1 font-bold">
          {{ user.email }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="girl grid-col-1 px-8">
        <ul>
          <li class="w-full" v-for="menuItem in dataMenu" :key="menuItem.name">
            <router-link
              :to="{ name: menuItem.path, params: {} }"
              class="py-3 flex justify-between cursor-pointer w-full"
            >
              <div class="flex items-center text-gray-700">
                <img class="w-4 h-4" :src="menuItem.src" alt="" />
                <span class="ml-2"> {{ menuItem.name }} </span>
              </div>
              <div class="flex items-center">
                <img class="w-4 h-4" :src="chevron" alt="" />
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import chevron from "@/assets/images/chevron-right-solid.svg";
import { DataMenuProfile } from "@/constants/index";
import { reactive } from "vue";

export default {
  name: "ProfilePage",
  setup() {
    const dataMenu = reactive(DataMenuProfile);
    const user = JSON.parse(window.localStorage.getItem("user"));

    return {
      chevron,
      dataMenu,
      user,
    };
  },
};
</script>

<style scoped>
.title {
  color: var(--color-primary);
}
</style>
