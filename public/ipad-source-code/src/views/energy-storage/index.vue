<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button type="primary" plain @click="send('video', {'value':1})">视频1</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" plain @click="send('video', {'value':2})">视频2</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" plain @click="send('video', {'value':3})">视频3</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" plain @click="send('video', {'value':4})">视频4</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" plain @click="send('video', {'value':5})">视频5</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4" :offset="4">
          <small-button class="square-button" @click="send('size', {'value':-0.1})"></small-button>
        </el-col>
        <el-col :span="4">
          <big-button class="square-button" @click="send('size', {'value':+0.1})"></big-button>
        </el-col>
        <el-col :span="8">
          <dish :moveId="'move'" :ws="ws"></dish>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import SmallButton from '../../components/SmallButton'
  import BigButton from '../../components/BigButton'
  import ExpoButton from '../../components/ExpoButton'
  import Dish from '../../components/Dish'
  import {send} from '@/api/send'

  export default {
    name: 'energy-storage-index',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      Dish
    },
    data() {
      return {
        no: 15,
        ws: {}
      }
    },
    created() {
      this.ws = new WebSocket("ws://" + location.hostname + ":2346");
    },
    methods: {
      async send(command, param) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        sendData.param = param
        let res = await send(sendData)
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 30px;
  }

  .square-button {
    margin: 60px auto;
    width: 80px;
    height: 80px;
  }
</style>
