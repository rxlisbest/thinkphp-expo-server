<template>
  <div class="module">
    <el-row :gutter="20">
      <div class="module-logo">
        <img :src="require('@/' + image)">
      </div>
      <div class="module-name">
        <p>{{ title }}</p>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'CrossModuleCol',
    components: {},
    props: {
      image: {
        type: String,
        default: ''
      },
      title: {
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
    }
  }
</script>
<style scoped>
  .module {
    text-align: center;
    width: 100%;
    padding-top: 4%;
    padding-bottom: 4%;
    background: url(../assets/components/cross-module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    font-size: 2.5vw;
    padding-top: 2%;
    color: #FFFFFF;
  }

  .module-name p {
    margin: 0;
    background: linear-gradient(to bottom, white, #baecff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .module-logo {
    display: flex;
    margin: 0px auto;
    width: 16vw;
    height: 16vw;
    align-items: center;/*副轴居中*/
  }

  .module-logo img {
    margin: 0px auto;
    max-width: 12vw;
    max-height: 12vw;
    width: expression(this.width > '12vw' ? "12vw" : this.width);
    vertical-align: middle;
  }
</style>
