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

      // document.body.addEventListener('touchmove', function (e) {
      //   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
      // }, {passive: false}) // passive 参数不能省略，用来兼容ios和android
      // addEventListener('touchstart', function (e) {
      //   e.preventDefault();
      //   e.stopPropagation();
      // }, false);
      // var overscroll = function (el) {
      //   el.addEventListener('touchstart', function () {
      //     var top = el.scrollTop
      //       , totalScroll = el.scrollHeight
      //       , currentScroll = top + el.offsetHeight;
      //     if (top === 0) {
      //       el.scrollTop = 1;
      //     } else if (currentScroll === totalScroll) {
      //       el.scrollTop = top - 1;
      //     }
      //   });
      //
      //   el.addEventListener('touchmove', function (evt) {
      //     if (el.offsetHeight < el.scrollHeight)
      //       evt._isScroller = true;
      //   });
      // }
      //
      // overscroll(document.querySelector('#app'));
      // document.body.addEventListener('touchmove', function (evt) {
      //   if (!evt._isScroller) {
      //     evt.preventDefault();
      //   }
      // });

      // var ios = navigator.userAgent.indexOf('ipad');//判断是否为ios
      // alert(navigator.userAgent)
      //
      // if(ios == -1){
      //   alert(ios)
      //   //ios下运行
      //   var divEl = document.getElementById('app').//你需要滑动的dom元素
      //   iosTrouchFn(divEl);
      // }
      //
      // function iosTrouchFn(el) {
      //   //el需要滑动的元素
      //   el.addEventListener('touchmove',function(e){
      //     e.isSCROLL = true;
      //   })
      //   document.body.addEventListener('touchmove',function(e){
      //     if(!e.isSCROLL){
      //       e.preventDefault(); //阻止默认事件(上下滑动)
      //     }else{
      //       //需要滑动的区域
      //       var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离
      //       var scrollH = el.scrollHeight; //含滚动内容的元素大小
      //       var offsetH = el.offsetHeight; //网页可见区域高
      //       var cScroll = top + offsetH; //当前滚动的距离
      //
      //       //被滑动到最上方和最下方的时候
      //       if(top == 0){
      //         top = 1; //0～1之间的小数会被当成0
      //       }else if(cScroll === scrollH){
      //         el.scrollTop = top - 0.1;
      //       }
      //     }
      //   }, {passive: false}) //passive防止阻止默认事件不生效
      // }
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
    margin: 0px;
    /*margin-top: 60px;*/
    overflow-y: scroll;
    overflow-x: hidden;
  }

  html, body {
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
