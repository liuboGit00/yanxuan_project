<template>
  <div class="shopContainer">
    <header>购物车 <span>领卷</span></header>
    <ul>
      <li>30天无忧退货</li>
      <li>48小时快速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <div class="shop">
      <img src="../../../static/image/shopp.png" alt="">
    </div>
    <div class="login">登陆</div>
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
    .shopContainer
      width 100%
      height 100%
      background-color #f4f4f4
      header
        line-height 50px
        background-color #ffffff
        color #666666
        text-align center
        >span
          float right
          margin-left -55px
          margin-right 21px
      >ul
        height 30px
        display flex
        justify-content space-around
        font-size 12px
        color #999999
        padding 10px 0
        li
          list-style circle inside
      >div.shop
        width 100%
        margin-top 120px
        text-align center
        vertical-align middle
        img
          width 124px
          height 124px
      >div.login
        position absolute
        left 0
        right 0
        margin auto
        width 240px
        height 45px
        text-align center
        line-height 45px
        color #ffffff
        font-size 14px
        margin-top 15px
        background-color #b4282d
</style>
