<template>
  <div :class="playButtonClass" @click="clickButton">
  </div>
</template>

<script>
  export default {
    name: 'PlayButton',
    components: {},
    props: {},
    data() {
      return {
        playButtonClass: 'play'
      }
    },
    created() {
    },
    methods: {
      clickButton() {
        this.playButtonClass = 'play-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.playButtonClass = 'play'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .play {
    width: 100%;
    width: 100%;
    background: url(../assets/components/play.png) no-repeat;
    background-size: 100%;
  }

  .play-hover {
    width: 100%;
    height: 100%;
    background: url(../assets/components/play-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
