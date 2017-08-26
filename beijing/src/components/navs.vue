<template>
<div class="navs">
  <ul :class="active">
    <li>菜单一</li>
    <li>菜单二</li>
    <li>菜单三</li>
    <li>菜单四</li>
  </ul>
  <p>王安安</p>
  <button type="button" name="button" @click="navActive">选</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  },
  components: {

  },
  methods: {
    navActive(){
      if(this.active == 'active'){
        this.active = ''
      }else{
        this.active = 'active'
      }
    }
  },
  watch: {},
  created() {},
}
</script>

<style scoped lang="scss">
@media screen and (max-width:900px) {
    .navs {
      height:50px;
      background: #eee;
      position: relative;
      button{
        position: absolute;
        top:5px;
        right:5px;
        height:40px;
        width:40px;
        background: #777;
        border: 0;
        border-radius: 3px;
      }
      p{
        position: absolute;
        top:5px;
        left:10px;
        height:40px;
        line-height: 40px;
      }
      ul{
        transform: translate3d(0,-100%,0);
        transition: .3s;
        padding-top: 50px;
        background: #eee;
        &.active{
          transform: translate3d(0,0,0);
        }
        li{
          padding: 10px;
        }
      }
    }
}
@media screen and (min-width:900px) {}
</style>
