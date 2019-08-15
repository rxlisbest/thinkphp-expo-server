<template>
  <layout>
    <template slot="body">
      <div class="process-container">
        <el-row :gutter="20">
          <el-col :span="4" v-for="(v, k) in list" :offset="k%5==0 && k/5==0 ? 2: (k%5==0 ? 2 : 0)">
            <expo-button :name="v.name" class="button" @click="send('video', k)"></expo-button>
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
  .grid-content bg-purple {
    margin-top: 30px;
  }

  .el-col {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .process-container {
    margin-top: 12%;
    padding-top: 23px;
    padding-bottom: 23px;
    background: url(../../assets/new-energy/process-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .button {
    font-size: large;
    margin: 0 auto;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>
