<template>
  <div>
    <h1>我的话题管理页</h1>
    <div>hahaha</div>
    <div>我的修改1</div>
    <div>change1</div>
    <div>change2</div>
    <div>change3</div>
    <div>hahaha</div>
    <myform></myform>
    <mylist></mylist>
  </div>
</template>

<script> 
import myform from './myform'
import mylist from './mylist'
export default {
  name: 'wrapper',
  data () {
    return {
      ksAuthorUid:null,
      aAuthorUid:null,
      skitName:null,
      skitId:null
    }
  },
  components:{
    myform
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
