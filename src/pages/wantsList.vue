<template>
    <div class="wantsList">
        <headpage></headpage>
        <div class="selectList">
        <span>技术栈：</span>
        <el-radio-group v-model="radio1" size="mini">
          <el-radio-button :label=item.id v-for="(item,index) of skills" :key=index></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工作时间类型：</span>
        <el-radio-group v-model="radio2" size="mini" @change="getTimeType()">
          <el-radio-button :label=item.id v-for="(item,index) of timeType" :key=index></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工时：</span>
        <el-select v-model="working" :disabled=dis placeholder="请选择" size="mini">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <b>{{hourOrDay}}</b>
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
          <div v-for="(item, index) in wantsList" :key="index" class="allWants__one">
           <div class="allWants__one-wantTheme">
              <span>{{item.theme}}</span>
           </div>
           <div>
            <span>{{item.name}}</span> <span>{{item.postTime}}发布</span>
           </div>
           <br>
           <div>
             <span>具体需求：</span><div><b>{{item.content}}</b></div>
           </div>
           <div style="margin:1% 0 1% 0">
             <span class="allWants__one-skill" v-for="index of item.skills.split(',')" :key="index">{{index}}</span>
           </div>
           <div>
             <span>期望开始工作时间：</span><b>{{item.startTime}}</b>
           </div>
           <div>
             <span>工时：</span>
             <b>
               {{item.working}}
               <span v-if="item.timeType==0">小时</span>
               <span v-else>天</span>
             </b>
           </div>
           <div>
             <span>总薪资：</span><b>{{item.salary}}元</b>
           </div>
           <div>
             <span>附件：</span><b>{{item.annex}}</b>
           </div>
           <el-button type="primary" plain class="allWants__one-handle">处理需求</el-button>
           <span>已有31人沟通</span>
          </div>
          </center>
        </div>
          <el-pagination
            class="wantsList__page"
            @current-change="getWants"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total=total>
          </el-pagination>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      skills: [{id: '全部'}, {id: 'PHP'}, {id: 'C'}, {id: 'C++'}, {id: 'python'},
        {id: 'Java'}, {id: 'javaScript'}, {id: 'Android'}, {id: 'Go'}, {id: 'NodeJS'}, {id: '前端开发'}, {id: '其它'}],
      timeType: [{id: '全部'}, {id: '按天'}, {id: '按小时'}],
      radio1: '全部',
      radio2: '全部',
      hourOrDay: '',
      dis: true,
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
      wantsList: [],
      working: '全部',
      money: '全部',
      currentPage: 1,
      total: 0
    }
  },
  components: {
    headpage
  },
  created () {
    this.currentPage = Number(sessionStorage.getItem('page')) || 1
    this.getWants(this.currentPage)
  },
  beforeUpdate () {
    sessionStorage.setItem('page', this.currentPage)
  },
  beforeDestroy () {
    sessionStorage.setItem('page', 1)
  },
  methods: {
    getTimeType () {
      if (this.radio2 === '按小时') {
        this.hourOrDay = '小时'
        this.dis = false
      } else if (this.radio2 === '按天') {
        this.hourOrDay = '天'
        this.dis = false
      } else {
        this.hourOrDay = ''
        this.dis = true
      }
    },
    getWants (currentPage) {
      this.currentPage = currentPage
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: this.currentPage
        }
      })
      let params = {
        page: this.currentPage
      }
      this.wantsList = [] // 每次清空数据
      this.axios.get(this.$api + '/want/getWants?' + this.$qs.stringify(params))
        .then(res => {
          // console.log(res)
          let data = res.data.data
          this.total = data.totalElements // 数据总数
          this.wantsList = data.content
        })
    }
  }
}
</script>
<style lang="less" scoped>
.wantsList{
  font-size: 0.3rem;
  color: #656266;
  &__page{
    text-align: center;
  }
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
    margin-top: 2%;
    background-color:#fff;
    border-radius: 0.1rem;
    padding: 1% 1% 1% 1%;
    &-wantTheme{
      font-size: 0.5rem;
      text-align: center
    }
    &-skill{
      background-color:#409EFF;
      color:#FFF;
      border-radius: 0.1rem;
      padding: 0.2% 0.2% 0.2% 0.2%;
      margin-left:1%;
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
