<template>
  <div>
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
                @click="voteUp(message.id)"
              ></el-button>
              <span class="vote-number">{{message.total_vote}}</span>
              <el-button
                class="no-display"
                type="plain"
                icon="el-icon-bottom"
                circle
                @click="voteDown(message.id)"
              ></el-button>
            </div>
          </el-col>
          <el-col :span="22">
            <el-card shadow="never" style="padding : 0px">{{message.value}}</el-card>
          </el-col>
        </div>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center" :span="23">
        <el-card shadow="never" class="comment-box-area">
          <el-form>
            <el-form-item>
              <el-input
                type="textarea"
                placeholder="Enter your comment here"
                class="center"
                :value="commentMsg"
                @input="updateCommentMsg"
              ></el-input>
            </el-form-item>
            <br />
            <el-form-item>
              <el-button type="success" @click="submitComment()" size="medium">Submit</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: {
    message: {
      type: Object,
      required: true
    },
    commentMsg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test: ""
    };
  },
  methods: {
    voteUp(index) {
      this.$emit("voteUpChanged", index);
    },
    voteDown(index) {
      this.$emit("voteDownChanged", index);
    },
    submitComment() {
      this.$emit("submit");
    },
    updateCommentMsg(val) {
      this.$emit("updateCommentMsg", val);
    }
  }
};
</script>
<style>
.el-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;
}

.area-wrapping {
  width: 100%;
  margin-top: 100px;
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
.comment-box-area {
  width: 50%;
  text-align: center;
  margin-top: 10px;
}
.center {
  text-align: center !important;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>