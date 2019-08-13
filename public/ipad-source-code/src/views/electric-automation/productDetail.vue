<template>
  <layout :backCommand="{'no': no, 'command': 'product'}">
    <template slot="body">
      <div class="button-container">
        <el-row :gutter="20">
          <el-col :span="12" v-for="(v, k) in info.video.small">
            <div class="button" @click="send('product', key, {'video': k})">{{v}}</div>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ElectricAutomation from "@/data/ElectricAutomation"
  import {send} from '@/api/send'

  export default {
    name: 'electric-automation-productDetail',
    components: {
      Layout
    },
    data() {
      return {
        no: 1,
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      this.key = key
      this.info = ElectricAutomation[key]
      this.send('product', key)
    },
    methods: {
      async send(command, value, param) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        sendData.value = value
        if (param != undefined) {
          sendData.param = param
        }
        let res = await send(sendData)
      }
    }
  }
</script>
<style scoped>
  .grid-content bg-purple {
    margin-top: 30px;
  }

  .button-container {
    margin: 30px;
    padding-top: 150px;
    padding-bottom: 200px;
    background: url(../../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .button {
    margin: 0px auto;
    width: 60%;
    height: 0;
    padding-bottom: 20%;
    background: url(../../assets/button.png) no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }
</style>
