<template>
  <div class="bg-while p-3 flex w-full rounded-md">
    <div
      class="w-[50px] h-[50px] rounded-md"
      :class="{
        'bg-blue-200': transaction.category === 'payment',
        'bg-yellow-200': transaction.category === 'withdrawal',
        'bg-green-200': transaction.category === 'education',
      }"
    ></div>
    <div class="flex items-between pl-2 flex-col">
      <h2 class="font-bold text-gray-700">{{ transaction.note }}</h2>
      <p class="text-[400] text-[13px] text-gray-500">
        {{ transaction.location }}
      </p>
    </div>
    <div class="flex flex-col items-between ml-auto">
      <h2 class="text-red-400 font-bold">{{ transaction.price }}</h2>
      <p class="text-[400] text-[13px] text-gray-500">{{ date }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    transaction: {
      type: Object,
      require: true,
    },
  },

  setup() {
    const date = moment(new Date()).format("MMM Do YY");

    return { date };
  },
};
</script>
