<template>
    <div >
        <button id="a">hhh</button>
    </div>
</template>
<script>
import Vue from 'vue'
import headpage from '@/components/header'
import personalmenu from '@/components/personal_menu'
export default {
  data () {
    return {
      msg: '首页'
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
let m = new Vue({
  methods: {
    h () {
      console.log('hhh')
    }
  }
})
$(document).ready(function () {
  $('#a').click(function () {
    m.h()
    console.log('aaa')
  })
})
</script>
<style lang="less" scoped>
.div1{
  width: 300px;
  height: 300px;
  background-color: red
}
</style>
