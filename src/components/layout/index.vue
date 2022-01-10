<template>
  <div>
    <gd-header></gd-header>
    <router-view />
    <gd-footer></gd-footer>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
export default {
  components: {
    "gd-header": Header,
    "gd-footer": Footer,
  },
};
</script>

<style scoped></style>
