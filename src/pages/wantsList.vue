<template>
    <div class="wantsList">
        <headpage></headpage>
        <!-- 条件检索 -->
        <div class="selectList">
        <span>技术栈：</span>
        <el-radio-group v-model="search.skill" @change="getWants" size="mini">
          <el-radio-button :label=item.id v-for="(item,index) of skills" :key=index></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工作时间类型：</span>
        <el-radio-group v-model="search.type" size="mini" @change="getWants">
          <el-radio-button :label=item.id v-for="(item,index) of timeType" :key=index></el-radio-button>
        </el-radio-group>
        <br><br>
        <span>工时：</span>
        <el-select v-model="search.working" @change="getWants" :disabled=search.dis placeholder="请选择" size="mini">
          <el-option
            v-for="item in options1"
            :key="item.label"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <b>{{hourOrDay}}</b>
        <br><br>
        <span>总薪资：</span>
        <el-select v-model="search.money" @change="getWants" placeholder="请选择" size="mini">
          <el-option
            v-for="item in options2"
            :key="item.label"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <b>元</b>
        </div>
        <!-- 需求列表 -->
        <div class="allWants">
          <center>
          <div v-for="(item, index) in wantsList" :key="index" class="allWants__one">
           <div class="allWants__one-wantTheme">
              <span>{{item.theme}}</span>
           </div>
           <div>
            <span style="color:#476B2D">{{item.name}}</span> <span>{{item.postTime}}发布</span>
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
             <!-- <span>附件：</span><b>{{item.annex}}</b> -->
           </div>
           <el-button :disabled="item.name == name" type="primary" @click="handle(item.wantID)" plain class="allWants__one-handle">处理需求</el-button>
           <span>已有{{item.nums}}人沟通</span>
          </div>
          </center>
        </div>
          <el-pagination
            class="wantsList__page"
            background
            @current-change="getWants"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total=total>
          </el-pagination>
          <el-backtop>
            <div
              style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }"
            >
            TOP
            </div>
          </el-backtop>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      name: sessionStorage.getItem('name'),
      skills: [{id: '全部'}, {id: 'PHP'}, {id: 'C'}, {id: 'C++'}, {id: 'python'},
        {id: 'Java'}, {id: 'javaScript'}, {id: 'Android'}, {id: 'Go'}, {id: 'NodeJS'}, {id: '前端开发'}, {id: 'Vue.js'}, {id: '其它'}],
      timeType: [{id: '全部'}, {id: '按天'}, {id: '按小时'}],
      search: {
        skill: '全部',
        type: '全部',
        hourOrDay: '',
        working: '全部',
        money: '全部',
        dis: true
      },
      options1: [{
        value: '1',
        label: '全部'
      }, {
        value: '2',
        label: '1-5'
      }, {
        value: '3',
        label: '5-10'
      }, {
        value: '4',
        label: '10-15'
      }, {
        value: '5',
        label: '15-20'
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
        label: '1-100'
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
      currentPage: 1,
      total: 0
    }
  },
  components: {
    headpage
  },
  watch: {
    // 每次更改条件时，都要变回到第一页
    'search.skill': function (val) {
      this.currentPage = 1
    },
    'search.type': function (val) {
      this.currentPage = 1
    },
    'search.working': function (val) {
      this.currentPage = 1
    },
    'search.money': function (val) {
      this.currentPage = 1
    }
  },
  created () {
    this.currentPage = Number(sessionStorage.getItem('page')) || 1
    this.search.skill = sessionStorage.getItem('skill') || '全部'
    this.search.type = sessionStorage.getItem('timeType') || '全部'
    this.search.working = sessionStorage.getItem('working') || '全部'
    this.search.money = sessionStorage.getItem('money') || '全部'
    this.getWants()
  },
  beforeUpdate () {
    sessionStorage.setItem('page', this.currentPage)
    sessionStorage.setItem('skill', this.search.skill)
    sessionStorage.setItem('timeType', this.search.type)
    sessionStorage.setItem('working', this.search.working)
    sessionStorage.setItem('money', this.search.money)
  },
  beforeDestroy () {
    sessionStorage.removeItem('page')
    sessionStorage.removeItem('skill')
    sessionStorage.removeItem('timeType')
    sessionStorage.removeItem('working')
    sessionStorage.removeItem('money')
  },
  methods: {
    getWants () {
      // 根据时间类型来动态改变工时
      if (this.search.type === '按小时') {
        this.hourOrDay = '小时'
        this.search.dis = false
      } else if (this.search.type === '按天') {
        this.hourOrDay = '天'
        this.search.dis = false
      } else {
        this.hourOrDay = ''
        this.search.dis = true
        this.search.working = '全部'
      }
      // 改变url
      this.$router.replace({
        path: this.$route.path,
        query: {
          skill: this.search.skill,
          timeType: this.search.type,
          working: this.search.working,
          money: this.search.money,
          page: this.currentPage
        }
      })
      let params = {
        skill: this.search.skill,
        timeType: this.search.type,
        working: this.search.working,
        money: this.search.money,
        page: this.currentPage
      }
      this.wantsList = [] // 每次清空数据
      this.axios.get(this.$api + '/want/getWants?' + this.$qs.stringify(params))
        .then(res => {
          console.log(res)
          let data = res.data.data
          if (data !== null) {
            this.total = data.totalElements // 数据总数
            this.wantsList = data.content
            this.$message({
              message: '为您查找到' + this.total + '条需求',
              type: 'success'
            })
          } else {
            this.$message('抱歉，需求为空')
            this.total = 0
          }
        })
    },
    handle (val) {
      if (sessionStorage.getItem('name') === '' || sessionStorage.getItem('name') === null) {
        this.$alert('请先登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({ path: './login' })
          }
        })
      } else {
        this.$confirm('是否接受此任务？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            customer: sessionStorage.getItem('name'),
            wantID: val
          }
          this.axios.post(this.$api + '/record/addRecord', this.$qs.stringify(params))
            .then(res => {
              // console.log(res)
            })
          // 新窗口打开消息中心页面
          let routerData = this.$router.resolve({path: '/news'})
          window.open(routerData.href, '_blank')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      }
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
  width: 98%;
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
      font-family: '方正粗黑宋简体';
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
      margin-left: 60%;
    }
  }
}
img{
  width: 5%;
}
</style>
