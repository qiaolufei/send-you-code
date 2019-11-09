<template>
  <div>
    <headpage></headpage>
    <!-- 登录表单 -->
    <div class="loginForm">
      <span class="loginForm__name">登录</span>
      <el-form ref="form" :model="loginForm">
        <el-input v-model="loginForm.name" class="marTop" placeholder="用户名">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
        <el-input v-model="loginForm.password" class="marTop" type="password" placeholder="密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
        <el-button class="marTop" @click="login" type="primary">登录</el-button>
        <br />
        <br />
        <el-checkbox class="loginForm__remember" v-model="checked">记住我</el-checkbox>
        <a class="loginForm__forgetPW" href="#">忘记密码</a>
        <a class="loginForm__toRegister" href="#" @click="toRegister = true">立即注册</a>
      </el-form>
      <!-- <div class="chooseForm">
            <span class="chooseForm__title">————————社交账号登录————————</span>
            <br>
            <a href="#"><img src="../img/wechat.png"></a>
            <a href="#"><img style="margin-left:10%" src="../img/qq.png"></a>
      </div>-->
    </div>
    <!-- 注册弹窗 -->
    <el-dialog title="注册" :visible.sync="toRegister" width="40%" class="registerForm">
      <el-input v-model.lazy="registerForm.name" @change="nameIsHave()" placeholder="用户名">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
      </el-input>
      <el-input class="marTop" v-model="registerForm.phone" @change="phoneIsRight()" placeholder="手机号">
          <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
      </el-input>
      <el-input class="marTop" type="password" v-model="registerForm.password1" placeholder="设置密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
      </el-input>
      <el-input class="marTop" type="password" v-model="registerForm.password2" @change="PwdIsRight()" placeholder="确认密码">
          <i slot="prefix" class="el-input__icon el-icon-circle-check"></i>
      </el-input>
      <!-- <el-input class="marTop" placeholder="验证码" style="width:50%">
          <i slot="prefix" class="el-input__icon el-icon-s-comment"></i>
      </el-input>
      <el-input type="button" class="registerForm__getV" style="width:30%" value="获取验证码"></el-input> -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" :disabled="isdisabled" @click="register()">注册</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      loginForm: { // 登录数据
        name: '',
        password: ''
      },
      registerForm: { // 注册数据
        name: '',
        phone: '',
        password1: '',
        password2: ''
      },
      toRegister: false, // 注册弹窗
      checked: false, // 记住我
      isdisabled: true, // 注册按钮
      nameIsHave1: 0, // 用户名是否存在
      phoneIsRight1: 0, // 手机号是否正确
      PwdIsRight1: 0 // 密码是否一致
    }
  },
  components: {
    headpage
  },
  methods: {
    // 登录
    login () {
      // 先判断是否为空，然后传参
      if (this.loginForm.name === '' || this.loginForm.password === '') {
        this.$message({
          message: '用户名或密码不能为空',
          type: 'warning'
        })
      } else {
        let params = {
          name: this.loginForm.name,
          password: this.loginForm.password
        }
        this.axios.post(this.$api + '/user/login', this.$qs.stringify(params))
          .then(res => {
            // console.log(res)
            let code = res.data.code
            if (code === 0) {
              this.$message({
                message: '登录成功',
                type: 'success',
                duration: 1000
              })
              // 登录成功后存储name
              sessionStorage.setItem('name', this.loginForm.name)
              this.$router.push({ path: './' })
            } else {
              this.$message.error('用户名或密码错误')
            }
          })
      }
    },
    // 检查用户名是否存在
    nameIsHave () {
      let params = {
        name: this.registerForm.name
      }
      this.axios.post(this.$api + '/user/findName', this.$qs.stringify(params))
        .then(res => {
          console.log(res)
          if (res.data === 0) {
            this.$notify.error({
              title: '错误',
              message: '该用户名已被注册,请更改',
              position: 'top-left'
            })
          } else {
            this.nameIsHave1 = 1
          }
        })
    },
    // 检查手机号格式是否正确
    phoneIsRight () {
      if (this.registerForm.phone.length === 11) {
        this.phoneIsRight1 = 1
      } else {
        this.$notify.error({
          title: '错误',
          message: '请输入正确的11位手机号',
          position: 'top-left'
        })
      }
    },
    // 检查两次密码是否相同
    PwdIsRight () {
      if (this.registerForm.password1 === this.registerForm.password2 || this.registerForm.password1 === '') {
        this.isdisabled = false
        this.PwdIsRight1 = 1
      } else {
        this.$notify.error({
          title: '错误',
          message: '两次密码不同，请修改',
          position: 'top-left'
        })
      }
    },
    // 注册
    register () {
      if (this.nameIsHave1 === 1 && this.phoneIsRight1 === 1 && this.PwdIsRight1 === 1) {
        let params = {
          name: this.registerForm.name,
          phone: this.registerForm.phone,
          password: this.registerForm.password2
        }
        this.axios.post(this.$api + '/user/register', this.$qs.stringify(params))
          .then(res => {
            if (res.data.code === 0) {
              this.loginForm.name = this.registerForm.name
              this.toRegister = false
              this.$message({
                message: '注册成功，请登录',
                type: 'success',
                duration: 3000
              })
            }
          })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.loginForm {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &__name {
    font-size: 0.4rem;
    font-weight: 700;
    color: #545c64;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }
  &__remember {
    position: absolute;
    left: 0;
  }
  &__toRegister {
    position: absolute;
    right: 0;
  }
}
a {
    text-decoration: none;
    font-size: 0.3rem;
    color: #545c64;
  }
button {
  font-size: 0.3rem;
  width: 50%;
}
.chooseForm {
  margin-top: 3%;
  &__title {
    font-size: 0.25rem;
  }
  img {
    width: 5%;
  }
}
.registerForm{
    &__getV{
        margin-left: 10%
    }
}
.marTop{
    margin-top: 3%
}
</style>
