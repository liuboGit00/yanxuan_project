<template>
  <div class="headerCon">
    <div class="iconfont icon-shouye" @click="$router.replace('/home')"></div>
    <img src=../../../static/image/logo.png alt="">
    <div class="iconCon">
      <div class="iconfont icon-fangdajing"></div>
      <div class="iconfont icon-icon"></div>
    </div>
  </div>
</template>
<script>
    export default {
        props: {},
        data() {
            return {}
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  div.headerCon
    height 40px
    background-color #fafafa
    padding 2px
    position fixed
    left 0
    top 0
    z-index 99
    width 100%
    >div.icon-shouye
      float left
      font-size 36px
      margin-right 33px
    >div.iconCon
      float right
      >div
        float left
        margin 5px 6px
        font-size 24px
    >img
      margin 5px 15%
      width 100px
</style>
