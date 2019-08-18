<template>
  <div :class="smallButtonClass" @click="clickExpoButton"></div>
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
        smallButtonClass: 'small-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoButton() {
        this.smallButtonClass = 'small-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.smallButtonClass = 'small-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .small-button {
    text-align: center;
    width: 100%;
    /*height: 100%;*/
    height: 0;
    padding-bottom: 60%;
    background: url(../assets/small.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .small-button-hover {
    text-align: center;
    width: 100%;
    /*height: 100%;*/
    height: 0;
    padding-bottom: 60%;
    background: url(../assets/small-hover.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }
</style>
