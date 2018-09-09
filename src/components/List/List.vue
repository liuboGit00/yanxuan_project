<template>
  <div class="listContainer">
    <div class="menu">
      <ul class="scroll" ref="leftCon">
        <li v-for="(cate,index) in cateGoryInfo"
            :key="index"
            @click="selectItem(index)"
            :class="{on:index === select}">{{cate.name}}</li>
      </ul>
    </div>
    <div class="con">
      <div class="main" ref="listCon">
        <img :src="detailsInfo.bannerUrl" alt="">
        <ul class="list1" ref='uls1' v-if="detailsInfo.type === 1">
          <li v-for="(item,index) in detailsInfo.subCateList" :key="index">
            <div class="imgCon">
              <img :src="item.wapBannerUrl" alt="">
            </div>
            <div class="desc">{{item.name}}</div>
          </li>
        </ul>
        <ul class="list2" ref='uls2' v-if="detailsInfo.type === 0">
          <li v-for="(item,index) in detailsInfo.subCateList.slice(0,5)">
            <header v-show="item.subCateList.length">{{item.name}}</header>
            <ul class="level2">
              <li v-for="(level2,index) in item.subCateList" :key="index">
                <div class="imgCon">
                  <img :src="level2.wapBannerUrl" alt="">
                </div>
                <div class="desc">{{level2.name}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        props: {},
        data() {
            return {
              select: 0
            }
        },
        mounted(){
          if (this.cateGoryInfo){
            return
          }
          this._initScroll()
          //初始化details数据
        },
        computed:{
          ...mapState(['cateGoryInfo','detailsInfo'])
        },
        watch:{
          cateGoryInfo(){
            this._initScroll()
          }
        },
        methods:{
          selectItem(index){
            this.select = index
            this.$store.dispatch('getDetailsInfo',index)

            //计算右边高度
            this.compute_R_Height()
          },
          _initScroll(){
            //初始化details的数据
            this.$store.dispatch('getDetailsInfo',0)
            //计算左边的高度
            this.$nextTick(() => {
              const leftCon = this.$refs.leftCon
              leftCon.style.height = leftCon.children.length * 50 + 'px'

              //计算右边高度
              this.compute_R_Height()

              //右边滚动
              new BScroll('.con',{
                click: true
              })
            })
          },
          compute_R_Height(){
            this.$nextTick(() => {
              //计算右边的高度
              const listCon = this.$refs.listCon
              const uls1 = this.$refs.uls1
              const uls2 = this.$refs.uls2
              if (this.detailsInfo.type === 1){
                listCon.style.height = uls1.children.length/3 * 100 + 'px'
              }else if (this.detailsInfo.type === 0){
                listCon.style.height = uls2.children.length * 200 + 'px'
              }
            })
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .listContainer
    position fixed
    left 0
    top 0
    width 100%
    height:100%
    overflow hidden
    margin-top 50px
    .menu
      float: left;
      width 20%
      height 100%
      right-border-1px(#ddd)
      ul.scroll
        >li
          width 100%
          height 40px
          text-align center
          line-height 40px
          font-size 14px
          margin-top 10px
          &.on
            color #ab2b2b
            border-left 4px solid #ab2b2b
            box-sizing border-box
    .con
      position relative
      float right
      width 80%
      height 100%
      margin-top 10px
      .main
        width 88%
        margin auto
        >img
          width 100%
          height 96px
        ul.list1
          display flex
          flex-wrap wrap
          justify-content space-between
          >li
            width 72px
            div.imgCon
              width 72px
              height 72px
              display table-cell
              text-align center
              vertical-align middle
              img
                width 50px
                height 50px
                border-radius 50%
            div.desc
              width 100%
              font-size 14px
              text-align center
              margin-top 4px
              color 999
              line-height 18px
        ul.list2
          >li
            >header
              bottom-border-1px(#bbb)
              width 100%
              height 40px
              line-height 40px
              text-align left
              letter-spacing 1px
              font-size 14px
              color #999999
            ul.level2
              display flex
              flex-wrap wrap
              justify-content space-between
              >li
                width 72px
                text-align center
                >div.imgCon
                  width 72px
                  height 72px
                  display table-cell
                  text-align center
                  vertical-align middle
                  img
                    width 50px
                    height 50px
                    border-radius 50%
                >div.desc
                  width 100%
                  font-size 14px
                  text-align center
                  margin-top 4px
              color 999
              line-height 18px
</style>
