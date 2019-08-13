<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-product')">
            <div class="module-product module-logo"></div>
            <div class="module-name">
              <p>产品</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-220kv')">
            <div class="module-220kv module-logo"></div>
            <div class="module-name">
              <p>220kv变电站</p>
              <p>仿真系统</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-wisdomTown')">
            <div class="module-wisdomTown module-logo"></div>
            <div class="module-name">
              <p>配电自动化</p>
              <p>智慧小镇</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'

  export default {
    name: 'electric-automation-index',
    components: {
      Layout
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
  .el-row {
    margin-top: 30px;
  }

  .module {
    text-align: center;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 50px;
    background: url(../../assets/set-up/module-bg.png) no-repeat;
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

  .module-product {
    margin: 0px auto;
    width: 80%;
    height: 0;
    padding-bottom: 80%;
    background: url(../../assets/electric-automation/product.png) no-repeat;
    background-size: 100%;
  }

  .module-220kv {
    margin: 0px auto;
    width: 80%;
    height: 0;
    padding-bottom: 80%;
    background: url(../../assets/electric-automation/220kv.png) no-repeat;
    background-size: 100%;
  }

  .module-wisdomTown {
    margin: 0px auto;
    width: 80%;
    height: 0;
    padding-bottom: 80%;
    background: url(../../assets/electric-automation/wisdomTown.png) no-repeat;
    background-size: 100%;
  }
</style>
