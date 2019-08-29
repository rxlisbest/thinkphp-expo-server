<template>
  <div class="module">
    <el-row :gutter="20">
      <el-col :span="10" :offset="2">
        <div class="module-logo">
          <img :src="require('@/' + image)">
        </div>
      </el-col>
      <el-col :span="10">
        <div class="module-name">
          <span>{{ title }}</span>
        </div>
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
    padding-top: 4%;
    padding-bottom: 4%;
    background: url(../assets/components/cross-module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    /*font-size: large;*/
    display: flex;
    font-size: 1.6vw;
    padding-top: 6%;
    height: 13vw;
    color: #FFFFFF;
    align-items: center;/*副轴居中*/
  }

  .module-name span {
    vertical-align:middle;
  }

  .module-logo {
    display: flex;
    margin: 1vw auto;
    width: 13vw;
    height: 13vw;
    align-items: center;/*副轴居中*/
  }

  .module-logo img {
    margin: 0px auto;
    max-width: 10vw;
    max-height: 10vw;
    width: expression(this.width > '10vw' ? "10vw" : this.width);
    vertical-align:middle;
  }
</style>
