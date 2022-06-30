<template>
  <header-nav :valuesHeader="valuesHeader" />
  <slot />
  <footer-nav />
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import FooterNav from "@/components/FooterNav/FooterNav.vue";
import setting from "@/assets/images/gear-solid.svg";
import filter from "@/assets/images/filter-solid.svg";

import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    HeaderNav,
    FooterNav,
  },
  setup() {
    const router = useRouter();
    let action = reactive({
      type: "",
      text: "",
      pathName: "",
      title: "",
    });

    const valuesHeader = computed(() => {
      switch (router.currentRoute.value.name) {
        case "Profile":
          action = {
            title: "My Profile",
            type: "icon",
            text: setting,
            pathName: "Setting",
          };

          return action;

        case "NewTransaction":
          action = {
            title: "Add Transaction",
            type: "button",
            text: "Add",
            pathName: "Home",
          };

          return action;

        case "SelectCategory":
          action = {
            title: "Select Category",
            type: "button",
            text: "Cancel",
            pathName: "Home",
          };

          return action;

        case "Home":
          action = {
            title: "My Report",
            type: "icon",
            text: filter,
            pathName: "Home",
          };

          return action;

        default:
          return { type: "", text: "", pathName: "", title: "" };
      }
    });

    return {
      valuesHeader,
    };
  },
};
</script>
