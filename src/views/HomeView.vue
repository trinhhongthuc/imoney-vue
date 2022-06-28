<template>
  <div class="home">This is page home</div>
  <p>{{ user }}</p>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return { user: computed(() => store.state.user) };
  },
};
</script>
