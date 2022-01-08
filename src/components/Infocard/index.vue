<template>
  <div class="info">
    <el-image
      v-if="imgurl.length !== 0"
      :src="imgurl[0].url"
      style="width: 288px; height: 160px"
      fit="fill"
    />

    <el-image
      v-else
      src="https://jxj.hndt.com/assets/img/default.23a8ecaa.png"
      style="width: 288px; height: 160px"
      fit="fill"
    />
    <div class="title">
      <span>{{ title | titleFilter }}</span>
    </div>
    <el-divider class="hr"></el-divider>
  </div>
</template>

<script>
import titleFilter from "@/filters/titleFilter";

export default {
  name: "gd-info",
  props: ["title", "imgurl"],
  filters: {
    titleFilter,
  },
  methods: {},
};
</script>

<style scoped>
.info {
  height: 235px;
  width: 288px;
  display: flex;
  flex-direction: column;
  margin: 0 0 35px 12px;
  cursor: pointer;
}
.title {
  height: 48px;
}
.hr {
  margin-top: 15px;
}
</style>
