<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(v, k) in list">
          <div class="grid-content bg-purple">
            <router-link :to="{'name': 'wisdom-energy-meterDetail', 'query': {'key': k}}">
              <cross-module :image="'assets/electric-automation/product.png'" :title="v.name"></cross-module>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import CrossModule from '@/components/CrossModule'
  import WisdomEnergyMeter from "@/data/WisdomEnergyMeter";

  export default {
    name: 'wisdom-energy-meter',
    components: {
      Layout,
      CrossModule
    },
    data() {
      return {
        list: WisdomEnergyMeter
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
