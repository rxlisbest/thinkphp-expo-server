<template>
  <layout :back-name="'set-up-index'" :title="'电力自动化'" :bind-module="'electric-automation-index'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8">
          <module :path="'electric-automation-product'" :title-part1="'产品'" :image="'assets/electric-automation/product.png'"></module>
        </el-col>
        <el-col :span="8">
          <module :path="'electric-automation-220kv'" :title-part1="'220kv变电站'" :title-part2="'仿真系统'" :image="'assets/electric-automation/220kv.png'"></module>
        </el-col>
        <el-col :span="8">
          <module :path="'electric-automation-wisdomTown'" :title-part1="'配电自动化'" :title-part2="'智慧小镇'" :image="'assets/electric-automation/wisdomTown.png'"></module>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import Module from '../../components/Module'

  export default {
    name: 'electric-automation-index',
    components: {
      Layout,
      Module
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
</style>
