<template>
    <div class="postWant">
        <headpage></headpage>
        <div class="want">
            <label>需求主题<b>*</b></label><el-input class="input1" v-model="want.theme" placeholder="请输入需求主题"></el-input>
            <br><br>
            <label>技术标签<b>*</b></label><a href="#"><i class="el-icon-circle-plus"></i>添加标签</a><span style="font-size:0.2rem;color:#D54B28;margin-left:1%">最多可添加3个标签</span>
            <br><br>
            <label>具体需求<b>*</b></label><el-input class="input1" type="textarea" :rows="3" placeholder="请输入具体需求内容" show-word-limit="true"></el-input>
            <br><br>
            <label>图片描述</label>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <br><br>
            <label>工作时间类型<b>*</b></label>
              <el-radio-group v-model="radio">
                <el-radio class="radio" :label="1">按小时</el-radio>
                <el-radio class="radio" :label="2">按天</el-radio>
              </el-radio-group>
            <br><br>
            <span>期望开始工作时间<b>*</b></span>
              <el-date-picker
                v-model="time"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            <span>预期工时<b>*</b></span><el-input placeholder="小时|天" class="input2"></el-input>
            <span>总薪资<b>*</b></span><el-input placeholder="元" class="input2"></el-input>
            <h5>温馨提示：请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等敏感内容</h5>
            <el-button class="post" type="primary">发布需求</el-button>
        </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
export default {
  data () {
    return {
      want: {
        theme: ''
      },
      radio: 1,
      time: ''
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
