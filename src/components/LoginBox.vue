<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-card shadow="never" style="padding : 0px; width: 300px; margin-top: 150px">
        <div slot="header">
          <span>Login</span>
        </div>
        <el-form>
          <el-form-item>
            <el-input placeholder="Username" size="medium"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Password" size="medium"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="medium" @click="submitForm('ruleForm')">Submit</el-button>
            <el-button @click="submitForm('ruleForm')" size="medium">Register</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LoginBox"
};
</script>

<style scoped>
.el-form-item {
  margin-bottom: 15px;
}
</style>