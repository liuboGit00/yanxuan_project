<template>
  <div class="container">
    <div class="tops">
      <div class="search">
        <a href="javascript:;">
          <img src="../../../static/image/logo.png" alt="">
        </a>
        <div class="input">
          <input type="text" placeholder="搜索商品, 共13111款好物">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <div class="nav">
        <div class="navList clearFloat" ref="navList">
          <span  @click="changeNav(index)"
                 v-for="(cate,index) in homeInfo.cateList"
                  :class="{on: navIsfoc === index}" >{{cate.name}}</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focus,index) in homeInfo.focusList" :key="index">
            <a href="javascript:" class="link_to_food" >
              <div class="food_container">
                <img :src="focus.picUrl">
              </div>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ul>
      <li>
        <i class="iconfont icon-qq"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="iconfont icon-qq"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-qq"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="pinpai">
      <header>
        <span>品牌制造商直供</span>
        <i class="iconfont icon-qq"></i>
      </header>
      <ul v-if="homeInfo.tagList">
        <li v-for="(tag,index) in homeInfo.tagList.slice(0,4)" :key="index">
          <p>海外制造商</p>
          <p>9.9元起</p>
          <p>上新</p>
          <img :src="tag.picUrl" alt="">
        </li>
      </ul>
    </div>
    <div class="xinpin">
      <header>
        <div>
          <span>新品首发</span>
          <div class="look">查看全部></div>
        </div>
      </header>
      <div class="newCon">
        <ul ref="newGoods" v-if="homeInfo.newItemNewUserList">
          <li v-for="(newItem,index) in homeInfo.newItemNewUserList.slice(0,5)" :key="index">
            <img :src="newItem.listPicUrl" alt="">
            <p class="ellipsis">{{newItem.name}}</p>
            <p class="ellipsis">{{newItem.simpleDesc}}</p>
            <span>￥{{newItem.retailPrice}}</span>
          </li>
          <li class="all">
            <div>查看全部</div>
          </li>
        </ul>
      </div>

    </div>
    <div class="hotGoods">
      <header>
        <div>
          <span>人气推荐 好物推荐</span>
          <div class="look">查看全部></div>
        </div>
      </header>
      <div class="hotGoodsCon">
        <ul ref="hotGoodsCon" v-if="homeInfo.popularItemList">
          <li v-for="(item,index) in homeInfo.popularItemList.slice(0,5)" :key="index">
            <div>
              <img :src="item.listPicUrl" alt="">
            </div>
            <p class="blank" v-show="!item.promTag"></p>
            <p class="mark" v-show="item.promTag">{{item.promTag}}</p>
            <p class="ellipsis">{{item.name}}</p>
            <p class="ellipsis">{{item.simpleDesc}}</p>
            <span>￥{{item.retailPrice}}</span>
          </li>
          <li class="all">
            <div>查看全部</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="timer">
      <div class="timeCon clearFloat">
        <div class="computedTime">
          <p>严选限时购</p>
          <div class="time">
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="minute">00</span>
            <span class="colon">:</span>
            <span class="second">00</span>
          </div>
          <div class="nextTime">下一场 <span>10:00</span>开始</div>
        </div>
        <div class="person">
          <div class="price">
            <span>$7299</span>
            <span>$1299</span>
          </div>
        </div>
      </div>
    </div>
    <div class="welfare">
      <img src="../../../static/image/fuli.jpg" alt="">
    </div>
    <div class="jujia" v-for="(item,index) in homeInfo.cateList" :key="index">
      <div>{{item.name}}</div>
      <ul class="jujiaCon" v-if="homeInfo.cateList">
        <li v-for="(cate,index) in item.itemList.slice(0,5)" :key="index">
          <div class="imgcon">
            <img :src="cate.listPicUrl" alt="">
          </div>
          <p class="ellipsis title">{{cate.simpleDesc}}</p>
          <p class="discount" v-show="cate.promTag">{{cate.promTag}}</p>
          <p class="dsc">{{cate.name}}</p>
          <p class="price">${{cate.retailPrice}}</p>
        </li>
        <li>
          <p>更多居家好</p>
          <i class="icon icon-qq"></i>
        </li>
      </ul>
    </div>
    <footer>
      <ul>
        <li>下载App</li>
        <li>电脑版</li>
      </ul>
      <p>网易公司版权所有 © 1997-</p>
      <p>食品经营许可证：JY13301080111719</p>
    </footer>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import 'swiper/dist/css/swiper.min.css'
    import Swiper from 'swiper'
    import {mapState} from 'vuex'
    export default {
        props: {},
        data() {
            return {
              navIsfoc: 0,
              scrollTop: 0
            }
        },
        mounted(){
          if (!this.homeInfo.cateList){
            return
          }
          this._computedWidth()

        },
        watch:{
          homeInfo(){
            this.$nextTick(() => {
              this._computedWidth()
            })
          }
        },
        computed:{
          ...mapState(['homeInfo'])
        },
        methods:{
          changeNav(index){
            this.navIsfoc = index
          },
          _computedWidth(){
            //计算nav的宽度
            const navList = this.$refs.navList
            navList.style.width = navList.children.length*50 + 'px'
            //nav滑动
            new BScroll('.nav',{
              click : true,
              scrollX: true
            })
            //轮播图
            new Swiper('.swiper-container', {
              loop: true,  // 循环轮播
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            })
            //新品内容滑动
            //计算宽度
            const newGoods = this.$refs.newGoods
            newGoods.style.width = newGoods.children.length*160 + 'px'
            //左右滑动
            new BScroll('.newCon',{
              click : true,
              scrollX: true
            })
            //热销内容滑动
            const hotGoodsCon = this.$refs.hotGoodsCon
            hotGoodsCon.style.width = hotGoodsCon.children.length*160 + 'px'
            new BScroll('.hotGoodsCon',{
              click : true,
              scrollX: true
            })
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container
    background-color #eeeeee
    margin-bottom 52px
    width 100%
    >div.tops
      position fixed
      left 0
      top 0
      z-index 99
      padding-bottom 10px
      background-color #ffffff
      width 100%
      .search
        height 30px
        padding 6px
        >a
          float left
          width 70px
          height 20px
          margin 5px 3px
          &>img
            width 100%
            height 100%
        >.input
          height  100%
          position relative
          >input
            box-sizing border-box
            width 260px
            height 100%
            background-color #eee
            border 1px solid #eee
            border-radius 8px
            outline none
            font-size 14px
            padding-left 40px
            margin-left 15px
          >i
            margin-left -247px
      .nav
        position relative
        width 100%
        transform translateZ (1px)
        color #333333
        .navList
          span
            float left
            height 40px
            text-align center
            line-height 50px
            font-size 14px
            margin  0 10px
            box-sizing border-box
            &.on
              color tomato
              border-bottom 2px solid red

    .banner
      margin-top 50px
      width 100%
      height 200px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            width 100%
            .link_to_food
              width 100%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 100%
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

    ul
      background-color #ffffff
      height 40px
      display flex
      color #666666
      font-size 14px
      justify-content space-around
      li
        line-height 40px
    .pinpai
      background-color #ffffff
      margin-top 15px
      >header
        line-height 55px
        text-align center
      >ul
        height 240px
        display flex
        flex-wrap wrap
        li
          position relative
          padding 8px
          width 170px
          height 100px
          background-color #eeeeee
          box-sizing border-box
          margin 5px
          p
            line-height 16px
          img
            position absolute
            top 0
            right 0
            width 150px
    .xinpin
      header
        position relative
        margin-top 15px
        height 130px
        background url("../../../static/image/xinpin.png")
        background-size 375px 130px
        >div
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
          width 120px
          height 60px
          text-align center
          padding 10px 0
          >span
            display block
            height 30px
            line-height 30px
            color #8BA0B6
          .look
            width 100%
            height 30px
            line-height 30px
            background #D8E5F1
            color #8BA0B6
            font-size 14px
      .newCon
        background-color #ffffff
        ul
          height 240px
          display flex
          flex-wrap wrap
          li
            width 140px
            padding 16px 5px
            box-sizing border-box
            margin 2px 8px
            img
              width 100%
            p
              line-height 18px
            span
              color tomato
            &.all
              >div
                width 100%
                height 130px
                line-height 130px
                border 4px solid #eeeeee
                text-align center
                padding-right 10px
    .hotGoods
      header
        position relative
        margin-top 15px
        height 130px
        background url("../../../static/image/hotGoods.png")
        background-size 375px 130px
        >div
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
          width 140px
          height 60px
          text-align center
          padding 10px 0
          >span
            display block
            height 30px
            line-height 30px
            color #B4A078
          .look
            width 100%
            height 30px
            line-height 30px
            background #F4E9CB
            color #B4A078
            font-size 14px
      .hotGoodsCon
        background-color #ffffff
        ul
          height 240px
          display flex
          flex-wrap wrap
          li
            width 140px
            padding 5px 5px
            box-sizing border-box
            margin 2px 8px
            div
              width 100%
              height 140px
              background-color #eeeeee
              img
                width 100%
            p
              line-height 18px
              &.blank
                height 16px
              &.mark
                width 40px
                height 16px
                background-color tomato
                border 1px solid inherit
                border-radius 5px
                text-align center
                line-height 16px
                color #ffffff
                font-size 14px
            span
              color tomato
            &.all
              >div
                width 100%
                height 130px
                line-height 130px
                border 4px solid #eeeeee
                text-align center
    .timer
      background-color #ffffff
      margin-top 10px
      .timeCon
        width 330px
        height 160px
        background-color #ffffff
        padding 20px 20px 0
        .computedTime
          float left
          width 170px
          height 100%
          background-color #ffffff
          padding 14px
          box-sizing border-box
          p
            letter-spacing 12px
            padding-top 10px
          >div
            span
              &.hours,&.minute,&.second
                display inline-block
                width 30px
                height 30px
                background-color #444
                color #ffffff
                text-align center
                line-height 30px
              &.colon
                padding 0 3px
          .div.nextTime
            font-size 14px
          .time
            margin 12px 2px
        .person
          position relative
          float left
          width 160px
          height 100%
          background url("../../../static/image/time.png")
          background-position 10px -8px
          background-size 160px 160px
          >div
            position absolute
            top 80px
            right 10px
            width 48px
            height 48px
            border 1px solid #cccccc
            border-radius 50%
            background-color rgba(244,143,24,.95)
            padding 4px
            box-sizing border-box
            span
              color #ffffff
              font-size 12px
    .welfare
      margin-top 10px
      img
        width 100%
    .jujia
      margin-top 10px
      >div
        line-height 60px
        text-align center
        font-size 14px
        padding-bottom 0
        background-color #ffffff
      ul.jujiaCon
        height  850px
        display flex
        flex-wrap wrap
        justify-content space-around
        li
          width 170px
          height 268px
          line-height 30px
          margin-top 10px
          .imgcon
            width 100%
            height 170px
            background-color #f4f4f4
            img
              width 100%
              height 100%
          >p
            &.title
              background-color #F1ECE2
              color #9F8A60
            &.discount
              width 30px
              height 20px
              background-color tomato
              color #ffffff
              line-height 20px
              font-size 14px
              margin 5px 0
            &.dsc
              font-size 14px
            &.price
              color red
              line-height 14px
          &:last-child
            height 170px
            background-color #f4f4f4
            text-align center
            font-size 18px
            line-height 20px
            p
              margin-top 40%
              margin-bottom 20px
    footer
      color #ffffff
      background #414141
      padding 20px 0
      ul
        justify-content center
        display flex
        background #414141
        li
          width 80px
          height 30px
          border 1px solid #ffffff
          text-align center
          line-height 30px
          color #ffffff
          margin 0 5px
      >p
        text-align center
        line-height 34px
</style>
