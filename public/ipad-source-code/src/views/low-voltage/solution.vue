<template>
  <layout :title="'低压智能配电'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(v, k) in list">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'low-voltage-solutionDetail', 'query': {'key': k}}">
              <module :title-part1="v.name.substring(0, 6)"  :title-part2="v.name.substring(6)" :image="'assets/electric-automation/product.png'"></module>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import Module from '@/components/Module'
  import LowVoltageSolution from "@/data/LowVoltageSolution";

  export default {
    name: 'low-voltage-product',
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
</style>
