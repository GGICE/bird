<template lang="jade">
  .test
    h1 hello {{msg}}
</template>

<script>
module.exports = {
  data: function() {
    return {
      msg: 'bird'
    }
  }
}
</script>

<style lang="sass">
  .test{
    h1{
      text-align: center;
    }
  }
</style>
