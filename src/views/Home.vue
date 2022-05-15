<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ message }}</h1>
    <h4>firstName: {{ firstName }}</h4>
    <h4>lastName: {{ lastName }}</h4>
    <input type="text" v-model="message" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  message = "Hello King";

  firstName = "aaa";
  lastName = "bbb";

  say() {
    console.log("hello ...........");
  }

  created() {
    this.say();
  }
}
</script>
