<template>
  <div>
    <div class="content" v-for="(list, index) in messagelist" :key="list.id">
      <div class="container">
        <el-row type="flex" class="row-bg" justify="center" :span="23">
          <div class="area-wrapping">
            <el-col :span="1">
              <div class="vote-area">
                <el-button
                  class="no-display"
                  type="plain"
                  icon="el-icon-top up"
                  circle
                  @click="voteUp(index, list.id)"
                ></el-button>
                <span class="vote-number">{{list.total_vote}}</span>
                <el-button
                  class="no-display"
                  type="plain"
                  icon="el-icon-bottom"
                  circle
                  @click="voteDown(index, list.id)"
                ></el-button>
              </div>
            </el-col>
            <el-col :span="22">
              <el-card shadow="never" style="padding : 0px">
                <el-link :href="'/message/' + list.id" :underline="false">{{list.value}}</el-link>
              </el-card>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageList",
  props: {
    messagelist: {
      type: Array,
      required: true
    }
  },
  methods: {
    voteUp(index, message_id) {
      this.$emit("voteUpChanged", index, message_id);
    },
    voteDown(index, message_id) {
      this.$emit("voteDownChanged", index, message_id);
    }
  }
};
</script>
<style scoped>
.area-wrapping {
  height: 100px;
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