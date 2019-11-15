<template>
  <div>
      <el-col :span="3">
       <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo">
       <el-menu-item index="/info">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人资料</span>
      </el-menu-item>
      <el-menu-item index="/news">
        <i class="el-icon-message-solid"></i>
        <span slot="title">消息中心</span>
      </el-menu-item>
      <el-menu-item index="/myWants">
        <i class="el-icon-s-order"></i>
        <span slot="title">我的需求</span>
      </el-menu-item>
      <el-menu-item index="/history">
        <i class="el-icon-shopping-cart-2"></i>
        <span slot="title">历史任务</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 800px;
  }
</style>
