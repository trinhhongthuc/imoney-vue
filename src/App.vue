<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
// import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();

    return {
      layout: computed(() =>
        router.currentRoute.value.meta.layout !== "undefined"
          ? router.currentRoute.value.meta.layout
          : "defaultLayout"
      ),
    };
  },
};
</script>
