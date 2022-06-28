<template>
  <div class="container mx-auto">
    <form action="" @submit.prevent="onSubmit">
      <label for="full-name" class="flex flex-col px-8 pt-4">
        <span class="text-base">Full Name</span>
        <input
          class="py-2 border border-gray-100 rounded-md pl-2 mt-3"
          type="text"
          name="input"
          id="full-name"
          placeholder="Full Name"
          v-model="fullName"
        />
      </label>

      <label for="email" class="flex flex-col px-8 pt-4">
        <span class="text-base">Email</span>
        <input
          class="py-2 border border-gray-100 rounded-md pl-2 mt-3"
          type="email"
          name="input"
          id="email"
          placeholder="Email"
          v-model="email"
        />
      </label>

      <label for="password" class="flex flex-col px-8 pt-4">
        <span class="text-base">Password</span>
        <input
          class="py-2 border border-gray-100 rounded-md pl-2 mt-3"
          type="password"
          name="input"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </label>

      <div class="px-8 pt-4">
        <button
          class="w-full text-center btn-primary py-2 rounded-lg text-white font-bold"
        >
          Sign Up
        </button>
      </div>
    </form>
    <p v-if="err" class="block px-8 text-center w-full m-3 text-red-600">
      {{ err }}
    </p>
    <div>
      <p class="text-center">
        <span>I'am already a member.</span>
        <router-link :to="{ name: 'SignUp', params: {} }"
          ><span class="ml-1 font-bold text-primary cursor-pointer"
            >Sign In</span
          ></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const err = ref("");
    const onSubmit = () => {
      if (!fullName.value || !email.value || !password.value) {
        err.value = "Please enter all field";
        return false;
      }

      store.dispatch("createNewAccount", {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
      });

      router.push({ name: "Home", params: {} });
    };

    return { onSubmit, fullName, email, password, err };
  },
};
</script>
