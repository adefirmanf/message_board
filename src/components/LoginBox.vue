<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-card shadow="never" style="padding : 0px; width: 300px; margin-top: 150px">
        <div slot="header">
          <span>Login</span>
        </div>
        <el-form>
          <el-form-item>
            <el-input
              placeholder="Username"
              size="medium"
              @input="updateUsername"
              :value="username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Username"
              size="medium"
              @input="updatePassword"
              :value="password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="medium" @click="submitForm('ruleForm')">Submit</el-button>
            <el-button @click="$router.push('register')" size="medium">Register</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    password: {
      username: {
        type: String,
        required: true
      }
    }
  },
  name: "LoginBox",
  methods: {
    updateUsername(val) {
      this.$emit("usernameChanged", val);
    },
    updatePassword(val) {
      this.$emit("passwordChanged", val);
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