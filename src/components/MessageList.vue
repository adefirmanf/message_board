<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center" :span="23">
      <div class="area-wrapping">
        <el-col :span="1">
          <div class="vote-area">
            <el-button class="no-display" type="plain" icon="el-icon-top up" circle></el-button>
            <span class="vote-number">10</span>
            <el-button class="no-display" type="plain" icon="el-icon-bottom" circle></el-button>
          </div>
        </el-col>
        <el-col :span="22">
          <el-card
            shadow="never"
            style="padding : 0px"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</el-card>
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<style scoped>
.area-wrapping {
  height: 100px;
}
.vote-area {
  height: 80px;
  font-size: 20px;
}
.vote-number {
  display: block;
  font-size: 20px;
}
.no-display {
  border: none !important;
}
</style>
<script>
export default {};
</script>