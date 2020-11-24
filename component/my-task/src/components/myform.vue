<template>
  <div>
      <form>
        <topic-name></topic-name>
        <a-author-uid></a-author-uid>
        <skit-name></skit-name>
        <skit-id></skit-id>
      </form>
  </div>
</template>

<script>
import ksAuthorUid from './inquiry/ks-author-uid'
import aAuthorUid from './inquiry/a-author-uid'
import skitName from './inquiry/skit-name'
import skitId from './inquiry/skit-id'

export default {
  name: 'myform',
  data () {
    return {
      ksAuthorUid:null,
      aAuthorUid:null,
      skitName:null,
      skitId:null
    }
  },
  components:{
      ksAuthorUid,
      aAuthorUid,
      skitName,
      skitId
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
