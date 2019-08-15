<template>
  <div :class="expoButtonClass" @click="clickExpoButton">
    <p>{{ name }}</p>
    <p>{{ englishName }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ExpoButton',
    components: {},
    props: {
      name: {
        type: String,
        default: ''
      },
      englishName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        expoButtonClass: 'expo-button'
      }
    },
    created() {
    },
    methods: {
      clickExpoButton() {
        this.expoButtonClass = 'expo-button-hover'
        this.$emit('click') // 执行事件
        setTimeout(() => {
          this.expoButtonClass = 'expo-button'
        }, 300)
      }
    }
  }
</script>
<style scoped>
  .expo-button {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url(../assets/button.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .expo-button p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .expo-button-hover {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url(../assets/button-hover.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .expo-button-hover p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>
