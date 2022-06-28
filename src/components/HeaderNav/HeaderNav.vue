<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="flex items-center justify-between px-8 py-6">
        <h4
          class="flex items-center justify-start select-none font-bold font-medium"
        >
          {{ title }}
        </h4>
        <router-link :to="action.pathName" class="cursor-pointer">
          <img
            v-if="action.type === 'icon'"
            :src="action.text"
            class="h-4 w-4"
            alt=""
          />
          <h6 class="font-sm font-bold" v-else>
            {{ action.text }}
          </h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import setting from "@/assets/images/gear-solid.svg";

export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    action: {
      type: Object,
      require: true,
    },
  },
  setup() {
    return {
      setting,
    };
  },
};
</script>
