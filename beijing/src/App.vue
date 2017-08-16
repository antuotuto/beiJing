<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {

  },
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height:100%;
}
</style>
