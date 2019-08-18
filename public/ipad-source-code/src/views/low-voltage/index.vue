<template>
  <layout :title="'低压智能配电'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" :offset="4">
          <module :path="'low-voltage-product'" :title-part1="'产品'" :image="'assets/electric-automation/product.png'"></module>
        </el-col>
        <el-col :span="8">
          <module :path="'low-voltage-solution'" :title-part1="'解决方案'" :image="'assets/electric-automation/product.png'"></module>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import Module from '../../components/Module'

  export default {
    name: 'low-voltage-index',
    components: {
      Layout,
      Module
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
