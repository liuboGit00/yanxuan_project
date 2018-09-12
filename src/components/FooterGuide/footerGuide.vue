<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path === '/home'}" @click="$router.replace('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/shiwu'}" @click="$router.replace('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-hui"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/category'}" @click="$router.replace('/category')">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/shopping'}" @click="$router.replace('/shopping')">
      <span class="item_icon">
        <i class="iconfont icon-tab-bar--n"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: $route.path === '/person'}" @click="$router.replace('/person')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
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
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color tomato
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
