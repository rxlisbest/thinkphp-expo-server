<template>
  <layout :back-name="'set-up-index'" :title="'储能'" :bind-module="'energy-storage-index'">
    <template slot="body">
      <el-row :gutter="20" class="map-row">
        <el-col :span="22" :offset="1" class="map-col">
          <div class="map">
            <el-row :gutter="20" class="video-row">
              <el-col :span="6" offset="1" v-if="solution && solution == 'peak-valley'">
                <expo-button :name="'正泰用户储能电池RESS'" class="button" @click="playVideo('ress')"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="video-row">
              <el-col :span="6" offset="1" v-if="solution && solution == 'peak-valley'">
                <expo-button :name="'正泰商用储能系统'" class="button" @click="playVideo('commercial')"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="video-row">
              <el-col :span="6" offset="1" v-if="solution">
                <expo-button :name="'正泰MW储能系统'" class="button" @click="playVideo('mw')"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="video-row">
              <el-col :span="2" offset="1" v-if="solution">
                <play-button class="play-button" @click="send('play')"></play-button>
              </el-col>
              <el-col :span="2" v-if="solution">
                <pause-button class="play-button" @click="send('pause')"></pause-button>
              </el-col>
              <el-col :span="2" v-if="solution">
                <x-button class="play-button" @click="send('close')"></x-button>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="video-row">
              <el-col :span="6" offset="1" v-if="solution">
                <expo-button :name="'返回'" class="button" @click="send('back')"></expo-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" offset="1">
                <expo-button :name="'退出'" class="button height-button-line" @click="send('exit')"></expo-button>
              </el-col>
              <el-col :span="3">
                <expo-button :hover="solution == 'generation-assist' ? true : false" :name="'发电侧辅助解决方案'"
                             class="height-button"
                             @click="clickSolution('generation-assist')"></expo-button>
              </el-col>
              <el-col :span="3">
                <expo-button :hover="solution == 'micro-power-grid' ? true : false" :name="'微电网解决方案'"
                             class="height-button"
                             @click="clickSolution('micro-power-grid')"></expo-button>
              </el-col>
              <el-col :span="4">
                <expo-button :hover="solution == 'generation-new-energy' ? true : false" :name="'发电侧新能源消纳解决方案'"
                             class="height-button"
                             @click="clickSolution('generation-new-energy')"></expo-button>
              </el-col>
              <el-col :span="3">
                <expo-button :hover="solution == 'power-grid' ? true : false" :name="'电网侧解决方案'" class="height-button"
                             @click="clickSolution('power-grid')"></expo-button>
              </el-col>
              <el-col :span="3">
                <expo-button :hover="solution == 'peak-valley' ? true : false" :name="'用户侧削峰填谷解决方案'"
                             class="height-button"
                             @click="clickSolution('peak-valley')"></expo-button>
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
          <dish v-if="moveDisplay" :no="no" :moveId="'move'" :ws="ws"></dish>
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
  import PlayButton from '../../components/PlayButton'
  import PauseButton from '../../components/PauseButton'
  import XButton from '../../components/XButton'
  import Dish from '../../components/Dish'
  import WebsocketConfig from '../../config/websocket'
  import {send} from '@/api/send'

  export default {
    name: 'energy-storage-index',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      PlayButton,
      PauseButton,
      XButton,
      Dish
    },
    data() {
      return {
        no: 15,
        ws: undefined,
        solution: '',
        moveDisplay: true
      }
    },
    created() {
      this.connectWS()
    },
    methods: {
      async send(command, param) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        sendData.param = param
        let res = await send(sendData)
      },
      playVideo(video) {
        this.send('playVideo', {'type': this.solution, 'video': video})
      },
      clickSolution(solution) {
        this.send(solution)
        setTimeout(() => {
          this.solution = solution
        }, 2000)
      },
      connectWS() {
        if (this.ws == undefined || this.ws.readyState !== undefined && this.ws.readyState == 3) {
          this.ws = new WebSocket("ws://" + location.hostname + ":2346")
          this.moveDisplay = false
          setTimeout(() => {
            this.moveDisplay = true
          }, 0)
        }
        setTimeout(() => {
          if (this.$route.name == 'energy-storage-index') {
            this.connectWS()
          }
        }, WebsocketConfig.reconnect)
      }
    }
  }
</script>
<style scoped>
  .map-row {
    height: 60%;
  }

  .map-col {
    height: 100%;
  }

  .button {
    font-size: 1.5vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 8%;
    color: #d2fcff;
  }

  .height-button-line {
    padding-top: 3.1vh !important;
    padding-bottom: 3.1vh !important;
  }

  .height-button {
    height: 5vh;
    font-size: 1.3vw;
    margin: 0 auto;
    width: 90%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-left: 10%;
    padding-right: 10%;
    color: #d2fcff;
  }

  .square-button {
    margin: 30% auto;
    width: 60%;
  }

  .map {
    width: 100%;
    height: 80%;
    padding-top: 1%;
    padding-bottom: 10%;
    background: url(../../assets/energy-storage/map.png) no-repeat;
    background-size: 100% 100%;
  }

  .button-row {
    margin-top: 3%;
  }

  .video-row {
    height: 7.2vh;
  }

  .play-button {
    width: 5.2vw;
    height: 5.2vw;
  }
</style>
