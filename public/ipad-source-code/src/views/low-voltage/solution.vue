<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(v, k) in list">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'low-voltage-solutionDetail', 'query': {'key': k}}">
              <el-button type="primary">{{ v.name }}</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import LowVoltageSolution from "@/data/LowVoltageSolution";

  export default {
    name: 'low-voltage-product',
    components: {
      Layout
    },
    data() {
      return {
        list: LowVoltageSolution
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
  .el-col {
    padding-top: 30px;
}
</style>
