<template>
<div class="home">
  <something></something>
</div>
</template>

<script>
import something from '~/components/something.vue'
export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    something
  },
  methods: {

  },
  watch: {},
  created() {
  },
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
  .home{
    height:100%;
  }
    }
@media screen and (min-width:900px) {
    }
</style>
