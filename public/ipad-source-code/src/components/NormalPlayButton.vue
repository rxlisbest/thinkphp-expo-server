<template>
  <div :class="normalPlayButtonClass" @click="clickButton">
  </div>
</template>

<script>
  export default {
    name: 'NormalPlayButton',
    components: {},
    props: {},
    data() {
      return {
        normalPlayButtonClass: 'normal-play'
      }
    },
    created() {
    },
    methods: {
      clickButton() {
        this.normalPlayButtonClass = 'normal-play-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.normalPlayButtonClass = 'normal-play'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .normal-play {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/components/normal-play.png) no-repeat;
    background-size: 100%;
  }

  .normal-play-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/components/normal-play-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
