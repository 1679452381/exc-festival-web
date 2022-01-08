<template>
  <div class="pagination">
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="[16, 32, 64, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "gd-pagination",
  props: ["pageNo", "pageSize", "total"],
  methods: {
    //页大小改变
    handleSizeChange(pageSize) {
      //向父组件传递参数
      this.$emit("pageSizeChange", pageSize);
    },
    //页数改变
    handleCurrentChange(pageNo) {
      this.$emit("pageNoChange", pageNo);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
</style>
