<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-product')">
            <div class="module-electric-automation module-logo"></div>
            <div class="module-name">产品</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-220kv')">
            <div class="module-electric-automation module-logo"></div>
            <div class="module-name">220kv可视化系统</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="module" @click="to('electric-automation-wisdomTown')">
            <div class="module-electric-automation module-logo"></div>
            <div class="module-name">智慧小镇</div>
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
    font-size: large;
    color: #FFFFFF;
  }
</style>
