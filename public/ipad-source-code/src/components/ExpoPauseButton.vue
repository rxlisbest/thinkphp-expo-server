<template>
  <div :class="expoPauseButtonClass" @click="clickExpoPauseButton">
  </div>
</template>

<script>
  export default {
    name: 'ExpoPauseButton',
    components: {},
    props: {
    },
    data() {
      return {
        expoPauseButtonClass: 'pause-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoPauseButton() {
        this.expoPauseButtonClass = 'pause-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoPauseButtonClass = 'pause-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .pause-button {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/pause.png) no-repeat;
    background-size: 100%;
  }

  .pause-button-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/pause-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
