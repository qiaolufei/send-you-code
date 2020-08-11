<template>
    <div>
        <div class="footer">
            <el-link class="footer__link" href="/suggest" :underline="false">用户反馈</el-link>
            <el-link href="/contactUs" :underline="false">联系我们</el-link>
            <el-link href="/aboutUs" :underline="false">关于我们</el-link>
            <el-link href="/disclaimer" :underline="false">免责声明</el-link>
            <br>
            <span class="footer__span">Copyright © 2019-2020</span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="less">
.footer{
    width: 100%;
    border-top: 1px solid #2a2f35;
    margin-top: 3%;
    float: left;
    color: #606266;
    font-size: 0.25rem;
    padding: 1% 0 1% 0;
    &__link{
        margin-left: 3%;
    }
    &__span{
        display: block;
        text-align: center;
    }
}
</style>
