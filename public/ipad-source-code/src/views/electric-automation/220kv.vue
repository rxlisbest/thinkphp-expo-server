<template>
  <layout :back-name="'electric-automation-index'" :title="'220kv变电站仿真系统'">
    <template slot="body">
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
      <div class="roam">
        <el-row>
          <el-col :span="12">
            <div class="roam-tab" @click="to('electric-automation-220kvTop')">&nbsp;</div>
          </el-col>
          <el-col :span="12">
            <div class="roam-tab"></div>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6" :offset="3">
            <expo-button :name="'一次设备'" class="button" @click="send('location', {'value':1})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'二次设备'" class="button" @click="send('location', {'value':2})"></expo-button>
          </el-col>
          <el-col :span="6">
            <expo-button :name="'监控室'" class="button" @click="send('location', {'value':3})"></expo-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <dish :no="no" :moveId="'leftMove'" :ws="ws"></dish>
          </el-col>
          <el-col :span="4">
            <small-button class="square-button" @click="send('size', {'value':-0.1})"></small-button>
          </el-col>
          <el-col :span="4">
            <big-button class="square-button" @click="send('size', {'value':+0.1})"></big-button>
          </el-col>
          <el-col :span="8">
            <dish :no="no" :moveId="'rightMove'" :ws="ws"></dish>
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
    name: 'electric-automation-220kv',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      Dish
    },
    data() {
      return {
        no: 2,
        ws: {}
      }
    },
    created() {
    },
    mounted(){
      this.ws = new WebSocket("ws://" + location.hostname + ":2346");
    },
    methods: {
      to(name) {
        this.$router.push({name: name})
      },
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
    margin-top: 1%;
  }

  .el-col {
    height: 100%;
  }

  .square-button {
    margin: 2% auto;
    width: 60%;
  }

  .button {
    font-size: 2.5vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 8%;
  }

  .roam {
    width: 100%;
    height: 70%;
    /*padding-top: 80px;*/
    background: url(../../assets/electric-automation/roam-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .roam-tab {
    width: 100%;
    height: 100%;
    margin-bottom: 15%;
  }
</style>
