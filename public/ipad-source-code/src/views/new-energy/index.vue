<template>
  <layout>
    <template slot="body">
      <el-row :gutter="30">
        <el-col :span="10" :offset="2">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-one'}">
              <cross-module-col :image="'assets/electric-automation/product.png'" :title="'全球光伏足迹'"></cross-module-col>
            </router-link>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-digitalize'}">
              <cross-module-col :image="'assets/electric-automation/product.png'" :title="'数字化触控系统'"></cross-module-col>
            </router-link>
          </div>
        </el-col>
        <el-col :span="10" :offset="2">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-process'}">
              <cross-module-col :image="'assets/electric-automation/product.png'" :title="'工艺流程'"></cross-module-col>
            </router-link>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-synthetical'}">
              <cross-module-col :image="'assets/electric-automation/product.png'" :title="'综合能源服务'"></cross-module-col>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import CrossModuleCol from '@/components/CrossModuleCol'

  export default {
    name: 'new-energy-index',
    components: {
      Layout,
      CrossModuleCol
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
  .el-col {
    margin-top: 2%;
  }
</style>
