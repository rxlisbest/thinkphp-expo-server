<template>
  <div class="module" @click="to(path)">
    <div class="module-logo">
      <img :src="require('@/' + image)">
    </div>
    <div class="module-name">
      <p>{{ titlePart1 }}</p>
      <p>{{ titlePart2 }}&nbsp;</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Module',
    components: {},
    props: {
      image: {
        type: String,
        default: ''
      },
      path: {
        type: String,
        default: ''
      },
      titlePart1: {
        type: String,
        default: ''
      },
      titlePart2: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      to(name) {
        this.$router.push({name: name})
      }
    }
  }
</script>
<style scoped>
  .module {
    text-align: center;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 50px;
    background: url(../assets/set-up/module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    padding-top: 40px;
    font-size: x-large;
    color: #FFFFFF;
  }

  .module-name p {
    margin: 0px;
    background: linear-gradient(to bottom, white, #baecff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .module-logo {
    margin: 0px auto;
    width: 80%;
  }

  .module-logo img {
    width: 100%;
  }
</style>
