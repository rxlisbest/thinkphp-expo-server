<template>
  <layout :back-name="'set-up-index'" :title="'新华'" :bind-module="'new-china-index'">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="22" :offset="1">
          <div class="map"></div>
        </el-col>
      </el-row>
      <el-row class="button-row" :gutter="20">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="4" v-for="(v, k) in list">
          <expo-button class="button" :name="v.name" @click="send('video', k)"></expo-button>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
  import NewChina from "@/data/NewChina"
  import {send} from '@/api/send'

  export default {
    name: 'new-china-index',
    components: {
      Layout,
      ExpoButton
    },
    data() {
      return {
        no: 14,
        list: NewChina
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
    padding-bottom: 53%;
    height: 0;
    background: url(../../assets/new-china/map.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    font-size: 1.5vw;
    margin: 0 auto;
    width: 70%;
    padding: 20% 18%;
    color: #d2fcff;
  }

  .button-row {
    margin-top: 3%;
  }
</style>
