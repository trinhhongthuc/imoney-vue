<template>
  <form action="" @submit.prevent="onSubmit">
    <div class="bg-while">
      <div class="container px-8 mx-auto">
        <!-- Price -->
        <div class="row">
          <label for="" class="flex pb-3 pt-3">
            <div class="flex justify-end items-end pr-3 pb-3 w-12">
              <span
                class="border border-gray-300 p-1 rounded-md text-[12px] flex-none w-11 h-7 text-center"
              >
                USD
              </span>
            </div>

            <div class="flex flex-col flex-1 border-b border-gray-300">
              <span class="text-[12px]"> Total </span>
              <input
                type="text"
                class="outline-none text-md pb-3 text-[27px]"
                v-model="price"
              />
            </div>
          </label>
        </div>
        <!-- Category -->
        <div class="row">
          <label for="" class="flex pb-3">
            <div class="flex justify-end items-end pr-3 w-12">
              <span class="w-10 h-10 rounded-full bg-blue-500 flex-none">
              </span>
            </div>

            <div class="flex flex-col flex-1 border-b border-gray-300">
              <input
                type="text"
                class="outline-none text-md pb-1"
                placeholder="Select a category"
                v-model="category"
              />
            </div>
          </label>
        </div>
        <!-- note -->

        <div class="row">
          <label for="" class="flex pb-3">
            <div class="flex justify-end items-end pr-3 w-12">
              <span class="w-6 h-full flex justify-end items-center">
                <i class="far fa-calendar text-[18px] text-gray-600"></i>
              </span>
            </div>

            <div class="flex flex-col flex-1 border-b border-gray-300">
              <input
                type="text"
                class="outline-none text-md pb-[10px]"
                placeholder="Note..."
                v-model="note"
              />
            </div>
          </label>
        </div>

        <div class="row">
          <label for="" class="flex pb-3">
            <div class="flex justify-end items-end pr-3 w-12">
              <span class="w-6 h-full flex justify-end items-center">
                <i class="fas fa-wallet text-[18px] text-gray-600"></i>
              </span>
            </div>

            <div class="flex flex-col flex-1">
              <span> My Wallet </span>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- button more detail -->
    <div class="bg-while" v-if="!isShowMore">
      <div class="container px-8 mx-auto">
        <!-- Price -->
        <div class="row">
          <h5
            class="w-full text-center text-primary font-bold py-3 mt-3 cursor-pointer"
            @click="isShowMore = true"
          >
            More Detail
          </h5>
        </div>
      </div>
    </div>

    <template v-else>
      <div class="bg-while mt-6">
        <div class="container px-8 mx-auto">
          <div class="row">
            <label for="" class="flex pb-3 pt-3">
              <div class="flex justify-end items-end pr-3 w-12">
                <span class="w-6 h-full flex justify-end items-center">
                  <i class="fas fa-location-dot text-[18px] text-gray-600"></i>
                </span>
              </div>

              <div class="flex flex-col flex-1 border-b border-gray-300 pb-2">
                <input
                  type="text"
                  class="outline-none text-md w-full"
                  placeholder="Enter a location"
                  v-model="location"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="" class="flex pb-3 pt-3">
              <div class="flex justify-end items-end pr-3 w-12">
                <span class="w-6 h-full flex justify-end items-center">
                  <i
                    class="fas fa-user text-[18px] text-gray-600 ext-gray-600"
                  ></i>
                </span>
              </div>

              <div class="flex flex-col">
                <input
                  type="text"
                  class="outline-none text-md"
                  placeholder="Enter your friend"
                  v-model="friend"
                />
              </div>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-while mt-6">
        <div class="container px-8 pt-3 mx-auto">
          <div class="row">
            <label for="upload-photo" class="flex pb-3 cursor-pointer">
              <div class="flex justify-end items-end pr-3 w-12">
                <span class="w-6 h-full flex justify-end items-center">
                  <i class="fas fa-camera text-[18px] text-primary"></i>
                </span>
              </div>

              <div class="flex flex-col flex-1">
                <span class="text-primary font-bold" v-if="photo !== null">
                  {{
                    namePhoto.length > 50
                      ? namePhoto.slice(0, 50) + "..."
                      : namePhoto
                  }}
                </span>

                <span class="text-primary font-bold" v-else>
                  Upload photo
                </span>
                <input
                  type="file"
                  name=""
                  id="upload-photo"
                  class="absolute w-0 h-0 overflow-hidden"
                  @change="onChangeFile"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </template>

    <!-- button submit create transaction -->
    <div class="bg-while mt-3">
      <div class="container px-8 mx-auto">
        <!-- Price -->
        <div class="row">
          <button
            type="submit"
            class="w-full text-center text-white font-bold py-3 cursor-pointer bg-primary rounded-sm"
          >
            Create Transaction
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useCreateTransaction } from "@/utils/useCreateTransaction";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const { createTransaction } = useCreateTransaction();
    const isShowMore = ref(false);
    const price = ref(0);
    const category = ref("");
    const note = ref("");
    const location = ref("");
    const friend = ref("");
    const photo = ref(null);

    const namePhoto = computed(() => {
      if (photo.value) return photo.value.name;

      return "";
    });

    const onChangeFile = (event) => {
      const typeImage = ["image/png", "image/jpg", "image/jpeg"];

      if (typeImage.includes(event.target.files[0].type)) {
        photo.value = event.target.files[0];
      } else {
        alert("please enter photo valid!");
        photo.value = null;
      }

      console.log(photo.value.name);
    };

    const onSubmit = () => {
      if (!!price.value && !!category.value && !!note.value) {
        const data = {
          price: price.value,
          category: category.value,
          note: note.value,
          location: location.value,
          friend: friend.value,
          photo: photo.value,
        };

        const oldTransaction = JSON.parse(
          window.sessionStorage.getItem("transaction")
        );
        createTransaction(
          oldTransaction !== null ? oldTransaction : null,
          data
        );

        router.push({ name: "Home", params: {} });
      } else {
        alert("Please enter all filed");
      }
    };

    return {
      user: computed(() => store.state.user),
      isShowMore,
      photo,
      price,
      category,
      note,
      location,
      friend,
      onChangeFile,
      onSubmit,
      namePhoto,
    };
  },
};
</script>
