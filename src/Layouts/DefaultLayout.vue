<template>
  <header-nav :title="title" :action="action" />
  <slot />
  <footer-nav />
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import FooterNav from "@/components/FooterNav/FooterNav.vue";
import setting from "@/assets/images/gear-solid.svg";
import filter from "@/assets/images/filter-solid.svg";

import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    HeaderNav,
    FooterNav,
  },
  setup() {
    const router = useRouter();
    const title = ref("");
    const action = reactive({
      type: "",
      text: "",
      pathName: "",
    });

    const checkTitleAndAction = () => {
      switch (router.currentRoute.value.name) {
        case "Profile":
          title.value = "My Profile";
          action.type = "icon";
          action.text = setting;
          action.pathName = "Setting";
          return;

        case "NewTransaction":
          title.value = "Add Transaction";
          action.type = "button";
          action.text = "Add";
          action.pathName = "Home";
          return;

        case "SelectCategory":
          title.value = "Select Category";
          action.type = "button";
          action.text = "Cancel";
          action.pathName = "Home";
          return;

        case "Home":
          title.value = "My Report";
          action.type = "icon";
          action.text = filter;
          action.pathName = "Home";
          return;

        default:
          break;
      }
    };

    checkTitleAndAction();
    return {
      title,
      action,
    };
  },
};
</script>
