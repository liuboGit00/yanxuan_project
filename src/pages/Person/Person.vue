<template>
  <div class="loginContainer">
    <HeaderTop />
    <div class="imgCon">
      <img src="../../../static/image/login.png" alt="">
    </div>
    <div class="phoneLogin"><i class="iconfont icon-qq"></i>手机号码登陆</div>
    <div class="emailLogin"><i class="iconfont icon-qq"></i>邮箱账号登陆</div>
    <p><a href="javascript:;">手机快捷注册 &gt; </a></p>
    <ul class="icons">
      <li>
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </li>
      <li>|</li>
      <li>
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </li>
      <li>|</li>
      <li>
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </li>
    </ul>
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
  .loginContainer
    background-color #F2F5F4
    height 100%
    width 100%
    .imgCon
      height 102px
      width 100%
      text-align center
      padding 120px 0 60px
      line-height 102px
      >img
        width 133px
        height 45px
    .phoneLogin
      width 90%
      height 46px
      text-align center
      line-height 46px
      color #ffffff
      background-color #b4282d
      margin auto
    .emailLogin
      width 90%
      height 46px
      text-align center
      line-height 46px
      color #b4282d
      border 1px solid #b4282d
      margin 15px auto
    >p
      text-align center
      font-size 14px
      color
      a
        color #666
    >ul.icons
      width 65%
      line-height 18px
      display flex
      justify-content space-between
      margin 190px auto 0
      color #bbb
      font-size 14px
</style>
