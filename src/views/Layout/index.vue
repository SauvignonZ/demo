<template>
  <div>
    <el-container class="page_container">
      <!-- 侧边栏 -->
      <el-aside width="200px" class="page_aside">
        <left></left>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="page_header">
          <top></top>
        </el-header>
        <!-- 内容区 -->
        <el-main class="page_main">
          <router-view />
        </el-main>
        <!-- 底部 -->
        <el-footer class="page_footer">Footer</el-footer>
      </el-container>
    </el-container>
    <router-view />
  </div>
</template>
<script>
import left from "./left";
import top from "./top";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    left,
    top
  }
};
</script>
<style scoped>
.page_container {
  width: 100vw;
  height: 100vh;
}
.page_header {
  background-color: #b3c0d1;
  box-shadow:0px 2px 2px #47515c;
  z-index: 1;
}
.page_aside {
  background-color: #7b8997;
  height: 100%;
}
.page_footer {
  background-color: #b3c0d1;
}
.page_main {
  background-color: #e9eef3;
}
</style>