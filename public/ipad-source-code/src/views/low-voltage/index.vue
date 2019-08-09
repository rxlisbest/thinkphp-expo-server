<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'low-voltage-product'}">产品</router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'

  export default {
    name: 'low-voltage-index',
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
