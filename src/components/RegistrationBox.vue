<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-card shadow="never" style="padding : 0px; width: 300px; margin-top: 150px">
        <div slot="header">
          <span>Register</span>
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
            <el-input
              placeholder="Repeat Password"
              size="medium"
              v-model="verifyPassword"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="success"
              size="medium"
              @click="submitForm('ruleForm')"
              :disabled="validated == 1"
            >Submit</el-button>
            <el-button @click="$router.push('login')" size="medium">Back to Login</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RegistrationBox",
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
  data() {
    return {
      validated: 1,
      verifyPassword: ""
    };
  },
  watch: {
    verifyPassword(val) {
      if (val == this.password) {
        this.validated = 0;
      } else {
        this.validated = 1;
      }
    }
  },
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