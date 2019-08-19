<template>
  <layout :title="'智慧能效'" :back-name="'set-up-index'" :bind-module="'wisdom-energy-index'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-detail', 'query': {'no': 8, 'title': '公共建筑合同能源管理视频'}}">
              <module :title-part1="'公共建筑合同'" :title-part2="'能源管理视频'" :image="'assets/electric-automation/product.png'"></module>
            </router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-detail', 'query': {'no': 7, 'title': '空气源热泵视频'}}">
              <module :title-part1="'空气源热泵视频'" :image="'assets/electric-automation/product.png'"></module>
            </router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-meter'}">
              <module :title-part1="'仪表产品多媒体'" :image="'assets/electric-automation/product.png'"></module>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import Module from '@/components/Module'
  // import WisdomEnergy from "@/data/WisdomEnergy";

  export default {
    name: 'wisdom-energy-index',
    components: {
      Layout,
      Module
    },
    data() {
      return {
        // list: WisdomEnergy
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
