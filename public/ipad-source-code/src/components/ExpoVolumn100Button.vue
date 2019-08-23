<template>
  <div :class="expoVolumn100ButtonClass" @click="clickExpoVolumn100Button">
  </div>
</template>

<script>
  export default {
    name: 'ExpoVolumn100Button',
    components: {},
    props: {
    },
    data() {
      return {
        expoVolumn100ButtonClass: 'volumn100-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoVolumn100Button() {
        this.expoVolumn100ButtonClass = 'volumn100-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoVolumn100ButtonClass = 'volumn100-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .volumn100-button {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0.png) no-repeat;
    background-size: 100%;
  }

  .volumn100-button-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
