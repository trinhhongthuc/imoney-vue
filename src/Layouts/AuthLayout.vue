<template>
  <header-auth />
  <slot />
</template>

<script>
import HeaderAuth from "@/components/headerAuth/HeaderAuth.vue";

export default {
  components: {
    HeaderAuth,
  },
};
</script>
