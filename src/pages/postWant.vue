<template>
    <div class="postWant">
        <headpage></headpage>
        <div class="want">
            <label>需求主题<b>*</b></label><el-input class="input1" v-model="want.theme" placeholder="请输入需求主题"></el-input>
            <br><br>
            <label>技术标签<b>*</b></label>
            <el-select v-model="want.skills" @change="isable" multiple placeholder="请选择" style="width:35%">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.id"
                :value="item.id">
              </el-option>
            </el-select>
            <span style="font-size:0.2rem;color:#D54B28;margin-left:1%">最多可添加3个标签</span>
            <br><br>
            <label>具体需求<b>*</b></label><el-input class="input1" type="textarea" v-model="want.content" :rows="4" placeholder="请输入具体需求内容" maxlength="500" resize="none" show-word-limit></el-input>
            <br><br>
            <label>附件</label>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <br><br>
            <label>工作时间类型<b>*</b></label>
              <el-radio-group v-model="want.timeType"  @change="getTimeType()">
                <el-radio class="radio" :label="0">按小时</el-radio>
                <el-radio class="radio" :label="1">按天</el-radio>
              </el-radio-group>
            <br><br>
            <span>期望开始工作时间<b>*</b></span>
              <el-date-picker
                v-model="want.startTime"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期时间">
              </el-date-picker>
            <br><br>
            <span>预期工时<b>*</b></span><el-input placeholder="数字" v-model="want.working" class="input2"></el-input>
            <span style="color:#5CBB7A">{{hourOrDay}}</span>
            <span style="margin-left:5%">总薪资<b>*</b></span><el-input placeholder="数字" v-model="want.salary" class="input2"></el-input>
            <span style="color:red">元</span>
            <h5>温馨提示：请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等敏感内容</h5>
            <el-button class="post" @click="postWant" type="primary">发布需求</el-button>
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
      name: sessionStorage.getItem('name'),
      want: {
        theme: '',
        skills: [],
        content: '',
        annex: '',
        timeType: 0,
        startTime: '',
        working: '',
        salary: ''
      },
      options: [ {id: 'PHP'}, {id: 'C'}, {id: 'C++'}, {id: 'python'},
        {id: 'Java'}, {id: 'javaScript'}, {id: 'Android'}, {id: 'Go'}, {id: 'NodeJS'}, {id: '前端开发'}, {id: '其它'}],
      hourOrDay: '小时'
    }
  },
  components: {
    headpage,
    footpage
  },
  methods: {
    isable () {
      if (this.want.skills.length > 3) {
        this.want.skills = this.want.skills.slice(0, 3)
        this.$message({
          message: '最多可添加3个标签',
          type: 'warning'
        })
      }
    },
    postWant () {
      this.$confirm('确认发布需求?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          theme: this.want.theme,
          name: this.name,
          skills: this.want.skills.toString(),
          content: this.want.content,
          timeType: this.want.timeType,
          startTime: this.want.startTime,
          working: this.want.working,
          salary: this.want.salary,
          annex: this.want.annex
        }
        this.axios.post(this.$api + '/want/addWant', this.$qs.stringify(params))
          .then(res => {
            if (res.data.code === 0) {
              this.$message({
                type: 'success',
                message: '发布成功',
                duration: 2000
              })
            } else {
              this.$message({
                type: 'error',
                message: '发布失败',
                duration: 2000
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        })
      })
    },
    // 动态改变工时单位
    getTimeType () {
      if (this.want.timeType === 0) {
        this.hourOrDay = '小时'
      } else {
        this.hourOrDay = '天'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.postWant{
  font-size: 0.3rem;
  color: #656266;
}
.want{
  margin:3% 0 0 20%
}
.input1{
  width: 60%;
}
.input2{
  width: 8%
}
label{
  display: block;
}
.radio{
  display: inline;
}
b{
  color: red
}
.post{
  width: 40%;
}
</style>
