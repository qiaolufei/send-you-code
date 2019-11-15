<template>
    <div>
        <headpage></headpage>
        <personalmenu></personalmenu>
        <el-col :span="20" class="info">
          <h4>个人资料</h4>
          <!-- <hr> -->
           <el-divider content-position="center">{{name}}</el-divider>
          <el-col :span="3">
            <img src="../../img/head.jpg" alt="">
          </el-col>
          <el-col :span="15" class="info__mess">
            <span>用户名： <span>{{name}}</span></span>
            <span class="info__mess-ctime">注册于 {{info.ctime}}</span>
            <el-button class="info__mess-edit" plain icon="el-icon-edit" @click="toEdit">编辑资料</el-button>
            <br>
            <span class="info__mess-introduction">
            简介：
            <span>{{info.introduction}}</span>
            </span>
            <el-divider content-position="center">{{name}}</el-divider>
            <span class="info__mess-sex">
              性别：<span>{{info.sex}}</span>
            </span>
            <span class="info__mess-birth">
              生日：<span>{{info.birth}}</span>
            </span>
            <span class="info__mess-phone">
              手机号：<span>{{info.phone}}</span>
            </span>
            <span class="info__mess-email">
              邮箱：<span>{{info.email}}</span>
            </span>
            <span class="info__mess-weChat">
              微信：<span>{{info.weChat}}</span>
            </span>
          </el-col>
        </el-col>
      <el-dialog title="编辑资料" :visible.sync="isEdit" width="40%" class="editForm">
      <span>性&emsp;别：
      <el-select v-model="editInfo.sex" placeholder="请选择" style="width:30%">
        <el-option
          v-for="item in edit.sex"
          :key="item.value"
          :value="item.value">
        </el-option>
      </el-select>
      </span>
      <span class="editForm-birth">生&emsp;日：
        <el-date-picker
        v-model="editInfo.birth"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
        </el-date-picker>
      </span>
      <span class="editForm-phone">手机号：
        <el-input v-model="editInfo.phone" style="width:40%"></el-input>
      </span>
      <span class="editForm-email">邮&emsp;箱：
        <el-input v-model="editInfo.email" style="width:40%"></el-input>
      </span>
      <span class="editForm-weChat">微&emsp;信：
        <el-input v-model="editInfo.weChat" style="width:40%"></el-input>
      </span>
      <span class="editForm-introduction">
        <el-input v-model="editInfo.introduction" type="textarea" :rows="3" maxlength="50" resize="none"
          show-word-limit placeholder="请输入您的简介" style="width:80%"></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="pushInfo">确定</el-button>
      </span>
      </el-dialog>
    </div>
</template>
<script>
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
      name: sessionStorage.getItem('name'),
      info: {
        ctime: '',
        introduction: '',
        sex: '',
        birth: '',
        phone: '',
        email: '',
        weChat: '',
        alipay: ''
      },
      edit: {
        sex: [{value: '男'}, {value: '女'}]
      },
      editInfo: {
        sex: '',
        birth: '',
        phone: '',
        email: '',
        weChat: '',
        introduction: ''
      },
      isEdit: false
    }
  },
  components: {
    headpage,
    personalmenu
  },
  methods: {
    getUserInfo () {
      let params = {
        name: this.name
      }
      this.axios.get(this.$api + '/user/getUserInfo?' + this.$qs.stringify(params))
        .then(res => {
          // console.log(res)
          if (res.data.code === 0) {
            let data = res.data.data
            this.editInfo.sex = this.info.sex = data.sex
            this.editInfo.birth = this.info.birth = data.birth
            this.editInfo.introduction = this.info.introduction = data.introduction
            this.editInfo.phone = this.info.phone = data.phone
            this.editInfo.email = this.info.email = data.email
            this.editInfo.weChat = this.info.weChat = data.weChat
            this.info.ctime = data.ctime.slice(0, 10)
          }
        })
    },
    toEdit () {
      this.isEdit = true
    },
    pushInfo () {
      let params = {
        sex: this.editInfo.sex,
        birth: this.editInfo.birth,
        introduction: this.editInfo.introduction,
        phone: this.editInfo.phone,
        email: this.editInfo.email,
        weChat: this.editInfo.weChat,
        name: this.name
      }
      console.log(this.editInfo.birth)
      this.axios.post(this.$api + '/user/updateUser', this.$qs.stringify(params))
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.$message({
              message: '修改成功',
              type: 'success',
              duration: 1000
            })
            this.isEdit = false
            this.$router.go(0)
          }
        })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>
<style lang="less" scoped>
.info{
  font-size: 0.3rem;
  font-family: 'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;
  margin-left: 1%;
  color: #3d3d3d;
  &__mess{
    margin: 1% 0 0 1%;
    &-ctime{
      margin-left: 5%;
      font-size: 0.2rem;
      color: #545c64;
    }
    &-edit{
      margin-left: 20%
    }
    &-introduction,&-sex,&-birth,&-phone,&-email,&-weChat{
      display: block;
      margin-top: 2%
    }
  }
}
h4{
  font-size: 0.4rem;
}
img{
  width: 80%;
  border-radius: 50%;
}
.editForm{
  &-birth,&-phone,&-email,&-email,&-weChat,&-introduction{
    display: block;
    margin-top: 1%
  }
}
</style>
