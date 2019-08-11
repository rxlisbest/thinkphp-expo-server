<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-one'}">一带一路</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-digitalize'}">数字化触控</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-process'}">工艺流程</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'new-energy-synthetical'}">综合能源服务</router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'

  export default {
    name: 'new-energy-index',
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
