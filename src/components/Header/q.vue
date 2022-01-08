<template>
  <el-menu
    background-color="#66CCCC"
    text-color="#fff"
    active-text-color="#CCFF99"
    unique-opened
    :collapse-transition="false"
    :collapse="isCollapse"
    router
    :default-active="this.$route.path"
  >
    <!-- :default-active="activePath" -->
    <!-- 一级菜单 -->
    <!-- 数值转化为字符串 加 空字符串   -->
    <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
      <template slot="title">
        <span>{{ item.authName }}</span>
      </template>
      <!-- 二级菜单 -->
      <!-- :index="item.id + ''" 改为:index="'/'+item.path" -->
      <el-menu-item
        :index="'/' + submenu.path"
        v-for="submenu in item.children"
        :key="submenu.id"
        @click="saveNavState('/' + submenu.path)"
      >
        <span>{{ submenu.authName }}</span></el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style></style>
