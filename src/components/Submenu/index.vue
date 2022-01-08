<template>
  <div class="menu-container">
    <template v-for="(item, index) in dropDownData">
      <el-submenu
        :key="index"
        v-if="item.children && item.children.length > 0"
        :index="item.channelId + ''"
      >
        <template slot="title">
          <span>{{ item.channelName }}</span>
        </template>
        <multi-menu :dropDownData="item.children"></multi-menu>
      </el-submenu>
      <el-menu-item v-else :key="index" :index="item.channelId + ''">
        {{ item.channelName }}</el-menu-item
      >
    </template>
  </div>
</template>

<script>
export default {
  name: "multi-menu",
  props: ["dropDownData"],
};
</script>

<style></style>
