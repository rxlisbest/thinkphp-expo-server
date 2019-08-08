<template>
  <el-container>
    <el-header>
      <div>
        <el-button icon="el-icon-arrow-left" circle @click="back"></el-button>
      </div>
    </el-header>
    <el-main>
      <slot name="body"></slot>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'layout',
    components: {},
    data() {
      return {}
    },
    props: [],
    mounted() {
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .el-header {
    border-bottom: 1px solid #eee;
    padding-top: 8px;
    text-align: left;
  }
</style>
