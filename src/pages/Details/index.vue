<template>
  <div class="viewList"></div>
</template>

<script>
import { getArticleInfo } from "@/api/articles";

export default {
  data() {
    return {
      articleInfo: "",
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const { result: data } = await getArticleInfo(this.$route.params.id);
      this.articleInfo = data;
      console.log(data);
    },
  },
};
</script>

<style scoped>
.viewList {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  margin-top: 300px;
}
</style>
