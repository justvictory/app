<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ name }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("king");

    return {
      name,
    };
  },
});
</script>
