<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="22" :offset="1">
          <div class="map"></div>
        </el-col>
      </el-row>
      <el-row class="button-row" :gutter="20">
        <el-col :span="4" v-for="(v, k) in list" :offset="k == 0 ? 2 : 0">
          <expo-button class="button" :name="v.name" @click="send('video', k)"></expo-button>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
  import NewEnergySynthetical from "@/data/NewEnergySynthetical"
  import {send} from '@/api/send'

  export default {
    name: 'new-energy-synthetical',
    components: {
      Layout,
      ExpoButton
    },
    data() {
      return {
        no: 13,
        list: NewEnergySynthetical
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
    padding-bottom: 55%;
    height: 0;
    background: url(../../assets/new-energy/synthetical-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    font-size: 1.5vw;
    margin: 0 auto;
    width: 80%;
    padding: 20% 12%;
    color: #d2fcff;
  }

  .button-row {
    margin-top: 3%;
  }
</style>
