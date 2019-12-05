<template>
    <div>
        <headpage></headpage>
        <div class="index">
          <div class="index__info">
            <h3 class="index__info-title">发布需求 | 沟通接单 | 交易担保</h3>
            <el-divider></el-divider>
            <h3 class="index__info-msg">代码自由交易平台，您可以作为甲方根据需求发布任务;也可以作为乙方浏览任务列表，接单赚取酬劳。</h3>
            <h3 class="index__info-m">任务标签简洁、按需筛选任务、实时沟通交流、平台担保交易</h3>
          </div>
        </div>
        <div class="index1">
            <span class="index1__title">服务方案</span>
            <div class="index1__info">
              <div v-for="(item, index) in list" :key="index" class="index1__info-m">
                <i :class="item.icon"></i>
                <span class="index1__info-m__name">{{item.name}}</span>
                <el-divider></el-divider>
                <div v-if="item.name == '用户范围'">
                  <h4>√在校学生</h4>
                  <h4>√自由职业者</h4>
                  <h4>√名企人才</h4>
                  <h4>√互联网创业者</h4>
                  <h4>......</h4>
                  <h4>任何有代码需求的甲方或任何有代码能力的乙方</h4>
                </div>
                <div v-if="item.name == '需求范围'">
                  <h4>√大学课程设计</h4>
                  <h4>√BUG查找处理</h4>
                  <h4>√项目重构</h4>
                  <h4>√项目外包</h4>
                  <h4>......</h4>
                  <h4>除涉及敏感内容外的代码需求都可以在本平台发布</h4>
                  <h4></h4>
                </div>
                <div v-if="item.name == '相关流程'">
                  <h4>成为甲方：</h4>
                  <h4>填写需求 -> 发布需求 -> 双方沟通 -> 确认乙方 -> 接收成品 -> 支付酬劳</h4>
                  <br>
                  <h4>成为乙方：</h4>
                  <h4>筛选需求 -> 双方沟通 -> 确认接单 -> 提交成品 -> 获得酬劳</h4>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      list: [
        {
          icon: 'el-icon-s-custom',
          name: '用户范围'
        },
        {
          icon: 'el-icon-s-help',
          name: '需求范围'
        },
        {
          icon: 'el-icon-s-order',
          name: '相关流程'
        }
      ]
    }
  },
  components: {
    headpage
  },
  methods: {
    to (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="less" scoped>
.index{
  padding: 4% 0 4% 0;
  background: url('../img/back.png');
  background-size: 100% 100%;
  &__info{
    margin: 0 auto;
    width: 70%;
    &-title{
      text-align: center;
      font-size: 0.5rem;
      color: #fff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
    &-msg{
      font-size: 0.33rem;
      color: #303133;
    }
    &-m{
      text-align: center;
      font-size: 0.3rem;
      color: #fff;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
  }
  &__car{
    &-name{
      color: #409EFF;
      display: block;
      text-align: center;
      font-size: 0.4rem;
    }
    &-msg{
      display: block;
      margin: 4% 12% 0 15%;
      font-size: 0.3rem;
    }
  }
}
.index1{
  margin-top: 2%;
  width: 100%;
  &__title{
    display: block;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.5rem;
    color: #303133;
    text-align: center
  }
  &__info{
    width: 100%;
    display: flex;
    flex-direction: row;
    &-m{
      width:21%;
      margin-left: 6.25%;
      margin-top: 2%;
      height: 400px;
      border: 1px solid #409EFF;
      border-radius: 10px;
      padding: 1% 2% 1% 2%;
      i{
        color: #409EFF;
        display:block;
        text-align: center;
        font-size: 0.6rem
      }
      &__name{
        display: block;
        font-size: 0.4rem;
        text-align: center;
      }
      h4{
        font-size: 0.3rem
      }
    }
  }
}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
