<template>
  <div :class="xButtonClass" @click="clickButton">
  </div>
</template>

<script>
  export default {
    name: 'PlayButton',
    components: {},
    props: {},
    data() {
      return {
        xButtonClass: 'x'
      }
    },
    created() {
    },
    methods: {
      clickButton() {
        this.xButtonClass = 'x-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.xButtonClass = 'x'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .x {
    width: 100%;
    width: 100%;
    background: url(../assets/components/x.png) no-repeat;
    background-size: 100%;
  }

  .x-hover {
    width: 100%;
    height: 100%;
    background: url(../assets/components/x-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
