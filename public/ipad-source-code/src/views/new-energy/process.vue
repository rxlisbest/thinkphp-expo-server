<template>
  <layout :back-name="'new-energy-index'" :title="'工艺流程'">
    <template slot="body">
      <div class="process-container">
        <el-row :gutter="20">
          <el-col :span="4" v-for="(v, k) in list" :offset="k%5==0 && k/5==0 ? 2: (k%5==0 ? 2 : 0)">
            <expo-button :name="v.name" class="button" @click="send('video', v.index)"></expo-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '../../components/ExpoButton'
  import NewEnergyProcess from "@/data/NewEnergyProcess"
  import {send} from '@/api/send'

  export default {
    name: 'new-energy-process',
    components: {
      Layout,
      ExpoButton
    },
    data() {
      return {
        no: 12,
        list: NewEnergyProcess
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
  .el-col {
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .process-container {
    margin-top: 5%;
    padding-top: 4%;
    padding-bottom: 4%;
    background: url(../../assets/new-energy/process-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    font-size: 1.5vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 12%;
    padding-bottom: 12%;
  }
</style>
