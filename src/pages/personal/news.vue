<template>
    <div class="news">
        <headpage></headpage>
        <personalmenu></personalmenu>
        <br><br><br>
        <div class="news__list">
          <!-- 联系人列表 -->
          <el-tabs tab-position="left" style="height: 400px;" @tab-click="changeChat">
            <el-tab-pane v-for="(item, index) in recordList" :key="index" :label="name==item.customer?item.wantInfo.name:item.customer" :name="item.recordID.toString()">
              <!-- 聊天框 -->
              <div style="height:400px">
                <div class="news__list-theme">
                {{item.wantInfo.theme}}
                </div>
                <div class="news__list-chat" id="chat">
                  <div :class="name==item.user?'me':'you'" v-for="(item, index) in chatList" :key="index">
                    <span>{{item.word}}</span>
                  </div>
                </div>
                <div class="news__list-in">
                  <el-input v-model="msg" class="news__list-in__input" @keyup.enter.native="send()" clearable></el-input>
                  <el-button type="primary" @click="send()" class="news__list-in__btn">发送</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
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
      name: sessionStorage.getItem('name'),
      recordList: [],
      info: [],
      recordID: 0,
      chatList: []
    }
  },
  components: {
    headpage,
    personalmenu
  },
  created () {
  },
  methods: {
    // 获取到创建的通讯记录
    getRecords () {
      let params = {
        customer: this.name
      }
      this.axios.get(this.$api + '/record/getRecords?' + this.$qs.stringify(params))
        .then(res => {
          this.recordList = res.data.data
          this.recordID = res.data.data[0].recordID
        })
    },
    // 选择通信对象
    changeChat (tab) {
      this.recordID = tab.$options.propsData.name
      this.getChats()
    },
    // 根据通讯记录的id获取具体的消息记录
    getChats () {
      this.chatList = []
      let params = {
        recordID: this.recordID
      }
      this.axios.get(this.$api + '/chat/getChats?' + this.$qs.stringify(params))
        .then(res => {
          let data = res.data
          if (data.code === 0) {
            this.chatList = data.data
            // 让滚动条每次都在最下方
            $('#chat').scrollTop($('#chat')[0].scrollHeight)
          }
        })
    },
    // 发送消息
    send () {
      let params = {
        recordID: this.recordID,
        user: this.name,
        word: this.msg
      }
      this.axios.post(this.$api + '/chat/addChat', this.$qs.stringify(params))
        .then(res => {
          if (res.data.code === 0) {
            this.msg = ''
          }
        })
    }
  },
  mounted () {
    this.getRecords()
    setTimeout(() => {
      this.getChats()
    }, 1000)
    // 每五秒刷新一次消息
    setInterval(() => {
      this.getChats()
    }, 5000)
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
      text-align: center;
      color: #545c64;
      font-size: 0.3rem;
      border-bottom:1px solid gainsboro;
    }
    &-chat{
      width: 98%;
      padding: 1% 1% 1% 1%;
      height: 77%;
      font-size: 0.25rem;
      overflow: auto; // 支持无限滚动
    }
    &-in{
      border-top:1px solid gainsboro;
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
// 聊天消息的样式，根据name来判断
.you{
        text-align: left;
        margin-top: 3%;
        span{
          padding: 1% 1% 1% 1%;
          border: 1px solid gainsboro;
          border-radius: 5px;
        }
    }
.me{
        text-align: right;
        margin-top: 3%;
        span{
          padding: 1% 1% 1% 1%;
          background-color: #9EEA6A;
          border-radius: 5px;
        }
      }
</style>
