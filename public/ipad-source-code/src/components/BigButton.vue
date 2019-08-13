<template>
  <div :class="bigButtonClass" @click="clickExpoButton"></div>
</template>

<script>
  export default {
    name: 'SmallButton',
    components: {},
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        bigButtonClass: 'big-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoButton() {
        this.bigButtonClass = 'big-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.bigButtonClass = 'big-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .big-button {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url(../assets/big.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .big-button-hover {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url(../assets/big-hover.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }
</style>
