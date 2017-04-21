<template>
  <div>
    <el-button @click="counter()">counter</el-button>
    <el-progress type="circle" :percentage="data.percent"></el-progress>
    {{data.percent}}
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        visible: false,
        data: { percent: 20 },
        message: "123456789"
      }
    },
    computed: {
      status: function () {
        let status = {
          time: 500
        }
        return status;
      }
    },
    methods: {
      counter: function () {
        let timer = setTimeout(() => {
          if (this.data.percent === 50) return;
          clearTimeout(timer);
          this.counter();
          this.data.percent++;
        }, 1000);
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./style.scss";
</style>