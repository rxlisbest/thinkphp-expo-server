<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'electric-automation-product'}">产品</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'electric-automation-220kv'}">220kv可视化系统</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'electric-automation-wisdomTown'}">智慧小镇</router-link>
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
    methods: {}
  }
</script>
<style scoped>
  .el-row {
    margin-top: 30px;
  }
</style>
