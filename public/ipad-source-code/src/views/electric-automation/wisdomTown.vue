<template>
  <layout>
    <template slot="body">
      <div class="button-container">
        <el-row :gutter="10">
          <el-col :span="6">
            <expo-button :name="'视频一'" class="button" @click="send('video', {'value':1})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频二'" class="button" @click="send('video', {'value':2})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频三'" class="button" @click="send('video', {'value':3})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频四'" class="button" @click="send('video', {'value':4})"></expo-button>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <expo-button :name="'视频五'" class="button" @click="send('video', {'value':5})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频六'" class="button" @click="send('video', {'value':6})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频七'" class="button" @click="send('video', {'value':7})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'视频八'" class="button" @click="send('video', {'value':8})"></expo-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4" :offset="4">
            <small-button class="square-button" @click="send('size', {'value':-0.1})"></small-button>
          </el-col>
          <el-col :span="4">
            <big-button class="square-button" @click="send('size', {'value':+0.1})"></big-button>
          </el-col>
          <el-col :span="8" :offset="4">
            <dish :moveId="'move'" :ws="ws"></dish>
          </el-col>
        </el-row>
      </div>
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
    name: 'electric-automation-wisdomTown',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      Dish
    },
    data() {
      return {
        no: 3,
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

  .button {
    font-size: x-large;
    margin: 0 auto;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .button-container {
    margin: 30px;
    padding: 50px 50px;
    background: url(../../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }
</style>
