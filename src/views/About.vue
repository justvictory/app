<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4 class="text-6xl">{{ name }}</h4>
    <h5 class="text-4xl">{{ $t("name") }}</h5>
    <img src="../assets/chain-eth.svg" class="h-20" />
    <div>count: {{ count }}</div>
    <div>double: {{ double }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store";

export default defineComponent({
  setup() {
    const name = ref("king");

    const { count, double } = useCounterStore();

    return {
      name,
      count,
      double,
    };
  },
});
</script>
