<template>
  <div>
    <div class="content" v-for="(list, index) in commentList" :key="list.id">
      <div class="container">
        <div class="area-wrapping">
          <el-col :span="1">
            <div class="vote-area">
              <el-button
                class="no-display"
                type="plain"
                icon="el-icon-top up"
                circle
                @click="voteUpComment(index, list.id)"
              ></el-button>
              <span class="vote-number">{{list.total_vote}}</span>
              <el-button
                class="no-display"
                type="plain"
                icon="el-icon-bottom"
                circle
                @click="voteDownComment(index, list.id)"
              ></el-button>
            </div>
          </el-col>
          <el-col :span="22">
            <el-card shadow="never" style="padding : 0px">{{list.value}}</el-card>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentList",
  props: {
    commentList: {
      type: Array,
      required: true
    }
  },
  methods: {
    voteUpComment(index, id) {
      this.$emit("voteUpCommentUpdated", index, id);
    },
    voteDownComment(index, id) {
      this.$emit("voteDownCommentUpdated", index, id);
    }
  }
};
</script>
<style scoped>
.content {
  margin-top: -10px;
}
.area-wrapping {
  height: 10px;
}
.vote-area {
  height: 80px;
  font-size: 20px;
  margin-top: -10px;
}
.vote-number {
  display: block;
  font-size: 16px;
}
.no-display {
  border: none !important;
}
.area-wrapping {
  width: 100%;
}
</style>