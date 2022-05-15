import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 15 }),
  getters: {
    double(): number {
      return this.count * 3;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
