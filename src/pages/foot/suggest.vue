<template>
  <div>
    <headpage></headpage>
    <div class="suggest">
      <el-page-header @back="goBack()" class="suggest__title" content="用户反馈"></el-page-header>
      <div class="suggest__box">
        <span class="suggest__box-email">您的邮箱：</span>
        <el-input class="suggest__box-email__input" v-model="email"></el-input>
        <br />
        <el-input
          class="suggest__box-text"
          type="textarea"
          :rows="8"
          maxlength="500"
          resize="none"
          show-word-limit
          placeholder="请输入您的宝贵意见"
          v-model="suggest"
        ></el-input>
        <el-button class="suggest__box-btn" type="primary" @click="submit()">提交</el-button>
      </div>
    </div>
    <footpage></footpage>
  </div>
</template>
<script>
import headpage from '@/components/header'
import footpage from '@/components/footer'
export default {
  components: {
    headpage,
    footpage
  },
  data () {
    return {
      email: '',
      suggest: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    submit () {}
  }
}
</script>
<style lang="less">
.suggest {
  &__title {
    margin-top: 2%;
    font-size: 0.5rem;
    color: #303133;
  }
  &__box{
    margin:2% 0 0 15%;
    &-email {
        font-size: 0.4rem;
        display: inline-block;
        margin: 2% 0 0 2%;
        &__input {
            width: 20%;
        }
    }
    &-text {
        width: 50%;
        margin: 2% 0 0 2%;
    }
    &-btn{
        display: block;
        margin: 3% 0 0 45%;
    }
  }
}
</style>
