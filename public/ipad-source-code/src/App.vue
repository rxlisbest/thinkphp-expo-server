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
      addEventListener('touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
      }, false);
      var overscroll = function (el) {
        el.addEventListener('touchstart', function () {
          var top = el.scrollTop
            , totalScroll = el.scrollHeight
            , currentScroll = top + el.offsetHeight;
          if (top === 0) {
            el.scrollTop = 1;
          } else if (currentScroll === totalScroll) {
            el.scrollTop = top - 1;
          }
        });

        el.addEventListener('touchmove', function (evt) {
          if (el.offsetHeight < el.scrollHeight)
            evt._isScroller = true;
        });
      }

      overscroll(document.querySelector('#app'));
      document.body.addEventListener('touchmove', function (evt) {
        if (!evt._isScroller) {
          evt.preventDefault();
        }
      });
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
