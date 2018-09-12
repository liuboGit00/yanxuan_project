<template>
  <div class="top" @click="toTop">
    <i class="iconfont icon-arrowup"></i>
  </div>
</template>
<script>
    export default {
        props: {},
        data() {
            return {
              scrollTop: 600
            }
        },
        mounted(){
          window.onscroll = function () {
            console.log(1111)
          }
        },
        comouted:{
          scrollTop(){
            return document.body.scrollTop
          }
        },
        methods:{
          toTop(){
            if (this.timer){
              return
            }
            let top = document.body.scrollTop
            this.timer = setInterval( () =>  {
              document.body.scrollTop = document.documentElement.scrollTop =  top;
              this.scrollTop = top
              if (top <= 0){
                clearInterval(this.timer)
                this.timer = null
              }
              top-=20
            })
          }
        },
        watch:{

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top
    position fixed
    right 15px
    bottom 63px
    width 40px
    height 40px
    border-radius 50%
    background-color #cccccc
    text-align center
    line-height 40px
    >i
      font-size 30px
      color #999
</style>
