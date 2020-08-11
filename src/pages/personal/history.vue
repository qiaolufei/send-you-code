<template>
    <div>
        <headpage></headpage>
        <personalmenu></personalmenu>
        <div class="history">暂无历史任务</div>
    </div>
</template>
<script>
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
    }
  },
  components: {
    headpage,
    personalmenu
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.history{
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
}
</style>
