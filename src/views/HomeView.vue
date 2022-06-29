<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="mx-8">
        <LineChart
          :chart-data="data"
          :options="options"
          css-classes="chart-container"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { LineChart } from "vue-chart-3";
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

const dataValues = ref([4, 3, 5, 7]);

const data = computed(() => ({
  labels: ["Jun", "Jul", "Aug", "Sep"],

  datasets: [
    {
      label: "Foo",
      data: dataValues.value,
      backgroundColor: "#dc322f",
    },
  ],
}));

const options = ref({
  plugins: {
    title: {
      text: "Line",
    },
  },
});
</script>
