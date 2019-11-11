<template>
    <div class="myWants">
      <headpage></headpage>
      <personalmenu></personalmenu>
      <div class="myWants__list">
        <div v-for="(item, index) of myWants" :key="index" class="myWants__list-want">
          <el-row type="flex">
            <el-col :span="1"></el-col>
            <el-col :span="7"><span>{{item.postTime}}</span></el-col>
            <el-col :span="8"><span>{{item.theme}}</span></el-col>
            <el-col :span="6"><el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button></el-col>
          </el-row>
        </div>
      </div>
      <el-pagination
            class="myWants__page"
            @current-change="getMyWants"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total=total>
          </el-pagination>
    </div>
</template>
<script>
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
      currentPage: 1,
      total: 0,
      myWants: []
    }
  },
  components: {
    headpage,
    personalmenu
  },
  created () {
    this.currentPage = Number(sessionStorage.getItem('page1')) || 1
    this.getMyWants(this.currentPage)
  },
  beforeUpdate () {
    sessionStorage.setItem('page1', this.currentPage)
  },
  beforeDestroy () {
    sessionStorage.setItem('page1', 1)
  },
  methods: {
    getMyWants (currentPage) {
      this.currentPage = currentPage
      this.$router.replace({
        path: this.$route.path,
        query: {
          name: sessionStorage.getItem('name').toString(),
          page: this.currentPage
        }
      })
      let params = {
        page: this.currentPage,
        name: sessionStorage.getItem('name')
      }
      this.axios.get(this.$api + '/want/getWantsByUser?' + this.$qs.stringify(params))
        .then(res => {
          let data = res.data.data
          this.total = data.totalElements
          this.myWants = data.content
        })
    }
  }
}
</script>
<style lang="less" scoped>
.myWants{
  &__list{
    margin: 3% 0 0 20%;
    &-want{
    border: 1px solid #545c64;
    border-radius: 5px;
    font-size: 0.3rem;
    margin-top: 2%;
    height: 50px;
    line-height: 50px;
    width: 60%
    }
  }
  &__page{
    margin: 2% 0 0 30%
  }
}
</style>
