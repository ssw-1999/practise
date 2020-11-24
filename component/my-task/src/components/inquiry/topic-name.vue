<template>
  <div>
      <label>话题名称</label>
      <select name="match-types">
          <option value="accurate-match">精确匹配</option>
          <option value="blurry-match">模糊匹配</option>
      </select>
    <input type="text" v-model="topicName" placeholder="话题名称">
  </div>
</template>

<script> 
export default {
  name: 'topicName',
  data () {
    return {
      topicName:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
