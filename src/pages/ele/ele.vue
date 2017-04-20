<template>
  <div>
    <el-button @click="visible = true">按钮</el-button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return { visible: false }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
	@import "./style.scss";
</style>