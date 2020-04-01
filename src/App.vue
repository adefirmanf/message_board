<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.el-notification {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: opacity 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s,
    -webkit-transform 0.3s;
  transition: opacity 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s,
    -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s, -webkit-transform 0.3s;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
