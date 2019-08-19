<template>
  <layout :title="'低压智能配电AR'" :back-name="'set-up-index'">
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
  import {Base64} from 'js-base64'

  export default {
    name: 'low-voltage-ar',
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
        window.open(ArConfig.url + '?serviceUrl=' + Base64.encode(this.domain) + '&module=LowVoltage')
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 20%;
  }

  .button {
    font-size: 2.5vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
  }
</style>
