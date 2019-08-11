<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(v, k) in list">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('video', k)">{{v.name}}</el-button>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import NewEnergyOne from "@/data/NewEnergyOne"
  import { send } from '@/api/send'

  export default {
    name: 'new-energy-one',
    components: {
      Layout
    },
    data() {
      return {
        no: 10,
        list: NewEnergyOne
      }
    },
    created() {
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
