<template>
  <layout :title="'电力自动化AR'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6" :offset="9">
          <div class="grid-content bg-purple">
            <expo-button class="button" :name="'开始识别'" @click="goOut()"></expo-button>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import ExpoButton from '../../components/ExpoButton'
  import ArConfig from '../../config/ar'
  import { Base64 } from 'js-base64'

  export default {
    name: 'electric-automation-ar',
    components: {
      Layout,
      ExpoButton
    },
    data() {
      return {
        domain: ''
      }
    },
    created() {
      this.domain = window.location.href.replace('ar', 'productDetail')
    },
    methods: {
      goOut() {
        window.location.href = ArConfig.url + '?serviceUrl=' + Base64.encode(this.domain) + '&module=ElectricAutomation'
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 250px;
  }

  .button {
    font-size: x-large;
    margin: 0 auto;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>
