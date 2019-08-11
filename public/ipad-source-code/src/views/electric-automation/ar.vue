<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': ''}">AR识别</router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'

  export default {
    name: 'electric-automation-ar',
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
