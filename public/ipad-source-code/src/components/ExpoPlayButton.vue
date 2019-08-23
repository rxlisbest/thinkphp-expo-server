<template>
  <div :class="expoPlayButtonClass" @click="clickExpoPlayButton">
  </div>
</template>

<script>
  export default {
    name: 'ExpoPlayButton',
    components: {},
    props: {
    },
    data() {
      return {
        expoPlayButtonClass: 'play-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoPlayButton() {
        this.expoPlayButtonClass = 'play-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoPlayButtonClass = 'play-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .play-button {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/play.png) no-repeat;
    background-size: 100%;
  }

  .play-button-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/play-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
