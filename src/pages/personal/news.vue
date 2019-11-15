<template>
    <div class="news">
        <headpage></headpage>
        <personalmenu></personalmenu>
        <br><br><br>
        <div class="news__list">
          <!-- 联系人列表 -->
          <el-col :span="4">
          <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo">
          <el-menu-item>
            <span slot="title">{{info.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 聊天框 -->
      <div class="news__list-theme">
      {{info.theme}}
      </div>
      <div class="news__list-chat">
      </div>
      <div class="news__list-in">
        <el-input v-model="msg" class="news__list-in__input" clearable></el-input>
        <el-button type="primary" class="news__list-in__btn">发送</el-button>
      </div>
      </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
      msg: '',
      info: []
    }
  },
  components: {
    headpage,
    personalmenu
  },
  methods: {
    getWantInfo () {
      console.log(this.$route.query.wantId)
      let params = {
        wantID: this.$route.query.wantId
      }
      this.axios.get(this.$api + '/want/getWantInfo?' + this.$qs.stringify(params))
        .then(res => {
          let data = res.data
          if (data.code === 0) {
            this.info = data.data
          }
        })
    }
  },
  mounted () {
    this.getWantInfo()
  }
}
</script>
<style lang="less" scoped>
.news{
  &__list{
    margin: 0 auto;
    height: 400px;
    width: 50%;
    border: 1px solid #545c64;
    border-radius: 5px;
    &-theme{
      width: 100%;
      padding: 1% 0 1% 0;
      background-color: #545c64;
      text-align: center;
      color: #ffd04b;
      font-size: 0.3rem;
    }
    &-chat{
      width: 98%;
      padding: 1% 1% 1% 1%;
      height: 75.5%;
      font-size: 0.25rem;
    }
    &-in{
      border-top:1px solid #545c64;
      background-color: gainsboro;
      width: 98%;
      padding: 1% 1% 1% 1%;
      &__input{
        width: 60%;
        margin-left: 3%;
      }
      &__btn{
        margin-left: 2%
      }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
}
</style>
