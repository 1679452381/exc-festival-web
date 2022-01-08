<template>
  <div>
    <el-container>
      <el-header>
        <gd-header></gd-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="footer">
        <gd-footer></gd-footer>
      </el-footer>
    </el-container>
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

<style scoped>
.el-header {
  padding: 0;
  height: 356px;
}
.footer {
}
</style>
