<template>
  <div :class="expoVolumn0ButtonClass" @click="clickExpoVolumn0Button">
  </div>
</template>

<script>
  export default {
    name: 'ExpoVolumn0Button',
    components: {},
    props: {
    },
    data() {
      return {
        expoVolumn0ButtonClass: 'volumn0-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoVolumn0Button() {
        this.expoVolumn0ButtonClass = 'volumn0-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoVolumn0ButtonClass = 'volumn0-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .volumn0-button {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0.png) no-repeat;
    background-size: 100%;
  }

  .volumn0-button-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
