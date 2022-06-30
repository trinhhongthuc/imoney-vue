<template>
  <div class="container mx-auto overflow-auto mb-[56px]">
    <div class="row mx-8 flex items-center justify-start mb-3">
      <div
        class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] mr-2 cursor-pointer"
        :class="{
          'text-primary': activeNow === 'week',
          'pointer-events-none': activeNow === 'week',
        }"
        @click="onChangeTimeLine('week')"
      >
        Week
      </div>
      <div
        class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] mr-2 cursor-pointer"
        :class="{
          'text-primary': activeNow === 'month',
          'pointer-events-none': activeNow === 'month',
        }"
        @click="onChangeTimeLine('month')"
      >
        Month
      </div>
      <div
        class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] cursor-pointer"
        :class="{
          'text-primary': activeNow === 'year',
          'pointer-events-none': activeNow === 'year',
        }"
        @click="onChangeTimeLine('year')"
      >
        Year
      </div>
    </div>
    <div class="row">
      <div class="mx-8">
        <LineChart
          :chart-data="data"
          :options="options"
          css-classes="chart-container"
        />
      </div>
    </div>

    <div class="container mx-auto">
      <div class="row mx-8 flex items-center justify-start mb-3 mt-3">
        <h3 class="text-primary font-bold block">Detail Transaction</h3>
      </div>

      <div class="row mx-8 flex items-center justify-start mb-3">
        <div
          class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] mr-2 cursor-pointer"
          :class="{
            'text-primary': activeTransactionDetail === 'all',
            'pointer-events-none': activeTransactionDetail === 'all',
          }"
          @click="onChangeDetailTransaction('all')"
        >
          All
        </div>
        <div
          class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] mr-2 cursor-pointer"
          :class="{
            'text-primary': activeTransactionDetail === 'payment',
            'pointer-events-none': activeTransactionDetail === 'payment',
          }"
          @click="onChangeDetailTransaction('payment')"
        >
          Payment
        </div>
        <div
          class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] cursor-pointer"
          :class="{
            'text-primary': activeTransactionDetail === 'withdrawal',
            'pointer-events-none': activeTransactionDetail === 'withdrawal',
          }"
          @click="onChangeDetailTransaction('withdrawal')"
        >
          Withdrawal
        </div>
        <div
          class="px-2 py-1 rounded-[5px] font-[500] bg-white text-[14px] cursor-pointer"
          :class="{
            'text-primary': activeTransactionDetail === 'education',
            'pointer-events-none': activeTransactionDetail === 'education',
          }"
          @click="onChangeDetailTransaction('education')"
        >
          Education
        </div>
      </div>
      <div class="row">
        <div class="grid grid-cols-1 mx-3">
          <div
            class="w-full mb-3"
            v-for="transaction in dataTransaction"
            :key="transaction.category"
          >
            <transaction-item :transaction="transaction" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { LineChart } from "vue-chart-3";
import { useStore } from "vuex";

import TransactionItem from "@/components/TransactionItem/TransactionItem.vue";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const store = useStore();
let dataValues = reactive([]);
let transactionListData = reactive([]);

const activeNow = ref("week");
const activeTransactionDetail = ref("all");

const data = computed(() => {
  switch (activeNow.value) {
    case "week":
      dataValues = [6, 5, 7, 5];
      return {
        labels: ["week-1", "week-3", "week-3", "week-4"],

        datasets: [
          {
            label: "Foo",
            data: dataValues,
            backgroundColor: "#dc322f",
          },
        ],
      };

    case "month":
      dataValues = [8, 6, 3, 6];

      return {
        labels: ["Jun", "Jul", "Aug", "Sep"],

        datasets: [
          {
            label: "Foo",
            data: dataValues,
            backgroundColor: "#dc322f",
          },
        ],
      };

    case "year":
      dataValues = [3, 2, 1, 4];

      return {
        labels: ["Jun", "Jul", "Aug", "Sep"],

        datasets: [
          {
            label: "Foo",
            data: dataValues,
            backgroundColor: "#dc322f",
          },
        ],
      };

    default:
      return {
        labels: [],
        datasets: [
          {
            label: "Foo",
            data: dataValues,
            backgroundColor: "#dc322f",
          },
        ],
      };
  }
});

const dataTransaction = computed(() => {
  switch (activeTransactionDetail.value) {
    case "all":
      transactionListData = store.state.transaction.transactionList;
      return transactionListData;
    case "payment":
      return (transactionListData = store.getters.filterDataPayment);
    case "withdrawal":
      return (transactionListData = store.getters.filterDataWithdrawal);

    case "education":
      return (transactionListData = store.getters.filterDataEducation);

    default:
      return [];
  }
});

const options = ref({
  plugins: {
    title: {
      text: "Line",
    },
  },
});

const onChangeTimeLine = (time) => {
  activeNow.value = time;
};

const onChangeDetailTransaction = (transaction) => {
  activeTransactionDetail.value = transaction;
};
</script>
