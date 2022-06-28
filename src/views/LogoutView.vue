<template>
  <h1>Logout page...</h1>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const logout = () => {
      window.localStorage.clear();
      router.push({ name: "Register", params: {} });
    };
    logout();
  },
};
</script>
