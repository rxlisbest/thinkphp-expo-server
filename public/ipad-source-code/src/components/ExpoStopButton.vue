<template>
  <div :class="expoStopButtonClass" @click="clickExpoStopButton">
  </div>
</template>

<script>
  export default {
    name: 'ExpoStopButton',
    components: {},
    props: {
    },
    data() {
      return {
        expoStopButtonClass: 'stop-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoStopButton() {
        this.expoStopButtonClass = 'stop-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoStopButtonClass = 'stop-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .stop-button {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/stop.png) no-repeat;
    background-size: 100%;
  }

  .stop-button-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/stop-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
