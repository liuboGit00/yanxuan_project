<template>
  <div class="loginCon">
    <HeaderTop/>
    <div class="imgCon">
      <img src="../../../static/image/login.png" alt="">
    </div>
    <form action="javascript:;">
      <p class="errorMsg">{{errMsg}}</p>
      <div class="Lg ph " :class="{off: this.$route.path === '/messageLg'}">
        <input type="text" placeholder="请输入手机号" v-model="phone">
        <div class="code">
          <input type="text" placeholder='请输入短信验证码' v-model="msgCode">
          <span class="codeBtn" @click="sendCode">{{computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}}</span>
        </div>
        <p>
          <span class="error">遇到问题</span>
          <span class="change">使用密码验证登陆</span>
        </p>
        <div class="login" @click="login('phone')">登陆</div>
        <div class="other" @click="$router.replace('/person')">其它登陆方式</div>
      </div>
      <div class="Lg mes" :class="{off: this.$route.path === '/phoneLg'}">
        <input type="text" placeholder="用户名" v-model="user">
        <div class="code">
          <input type="text" placeholder='密码' v-model="password">
        </div>
        <p>
          <span class="error">注册账号</span>
          <span class="change">忘记密码</span>
        </p>
        <div class="login" @click="login('msg')">登陆</div>
        <div class="other" @click="$router.replace('/person')">其它登陆方式</div>
      </div>
    </form>
  </div>
</template>
<script>
    export default {
      props: {},
      data() {
        return {
          errMsg: null,
          phone: null,
          msgCode: null,
          user: null,
          password: null,
          computeTime: 0, // 倒计时剩余的时间
        }
      },
      methods: {
        login(method) {
          this.errMsg = null
          if (method === 'phone') {
            if (!/^1\d{10}$/.test(this.phone)) {
              this.errMsg = '请输入正确的手机号格式'
              return
            } else if (!this.msgCode) {
              this.errMsg = '请输入短信验证码'
              return
            }
          } else if (method === 'msg') {
            if (!this.user) {
              this.errMsg = '请输入用户名'
              return
            } else if (!this.password) {
              this.errMsg = '请输入密码'
              return
            }
          }

        },
        // 发送一次性短信验证码
        sendCode() {
          if (this.computeTime > 0){
            return
          }
          /*1. 实现倒计时功能*/
          this.computeTime = 30
          // 启循环定时器, 改变computedTime
          const interverId = setInterval(() => {
            this.computeTime--
            // 当计时达到最小值时, 清除定时器
            if (this.computeTime <= 0) {
              this.computeTime = 0
              clearInterval(interverId)
            }
          }, 1000)
        },
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginCon
    >.imgCon
      padding 80px 0 40px
      text-align center
      img
        width 96px
        height 30px

    >form
      width 90%
      margin 45px auto
      >p.errorMsg
        text-align center
        color red
      >div.off
        display none
      >.Lg
        input
          margin 10px 0
          width 100%
          height 40px
          outline none
          border-bottom 1px solid #ccc
          padding-left 27px
          font-size 12px
          box-sizing border-box
          letter-spacing 1px
          &::-webkit-input-placeholder{ /*WebKit browsers*/
            color: #999;
          }
        div.code
          position relative
          span.codeBtn
            position absolute
            top 5px
            right 0
            width 70px
            height 30px
            text-align center
            line-height 30px
            color #333
            font-size 12px
            border 1px solid #cccccc
            border-radius 5px
        >p
          display flex
          justify-content space-between
          font-size 14px
          line-height 30px
          width 90%
          margin auto
          span.error
            color #999999
        >div.login,>div.other
          width 100%
          height 40px
          line-height 40px
          text-align center
          font-size 14px
          border-radius 5px
          margin 22px 0
        >div.login
          background-color #b4282d
          color #ffffff
        >div.other
          color #b4282d
          border 1px solid #b4282d
</style>
