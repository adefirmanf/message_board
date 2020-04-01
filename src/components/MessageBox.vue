<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-card shadow="never" style="padding : 0px; width: 500px; margin-top: 10px">
        <div slot="header">
          <span>Message Board</span>
        </div>
        <el-form>
          <el-form-item>
            <el-input
              type="textarea"
              placeholder="Enter your message here"
              size="medium"
              @input="updateMessage"
              :value="message"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="medium" @click="submitForm()">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  name: "MessageBox",
  methods: {
    updateMessage(val) {
      this.$emit("messageUpdated", val);
    },
    submitForm() {
      this.$emit("submit");
    }
  }
};
</script>
<style scoped>
.el-form-item {
  margin-bottom: 15px;
}
</style>