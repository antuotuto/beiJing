<template>
  <div id="app">
    <navs></navs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import navs from '~/components/navs.vue'

export default {
  data () {
    return {
    }
  },
  methods: {

  },
  components: {
    navs
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height:100%;
  overflow: hidden;
}
</style>
