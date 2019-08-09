<template>
  <layout :backCommand="{'no': no, 'command': 'product'}">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(v, k) in info.video.small">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('product', key, {'video': k})">{{v}}</el-button>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import LowVoltage from "@/data/LowVoltage"
  import { send } from '@/api/send'

  export default {
    name: 'low-voltage-productDetail',
    components: {
      Layout
    },
    data() {
      return {
        no: 5,
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      this.info = LowVoltage[key]
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
</style>
