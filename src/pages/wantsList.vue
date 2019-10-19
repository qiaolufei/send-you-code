<template>
    <div class="wantsList">
        <headpage></headpage>
        <div class="selectList">
        <span>技术栈：</span>
        <el-radio-group v-model="radio1" size="mini">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="C++"></el-radio-button>
          <el-radio-button label="Java"></el-radio-button>
          <el-radio-button label="JavaScript"></el-radio-button>
          <el-radio-button label="Vue.js"></el-radio-button>
          <el-radio-button label="C语言"></el-radio-button>
          <el-radio-button label="汇编"></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工作时间类型：</span>
        <el-radio-group v-model="radio2" size="mini">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="按天"></el-radio-button>
          <el-radio-button label="按小时"></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工时：</span>
        <el-select v-model="working" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <b>小时</b>
        <br><br>
        <span>总薪资：</span>
        <el-select v-model="money" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <b>元</b>
        </div>
        <div class="allWants">
          <center>
          <div class="allWants__one">
           <div class="allWants__one-wantTheme">
              <span >系统导出功能添加</span>
           </div>
           <div>
             <img src="../img/me.jpg"><span>乔路非</span> <span>2019-10-11 19:12发布</span>
           </div>
           <br>
           <div>
             <span>具体需求：</span><div><b>公司内部系统，前端：react，后端：node.js需要在现有系统上添加一个pdf导出功能，需要实现pdf的生成及下载功能（提供PDF模板，根据页面填充内容生成）</b></div>
           </div>
           <div >
             <span style="background-color:#409EFF;color:#FFF;border-radius: 0.1rem;padding: 0.2% 0.2% 0.2% 0.2%">汇编</span>
             <span style="background-color:#409EFF;color:#FFF;border-radius: 0.1rem;padding: 0.2% 0.2% 0.2% 0.2%">node.js</span>
           </div>
           <div>
             <span>期望开始工作时间：</span><b>2019-10-11 19:14:33</b>
           </div>
           <div>
             <span>工时：</span><b>5小时</b>
           </div>
           <div>
             <span>总薪资：</span><b>100元</b>
           </div>
           <el-button type="primary" plain class="allWants__one-handle">处理需求</el-button>
           <span>已有31人沟通</span>
          </div>
          </center>
        </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      radio1: '全部',
      radio2: '全部',
      options1: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '1-5'
      }, {
        value: '3',
        label: '6-10'
      }, {
        value: '4',
        label: '10-15'
      }, {
        value: '5',
        label: '16-20'
      }, {
        value: '6',
        label: '>20'
      }
      ],
      options2: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '<100'
      }, {
        value: '3',
        label: '100-500'
      }, {
        value: '4',
        label: '500-1000'
      }, {
        value: '5',
        label: '1000-5000'
      }, {
        value: '6',
        label: '>5000'
      }
      ],
      working: '',
      money: ''
    }
  },
  components: {
    headpage
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.wantsList{
  font-size: 0.3rem;
  color: #656266;
}
.selectList{
  margin: 0 auto;
  margin-top: 2%;
  width: 80%;
  background-color: #E4E7ED;
  padding: 1% 1% 1% 1%
}
.allWants{
  width: 100%;
  background-color: #E4E7ED;
  margin-top: 2%;
  padding: 2% 0 2% 0;
  &__one{
    text-align: left;
    width: 80%;
    margin: 0 auto;
    background-color:#fff;
    border-radius: 0.1rem;
    padding: 1% 1% 1% 1%;
    &-wantTheme{
      font-size: 0.5rem;
      text-align: center
    }
    &-handle{
      margin-left: 60%
    }
  }
}
img{
  width: 5%;
}
</style>
