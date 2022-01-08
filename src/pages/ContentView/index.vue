<template>
  <div>
    <div v-if="infoList.length === 0" class="contentview">
      <span>暂无数据</span>
    </div>
    <div v-else class="contentview">
      <ul>
        <li
          v-for="item in infoList"
          :key="item.id"
          @click="getArticlesDetailsInfo(item.id)"
        >
          <gd-info :imgurl="item.coverImagesList" :title="item.title">
          </gd-info>
        </li>
      </ul>
      <hr />
    </div>
    <gd-pagination
      @pageSizeChange="updatePageSize"
      @pageNoChange="updatePageNo"
      :pageNo="pageNo"
      :pageSize="pageSize"
      :total="total"
    >
    </gd-pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import Infocard from "@/components/Infocard";
import { getArticles } from "@/api/articles";
export default {
  components: {
    "gd-pagination": Pagination,
    "gd-info": Infocard,
  },
  data() {
    return {
      infoList: {},
      pageNo: 1,
      pageSize: 16,
      total: 0,
      channelId: "",
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    //切换菜单重新发起请求
    this.$bus.$on("meunsChange", (channelId) => {
      this.channelId = channelId;
      //将页码重置
      this.pageNo = 1;
      this.getData();
      this.$router.push({
        path: "/contentView",
        query: {
          channelId,
        },
      });
    });
  },
  methods: {
    async getData() {
      const { result: data } = await getArticles(
        this.channelId,
        this.pageNo,
        this.pageSize
      );

      this.infoList = data.content;
      this.total = data.total;
    },
    updatePageSize(pageSize) {
      // console.log(pageSize);
      this.pageSize = pageSize;
      this.getData();
    },
    updatePageNo(pageNo) {
      // console.log(pageNo);
      this.pageNo = pageNo;
      this.getData();
    },
    //查看详细信息
    getArticlesDetailsInfo(articlesId) {
      this.$router.push({
        path: `/viewList/${articlesId}`,
      });
    },
  },
};
</script>

<style scoped>
.contentview {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  margin-top: 300px;
}
.contentview ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
