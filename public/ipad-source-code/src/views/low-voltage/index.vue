<template>
  <layout :title="'低压智能配电'" :back-name="'set-up-index'" :bind-module="'low-voltage-index'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6">
          <module :path="'low-voltage-product'" :title-part1="'产品'" :image="'assets/low-voltage/product.png'"></module>
        </el-col>
        <el-col :span="6" v-for="(v, k) in list">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'low-voltage-solutionDetail', 'query': {'key': k, 'no': v.no}}">
              <module :title-part1="v.name.substring(0, 6)" :title-part2="v.name.substring(6)" :image="v.img"></module>
            </router-link>
          </div>
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
  import Module from '../../components/Module'
  import LowVoltageSolution from "@/data/LowVoltageSolution";

  export default {
    name: 'low-voltage-index',
    components: {
      Layout,
      Module
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
  .el-row {
    margin-top: 30px;
  }
</style>
