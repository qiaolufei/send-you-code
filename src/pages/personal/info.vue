<template>
    <div>
        <headpage></headpage>
        <personalmenu></personalmenu>
    </div>
</template>
<script>
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
      name: sessionStorage.getItem('name')
    }
  },
  components: {
    headpage,
    personalmenu
  },
  methods: {
    getUserInfo () {
      console.log('......')
      let params = {
        name: this.name
      }
      this.axios.get(this.$api + '/user/getUserInfo?' + this.$qs.stringify(params))
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>
<style lang="less" scoped>
</style>
