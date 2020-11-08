<template>
  <main>
    <px-header></px-header>
    <px-details></px-details>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxDetails from "@/views/PxDetails";
export default {
  name: "App",
  components: {
    PxHeader,
    PxDetails,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
