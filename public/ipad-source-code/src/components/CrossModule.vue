<template>
  <div class="module">
    <el-row :gutter="20">
      <el-col :span="10" :offset="2">
        <div class="module-logo">
          <img :src="require('@/' + image)">
        </div>
      </el-col>
      <el-col :span="10">
        <div class="module-name">{{ title }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'CrossModule',
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
    padding-top: 6%;
    padding-bottom: 6%;
    background: url(../assets/components/cross-module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    /*font-size: large;*/
    font-size: 1.6vw;
    padding-top: 6%;
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
    width: 10vw;
    height: 10vw;
    display: table;
  }

  .module-logo img {
    max-width: 10vw;
    max-height: 10vw;
    width: expression(this.width > '10vw' ? "10vw" : this.width);
    display: table-cell;
    vertical-align: middle;
  }
</style>
