<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#23305E"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" :class="item.class">
        {{ item.navItem }}
      </el-menu-item>
      <el-menu-item v-if="name===null || name===''" index="/login" class="login">
        登录
      </el-menu-item>
      <el-submenu v-else class="login"  index="">
      <template slot="title">
        {{name}}
      </template>
      <el-menu-item index="/info">个人中心</el-menu-item>
      <el-menu-item index="" @click="logout">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        {name: '/', class: 'name', navItem: '码上到'},
        {name: '/postWant', class: 'postWant', navItem: '发布需求'},
        {name: '/wantsList', class: 'wantsList', navItem: '需求列表'}
      ],
      name: sessionStorage.getItem('name')
    }
  },
  methods: {
    logout () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 1000
        })
        sessionStorage.setItem('name', '')
        this.$router.go(0)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消',
          duration: 1000
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .name {
    font-size: 0.8rem;
    font-family: STXingkai;
  }
  .login{
    margin-left: 60%
  }
  .login, .postWant, .wantsList{
    font-size: 0.3rem;
  }
</style>
