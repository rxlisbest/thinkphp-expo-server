<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    mounted() {
      alert(2)
      document.body.addEventListener('touchmove', function (e) {
        e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
      }, {passive: false}) // passive 参数不能省略，用来兼容ios和android
    }
  }
</script>

<style>
  body {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    overflow-y: scroll;
    overflow-x: hidden;
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0px;
    pading: 0px;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    pading: 0px;
    background: url(./assets/bg.png) no-repeat;
    background-size: 100% 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
</style>
