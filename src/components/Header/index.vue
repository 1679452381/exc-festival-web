<template>
  <div class="app">
    <img src="../../assets/images/banner.b8061eae.jpg" />
    <el-menu
      @select="handleSelect"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#0076ee"
      text-color="#FCEB8F"
      active-text-color="white"
    >
      <el-submenu
        class="submenu"
        :index="menu.channelId + ''"
        v-for="menu in menuList"
        :key="menu.channelId"
      >
        <template slot="title">
          <span>{{ menu.channelName }}</span>
        </template>
        <mutli-menu :dropDownData="menu.children"></mutli-menu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Submenu from "../Submenu/index.vue";
import { getMenus } from "@/api/menus";

export default {
  name: "gd-header",
  components: {
    "mutli-menu": Submenu,
  },
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { result: menuList } = await getMenus();
      this.menuList = menuList;
    },
    handleSelect(key) {
      this.$bus.$emit("meunsChange", key);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.el-menu {
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submenu {
  color: gray;
  background-color: white;
}
</style>
