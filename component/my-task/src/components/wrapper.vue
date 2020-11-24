<template>
  <div>
    <h1>水母话题管理页</h1>
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
