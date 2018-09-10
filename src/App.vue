<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/footerGuide.vue'
  import ajax from './api/ajax'
  export default {
    async mounted(){
      //获得home初始页面数据
      this.$store.dispatch('getHomeInfo')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  body,html{
    overflow-x hidden
  }
  #app{
    height 100%
    width 100%
  }
</style>
