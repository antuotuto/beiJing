<template>
<div class="something">
  <el-row :gutter="0">
    <el-col :xs="12" :sm="6" :md="4" :lg="3">
      <div class="">1</div>
    </el-col>
    <el-col :xs="12" :sm="6" :md="8" :lg="9">
      <div class="">1</div>
    </el-col>
    <el-col :xs="12" :sm="6" :md="8" :lg="9">
      <div class="">1</div>
    </el-col>
    <el-col :xs="12" :sm="6" :md="4" :lg="3">
      <div class="">1</div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'something',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  watch: {},
  created() {},
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
    .something {

    }
}
@media screen and (min-width:900px) {}
</style>
