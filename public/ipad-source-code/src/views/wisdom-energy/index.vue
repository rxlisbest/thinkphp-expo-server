<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20" v-for="v in list">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-detail', 'query': {'no': v.no}}">{{ v.name }}</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-meter'}">仪表多媒体</router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import WisdomEnergy from "@/data/WisdomEnergy";

  export default {
    name: 'wisdom-energy-index',
    components: {
      Layout
    },
    data() {
      return {
        list: WisdomEnergy
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
