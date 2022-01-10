<template>
  <div class="viewList">
    <div class="info_left">
      <h1>{{ articleInfo.articleTitle }}</h1>
      <div class="media">
        <video
          v-if="mediaUrl !== ''"
          :src="mediaUrl"
          style="width: 100%; height: 100%"
          controls="controls"
        ></video>
        <el-image
          v-else
          :src="imageUrl"
          :onerror="errImage"
          style="width: 100%; height: 100%"
          fit="fill"
        />
      </div>
      <div class="contentBody" v-html="articleInfo.contentBody"></div>
    </div>
    <div class="info_right">
      <p>>应用理论</p>
      <div class="card card_info">
        <span>推荐意见</span>
        <el-divider></el-divider>
        {{ articleInfo.summary }}
      </div>
      <div class="card card_author">
        <div class="name">部门: {{ articleInfo.articleOriginCode }}</div>
        <div class="name">主创: {{ authors }}</div>
        <div class="name">播出日期: {{ publishTime | DateFilter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleInfo } from "@/api/articles";
import DateFilter from "@/filters/DateFilter";

export default {
  data() {
    return {
      articleInfo: "",
      authors: "",
      mediaUrl: "",
      imageUrl: "",
      publishTime: "",
      errImage: 'this.src="' + require("@/assets/images/default.png") + '"',
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const { result: data } = await getArticleInfo(this.$route.params.id);
      this.articleInfo = data;
      this.publishTime = data.publishTime;
      if (data.coverImagesList.length !== 0) {
        this.imageUrl = data.coverImagesList[0].url;
      }
      if (data.extFieldsList.length !== 0) {
        this.authors = data.extFieldsList[2].fieldValue;
        if (data.extFieldsList[0].fieldValue) {
          this.mediaUrl = data.extFieldsList[0].fieldValue;
        }
      }
    },
  },
  filters: {
    DateFilter,
  },
};
</script>

<style scoped>
.viewList {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.info_left {
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info_left h1 {
  margin: 30px 0;
}
.media {
  width: 900px;
  height: 563px;
}
.info_right {
  width: 270px;
  margin: 20px 0 0 20px;
}
.card {
  background-color: #f2f4f7;
  color: #666666;
  padding: 20px 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 25px;
}
.card_info span {
  font-size: 20px;
  color: #999999;
}
.card_author {
  margin-top: 20px;
  font-size: 14px;
  padding: 10px 25px;
}
.name {
  font-size: 16px;
  margin: 10px 0;
}
</style>
