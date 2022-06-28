<template>
  <div class="container mx-auto">
    <form action="" @submit.prevent="onSubmit">
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
          class="w-full text-center bg-primary py-2 rounded-lg text-white font-bold"
        >
          {{ isPending ? "Loading..." : "Sign In" }}
        </button>
      </div>
    </form>
    <p v-if="err" class="block px-8 text-center w-full m-3 text-red-600">
      {{ err }}
    </p>

    <div>
      <p class="text-center mt-3">
        <span>I'am a new user.</span>
        <router-link :to="{ name: 'Register', params: {} }"
          ><span class="ml-1 font-bold text-primary cursor-pointer"
            >Sign Up</span
          ></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const err = ref("");
    const router = useRouter();
    const isPending = ref(false);

    const onSubmit = () => {
      isPending.value = true;
      const userDatabase = JSON.parse(window.localStorage.getItem("user"));
      if (
        userDatabase &&
        password.value === userDatabase.password &&
        email.value === userDatabase.email
      ) {
        isPending.value = false;
        router.push({ name: "Home", params: {} });
        return true;
      }

      isPending.value = false;
      err.value = "Email or password inCorrect!";
    };

    return { onSubmit, email, password, err, isPending };
  },
};
</script>
