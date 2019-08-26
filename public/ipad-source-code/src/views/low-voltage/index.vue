<template>
  <layout :title="'低压智能配电'" :back-name="'set-up-index'" :bind-module="'low-voltage-index'">
    <template slot="body">
      <el-row :gutter="30">
        <el-col :span="10" :offset="2">
          <router-link :to="{'name': 'low-voltage-product'}">
            <cross-module-col :image="'assets/low-voltage/product.png'" :title="'产品'"></cross-module-col>
          </router-link>
        </el-col>
        <el-col :span="10" :offset="k%2 == 0 ? 0 : 2" v-for="(v, k) in list">
          <router-link :to="{'name': 'low-voltage-solutionDetail', 'query': {'key': k, 'no': v.no}}">
            <cross-module-col :image="v.img" :title="v.name"></cross-module-col>
          </router-link>
        </el-col>
        <!--        <el-col :span="8">-->
        <!--          <module :path="'low-voltage-solution'" :title-part1="'解决方案'" :image="'assets/low-voltage/solution.png'"></module>-->
        <!--        </el-col>-->
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import CrossModuleCol from '../../components/CrossModuleCol'
  import LowVoltageSolution from "@/data/LowVoltageSolution";

  export default {
    name: 'low-voltage-index',
    components: {
      Layout,
      CrossModuleCol
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
    margin-top: 2%;
  }
</style>
