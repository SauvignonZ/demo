<template>
  <div>
    <h3 class="menu_tree">小U商城后台管理</h3>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :default-active="$route.path"
    >
      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/menu">
            <i class="el-icon-s-order"></i>菜单管理
          </el-menu-item>
          <el-menu-item index="/role">
            <i class="el-icon-user-solid"></i>角色管理
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-s-custom"></i>管理员管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-shop"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/category">
            <i class="el-icon-menu"></i>分类管理
          </el-menu-item>
          <el-menu-item index="/specs">
            <i class="el-icon-lollipop"></i>规格管理
          </el-menu-item>
          <el-menu-item index="/goods">
            <i class="el-icon-s-goods"></i>商品管理
          </el-menu-item>
          <el-menu-item index="/member">
            <i class="el-icon-user"></i>会员管理
          </el-menu-item>
          <el-menu-item index="/banner">
            <i class="el-icon-picture"></i>轮播图管理
          </el-menu-item>
          <el-menu-item index="/seckill">
            <i class="el-icon-message-solid"></i>秒杀管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{}
  },
  computed:{},
  methods:{}
};
</script>

<style>
.menu_tree {
  background-color: #707f8f;
  box-shadow: 0px 2px 2px #47515c;
  line-height: 60px;
}
</style>