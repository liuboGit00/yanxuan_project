<template>
  <div class="container ">
    <input type="text" placeholder="搜索商品 共123件好物">
    <i class="iconfont icon-sousuo"></i>
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container
    height 44px
    position relative
    bottom-border-1px(#ddd)
    input
      margin 9px 15px
      width 345px
      height 28px
      background-color #ddd
      padding-left 100px
      box-sizing border-box
      font-size 12px
      border-radius 10px
      outline none
      line-height 28px
    i
      position absolute
      left 90px
      top 16px
      font-size 16px
      display inline-block
      vertical-align middle
</style>
