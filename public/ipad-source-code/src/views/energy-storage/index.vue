<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="22" :offset="1">
          <div class="map">
            <el-row :gutter="20">
              <el-col :span="6" offset="1">
                <expo-button :name="'正泰用户储能电池RESS'" class="button" @click="send('video', {'value':1})"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" offset="1">
                <expo-button :name="'正泰商用储能系统'" class="button" @click="send('video', {'value':1})"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" offset="1">
                <expo-button :name="'正泰MW储能系统'" class="button" @click="send('video', {'value':1})"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" offset="1">
                <expo-button :name="'退出'" class="button height-button-line" @click="send('video', {'value':1})"></expo-button>
              </el-col>
              <el-col :span="4">
                <expo-button :name="'发电侧辅助解决方案'" class="height-button" @click="send('video', {'value':1})"></expo-button>
              </el-col>
              <el-col :span="4">
                <expo-button :name="'微电网解决方案'" class="height-button height-button-line" @click="send('video', {'value':1})"></expo-button>
              </el-col>
              <el-col :span="4">
                <expo-button :name="'发电侧新能源消纳解决方案'" class="height-button" @click="send('video', {'value':1})"></expo-button>
              </el-col>
              <el-col :span="4">
                <expo-button :name="'电网侧解决方案'" class="height-button height-button-line" @click="send('video', {'value':1})"></expo-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="button-row">
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

  .button {
    /*font-size: large;*/
    margin: 0 auto;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #d2fcff;
  }

  .height-button-line {
    padding-top: 37px !important;
    padding-bottom: 36px !important;
  }

  .height-button {
    /*font-size: large;*/
    margin: 0 auto;
    width: 85%;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left:20px;
    padding-right:20px;
    color: #d2fcff;
  }

  .square-button {
    margin: 60px auto;
    width: 80px;
    height: 80px;
  }

  .map {
    padding-top: 80px;
    padding-bottom: 20px;
    width: 100%;
    background: url(../../assets/energy-storage/map.png) no-repeat;
    background-size: 100% 100%;
  }

  .button-row {
    margin-top: 20px;
  }
</style>
