<template>
  <div class="header">
    <div class="header_left">
      <el-button type="primary" icon="el-icon-s-fold" class="toggle_btn"></el-button>
      <el-breadcrumb separator="/" class="header_bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button icon="el-icon-back" plain circle v-if="$route.path!='/index'" @click="$router.back()"></el-button>
    </div>
    <el-dropdown size="small">
      <span class="el-dropdown-link">
        你好，管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-full-screen
">全屏操作</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button
">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header_left {
  display: flex;
  align-items: center;
}
.el-button--primary {
  font-size: 20px;
  text-align: center;
  padding: 7px 10px;
  margin: 0;
}
.header_bread {
  margin: 0 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>