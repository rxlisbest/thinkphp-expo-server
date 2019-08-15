<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="22" :offset="1">
          <div class="map"></div>
        </el-col>
      </el-row>
      <el-row class="button-row" :gutter="20">
        <el-col :span="4" v-for="(v, k) in list" :offset="k%5 == 0 ? 2 : 0">
          <expo-button class="button" :name="v.name" :english-name="v.englishName"
                       @click="send('video', k)"></expo-button>
          <br v-if="k%5 == 4"/>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
  import NewEnergyOne from "@/data/NewEnergyOne"
  import {send} from '@/api/send'

  export default {
    name: 'new-energy-one',
    components: {
      Layout,
      ExpoButton
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
  .map {
    width: 100%;
    padding-bottom: 40%;
    height: 0;
    background: url(../../assets/new-energy/one-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    height: 65px;
    margin: 0 auto;
    width: 100%;
    padding: 20px 10px;
    color: #d2fcff;
  }

  .button-row {
    margin-top: 30px;
  }
</style>
