<template>
  <div :class="pauseButtonClass" @click="clickButton">
  </div>
</template>

<script>
  export default {
    name: 'PauseButton',
    components: {},
    props: {},
    data() {
      return {
        pauseButtonClass: 'pause'
      }
    },
    created() {
    },
    methods: {
      clickButton() {
        this.pauseButtonClass = 'pause-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.pauseButtonClass = 'pause'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .pause {
    width: 100%;
    width: 100%;
    background: url(../assets/components/pause.png) no-repeat;
    background-size: 100%;
  }

  .pause-hover {
    width: 100%;
    height: 100%;
    background: url(../assets/components/pause-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
