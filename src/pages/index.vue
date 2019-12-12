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
                  <h4>填写需求 -> 发布需求 -> 双方沟通 -> 确认乙方 -> 接收成品 -> 支付薪资</h4>
                  <br>
                  <h4>成为乙方：</h4>
                  <h4>筛选需求 -> 双方沟通 -> 确认接单 -> 提交成品 -> 获得酬劳</h4>
                </div>
              </div>
            </div>
        </div>
        <div class="index2">
              <span class="index2__title">程序员必备网站</span>
              <div class="index2__info">
                <div v-for="(item1, index1) in websites" :key="index1" class="index2__info-m" @click="to(item1.url)">
                  <el-popover
                    placement="top-start"
                    title="简介"
                    width="200"
                    trigger="hover"
                    :content="item1.msg">
                  <img slot="reference"  :src=item1.logo class="index2__info-m__logo" />
                  </el-popover>
                  <span class="index2__info-m__name">{{item1.name}}</span>
                </div>
              </div>
        </div>
        <footpage></footpage>
    </div>
</template>
<script>
import headpage from '@/components/header'
import footpage from '@/components/footer'
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
      ],
      websites: [
        {
          logo: require('../img/logos/csdn.png'),
          name: 'CSDN',
          url: 'https://www.csdn.net/',
          msg: 'CSDN是全球知名中文IT技术交流平台,创建于1999年,包含原创博客、精品问答、职业培训、技术论坛、资源下载等产品服务,提供原创、优质、完整内容的专业IT技术开发社区.'
        },
        {
          logo: require('../img/logos/github.jpg'),
          name: 'GitHub',
          url: 'https://github.com/',
          msg: 'GitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名GitHub.'
        },
        {
          logo: require('../img/logos/cainiao.jpg'),
          name: '菜鸟教程',
          url: 'https://www.runoob.com/',
          msg: '菜鸟教程(www.runoob.com)提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程.'
        },
        {
          logo: require('../img/logos/zaixian.png'),
          name: '在线工具',
          url: 'https://tool.lu/',
          msg: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,sql工具,正则测试工具,favicon在线制作,ruby工具,中文简繁体转换,迅雷下载链接转换,程序猿的在线工具.'
        },
        {
          logo: require('../img/logos/niuke.jpg'),
          name: '牛客',
          url: 'https://www.nowcoder.com/',
          msg: '牛客网是互联网求职神器，C++、Java、前端、产品、运营技能学习/备考/求职题库，在线进行百度阿里腾讯网易等互联网名企笔试面试模拟考试练习,和牛人一起讨论经典试题,全面提升你的技术能力.'
        },
        {
          logo: require('../img/logos/mayun.png'),
          name: '码云',
          url: 'https://gitee.com/',
          msg: '码云(gitee.com)是 OSCHINA.NET 推出的代码托管平台,支持 Git 和 SVN,提供免费的私有仓库托管。目前已有超过 350 万的开发者选择码云.'
        }
      ]
    }
  },
  components: {
    headpage,
    footpage
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
  background-size: 100% 140%;
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
.index2{
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
    &-m{
      float: left;
      width:15%;
      margin-left: 8%;
      margin-top: 2%;
      height: 150px;
      border: 1px solid #409EFF;
      border-radius: 10px;
      padding: 0;
      text-align: center;
      &__logo{
        width: 40%;
        margin-top: 5%
      }
      &__name{
        display: block;
        font-size: 0.3rem;
        margin-top: 5%;
      }
    }
  }
}
</style>
