<template>
  <div class="container">
    <HeaderTop />
    <div class="banner">
      <div class="swiper-container" v-if="shiwuInfo.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(shiwu,index) in shiwuInfo.banner" :key="index">
            <a href="javascript:" class="link_to_food" >
              <div class="food_container">
                <img :src="shiwu.picUrl">
              </div>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="artical">
      <ul ref="articalCon">
        <li v-for="(item,index) in shiwuInfo.column" :key="index">
          <div class="imgCon">
            <img :src="item.picUrl" alt="">
            <p>{{item.articleCount}}</p>
          </div>
          <p class="ellipsis">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="recommend">
      <p class="recomTitle">为你推荐</p>
      <div class="recomMain">
        <div class="news" v-if="shiwuInfo.recommendOne">
          <div class="mainNews">
            <img :src="shiwuInfo.recommendOne.picUrl" alt="">
            <span class="mark">{{shiwuInfo.recommendOne.nickname}}</span>
            <div class="pricedsc clearFloat">
              <span>{{shiwuInfo.recommendOne.title}}</span>
              <p class="price"><span>{{shiwuInfo.recommendOne.priceInfo}}</span>元起</p>
            </div>
            <p>{{shiwuInfo.recommendOne.subTitle}}</p>
          </div>
          <div class="newsList1 clearFloat">
            <div class="person">
              <div class="auther">
                <img :src="shiwuInfo.recommendOne.avatar" alt="">
                <span>饮食组</span>
              </div>
              <div class="title ellipsis">{{shiwuInfo.recommendOne.subTitle}}</div>
              <div class="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="pic ">
              <img :src="shiwuInfo.recommendOne.avatar" alt="">
              <span class="markNew">{{shiwuInfo.recommendOne.typeName}}</span>
            </div>
          </div>
          <div class="newsList1 clearFloat">
            <div class="person">
              <div class="auther">
                <img :src="shiwuInfo.recommendThree.avatar" alt="">
                <span>饮食组</span>
              </div>
              <div class="title ellipsis">{{shiwuInfo.recommendThree.subTitle}}</div>
              <div class="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="pic ">
              <img :src="shiwuInfo.recommendThree.avatar" alt="">
              <span class="markNew">{{shiwuInfo.recommendThree.typeName}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="recomMain">
        <div class="news" v-if="shiwuInfo.recommendTwo">
          <div class="mainNews">
            <img :src="shiwuInfo.recommendTwo.picUrl" alt="">
            <span class="mark">{{shiwuInfo.recommendTwo.nickname}}</span>
            <div class="pricedsc clearFloat">
              <span>{{shiwuInfo.recommendTwo.title}}</span>
              <p class="price"><span>{{shiwuInfo.recommendTwo.priceInfo}}</span>元起</p>
            </div>
            <p>{{shiwuInfo.recommendTwo.subTitle}}</p>
          </div>
          <div class="newsList1 clearFloat">
            <div class="person">
              <div class="auther">
                <img :src="shiwuInfo.recommendTwo.avatar" alt="">
                <span>饮食组</span>
              </div>
              <div class="title ellipsis">{{shiwuInfo.recommendTwo.subTitle}}</div>
              <div class="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="pic ">
              <img :src="shiwuInfo.recommendTwo.avatar" alt="">
              <span class="markNew">{{shiwuInfo.recommendTwo.typeName}}</span>
            </div>
          </div>
          <div class="newsList1 clearFloat">
            <div class="person">
              <div class="auther">
                <img :src="shiwuInfo.recommendTwo.avatar" alt="">
                <span>饮食组</span>
              </div>
              <div class="title ellipsis">{{shiwuInfo.recommendTwo.subTitle}}</div>
              <div class="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="pic ">
              <img :src="shiwuInfo.recommendTwo.avatar" alt="">
              <span class="markNew">{{shiwuInfo.recommendTwo.typeName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="topic">
      <div class="title">十点一刻</div>
      <div class="scrollCon">
        <div class="scrollItem">
          <div class="example">
            <div class="example_inner" v-if="shiwuInfo.tenfifteen">
                <div class="header">-今日话题-</div>
                <div class="title">{{shiwuInfo.tenfifteen[0].title}}</div>
                <div class="desc">{{shiwuInfo.tenfifteen[0].desc}}</div>
                <div class="user">
                  <div class="imgCon">
                    <img :src="shiwuInfo.tenfifteen[0].participantAvatar[1]" alt="">
                    <img :src="shiwuInfo.tenfifteen[0].participantAvatar[2]" alt="">
                    <div class="dot">...</div>
                  </div>
                  <span class="count">977人参与讨论</span>
                </div>
            </div>
          </div>
          <div class="more">
            <span>查看全部话题</span>
            <i class="iconfont icon-qq"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="look" v-if="shiwuInfo.zhenThree">
      <div class="head">严选look</div>
      <div class="main">
        <img :src="shiwuInfo.zhenThree.picUrl" alt="">
        <div class="info">
          <div class="user">
            <img :src="shiwuInfo.zhenThree.avatar" alt="">
            <span>{{shiwuInfo.zhenThree.nickname}}</span>
          </div>
          <p class="desc">{{shiwuInfo.zhenThree.subTitle}}</p>
        </div>
      </div>
    </div>
    <div class="more" v-if="shiwuInfo.findMore">
      <div class="lineHeader">
        <span>更多精彩</span>
      </div>
      <div class="picList" v-for="(find,index) in shiwuInfo.findMore" :key="index">
        <div class="item">
          <img :src="find.itemPicUrl" alt="">
          <p>{{find.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Swiper from 'swiper'
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        props: {},
        data() {
            return {}
        },
        mounted(){
          //加载页面数据
          this.$store.dispatch('getShiWuInfo')
          if (!this.shiwuInfo){
            return
          }
          this._initScroll()
        },
        watch:{
          shiwuInfo(){
            this._initScroll()
          }
        },
        computed:{
          ...mapState(['shiwuInfo'])
        },
        methods:{
          _initScroll(){
            this.$nextTick(() => {
              new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: 5000,
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 10,
                pagination: {
                  el: '.swiper-pagination',
                }
              })
              //计算artical宽度
              const artical = this.$refs.articalCon
              artical.style.width = artical.children.length * 97 + 'px'
              //artical滚动
              new BScroll('.artical',{
                click : true,
                scrollX: true
              })
              //每日一刻左右滑动
              new BScroll('.scrollCon',{
                click : true,
                scrollX: true
              })
            })
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background-color #eeeeee
    margin-bottom 50px
    >.banner
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
            width 90%
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

    >.artical
      position relative
      padding 15px
      background-color #ffffff
      >ul
        display flex
        flex-wrap nowrap
        li
          width 82px
          margin-right 15px
          div.imgCon
            width 100%
            position relative
            p
              position absolute
              top 0
              right 0
              font-size 12px
              color #ffffff
              text-align right
              letter-spacing 2px
            img
              width 100%
          p
            text-align center
            font-size 14px
            line-height 24px
    >.recommend
      background-color #ffffff
      margin-top 10px
      >p.recomTitle
        text-align center
        line-height 52px
      >.recomMain
        width 92%
        margin auto
        >.news
          >div.mainNews
            position relative
            border 1px solid #ddd
            border-radius 8px
            >span.mark
              position absolute
              top 10px
              left 10px
              width 60px
              height 16px
              border 1px solid transparent
              font-size 12px
              background-color #ffffff
              border-radius 8px
              text-align center
              line-height 16px
            >div.pricedsc
              line-height 40px
              >span
                float left
                margin-left 5px
              >p.price
                float right
                margin-right 12px
            >img
              width 100%
              height 193px
            >p
              color #666
              font-size 14px
              line-height 30px
              text-indent 8px
              padding-bottom 25px
          >div.newsList1
            height 136px
            border 1px solid #ddd
            border-radius 8px
            margin 15px 0
            >div.person
              width 60%
              float left
              height 100%
              padding 16px
              box-sizing border-box
              .auther
                >img
                  width 30px
                  height 30px
                  border-radius 50%
                  vertical-align middle
                >span
                  font-size 12px
                  color #666
              div.title
                line-height 40px
                color #666666
              div.desc
                width 150px
                line-height 20px
                color #999999
            >div.pic
              position relative
              width 40%
              float right
              height 100%
              >img
                width 100%
              >span.markNew
                position absolute
                top 10px
                left 10px
                height 16px
                border 1px solid transparent
                font-size 12px
                background-color #ffffff
                border-radius 8px
                text-align center
                line-height 16px
                padding 0 2px
    >.topic
      background-color #ffffff
      .title
        line-height 50px
        text-align center
      .scrollCon
        padding 5px 0 20px
        .scrollItem
          display flex
          width 650px
          .example
            width 290px
            height 205px
            background url("../../../static/image/topicBg.png")
            background-repeat no-repeat
            background-position -1px 10px
            background-size 100% 100%
            .example_inner
              .header
                text-align center
                padding-top 36px
                font-size 12px
                color: #999
              .title
                text-align center
                color #000000
                font-size 16px
              .desc
                text-align center
                font-size 14px
                color #666
              .user
                >div
                  display inline-block
                margin-top 40px
                text-align center
                font-size 10px
                color #bbb
                .imgCon
                  font-size 0
                  >img
                    width 25px
                    height 25px
                    border-radius 50%
                    vertical-align middle
                  >div.dot
                    display inline-block
                    width 25px
                    height 25px
                    border-radius 50%
                    background-color #cccccc
                    color #ffffff
                    vertical-align middle
                    font-size 22px
                    text-align center
                    line-height 14px
                .count
                  display: inline-block
                  vertical-align middle
          .more
            width 290px
            height 181px
            border 5px solid #e6e6e6
            text-align center
            line-height 205px
            color #7f7f7f
            margin-left 15px
            margin-top 10px
    >.look
      background-color #ffffff
      margin-top 15px
      .head
        line-height 52px
        text-align center
        color #666666
      .main
        >img
          width 100%
          height 375px
        .info
          padding-bottom 20px
          .user
            padding 10px
            font-size 14px
            >img
              width 20px
              height 20px
              border-radius 50%
              vertical-align middle
          .desc
            font-size 14px
            color #7f7f7f
            padding 8px
            text-indent 2em
    >.more
      width 92%
      margin auto
      .lineHeader
        position relative
        text-align center
        line-height 70px
        font-size 14px
        &::after
          content ''
          height 1px
          width 100%
          background-color #d9d9d9
          position absolute
          top 50%
          left 0
        >span
          position relative
          background-color #eeeeee
          z-index 9
          padding 5px
          border-radius 5px
      .picList
        margin-bottom 15px
        padding 10px 10px 24px
        background-color #ffffff
        .item
          >img
            width 321px
            height 180px
          >p
            line-height 40px
            font-size 14px
            color #666666
</style>
