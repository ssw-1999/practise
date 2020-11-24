<template>
  <div>
    <label>绑定内容</label>
    <select name="bind-content">
        <option value=""></option>
        <option value=""></option>
    </select>
    <input type="text" placeholder="内容Id" v-model="contentId">
  </div>
</template>

<script> 
export default {
  name: 'bindContent',
  data () {
    return {
      bindContent:null,
      contentId:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
