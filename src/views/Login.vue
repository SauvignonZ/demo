<template>
  <div>
    <el-row class="login_row">
      <div class="login_box">
        <el-col :span="24">
          <h3 class="login_title">小U商城后台登录</h3>
        </el-col>
        <el-input placeholder="请输入用户名">
          <template slot="prepend">
            <i class="el-icon-user-solid"></i>
          </template>
        </el-input>
        <el-input placeholder="请输入用户名" type="password">
          <template slot="prepend">
            <i class="el-icon-unlock"></i>
          </template>
        </el-input>
        <el-form ref="form">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        input1: ""
      }
    };
  },
  created() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  components: {}
};
</script>
<style scoped>
.login_row {
  width: 100vw;
  height: 100vh;
  background: url("../assets/imgs/body_bg.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color:#fff;
  text-align:center;
  box-shadow: 4px 4px 3px #e28ba5;
}
.login_title {
  line-height: 80px;
  text-align: center;
  font-size: 26px;
}
.el-input-group {
  margin: 15px auto;
  width:350px;
}
.el-form {
  text-align: center;
}
.el-button {
  margin: 20px 35px;
}
</style>