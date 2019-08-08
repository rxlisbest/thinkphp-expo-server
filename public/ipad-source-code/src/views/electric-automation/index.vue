<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary">暂停</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary">播放</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary">停止</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary">静音</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'electric-automation-index',
    components: {},
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
</style>
