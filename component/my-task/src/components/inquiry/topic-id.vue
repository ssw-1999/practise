<template>
  <div>
    <label>话题Id</label>
    <input type="text" v-model="topicId" placeholder="水母话题Id">
  </div>
</template>

<script> 
export default {
  name: 'topicId',
  data () {
    return {
      topicId:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
