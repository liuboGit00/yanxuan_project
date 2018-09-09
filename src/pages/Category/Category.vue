<template>
  <div>
    <Search />
    <List/>
  </div>
</template>
<script>
    import List from '../../components/List/List.vue'
    export default {
        props: {},
        data() {
            return {}
        },
        mounted(){
          this.$store.dispatch('getcateGoryInfo')
        },
        components:{
          List
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
