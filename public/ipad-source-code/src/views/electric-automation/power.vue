<template>
  <layout :back-name="'electric-automation-index'" :title="'220kv变电站仿真系统'">
    <template slot="body">
      <el-row :gutter="10">
        <el-col :span="4" :offset="2">
          <expo-button :hover="tab == 'main'" :name="'主界面'" class="button" @click="changeTab('main')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'zhxj'" :name="'智慧巡检'" class="button" @click="changeTab('zhxj')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'xltsd'" :name="'线路停送电'" class="button" @click="changeTab('xltsd')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'byqtsd'" :name="'变压器停送电'" class="button" @click="changeTab('byqtsd')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'dmxcz'" :name="'倒母线操作'" class="button" @click="changeTab('dmxcz')"></expo-button>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="4" :offset="4">
          <expo-button :hover="tab == 'sbjs'" :name="'设备介绍'" class="button" @click="changeTab('sbjs')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'sbsmgl'" :name="'设备寿命管理'" class="button" @click="changeTab('sbsmgl')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'qcyl'" :name="'全产业链'" class="button" @click="changeTab('qcyl')"></expo-button>
        </el-col>
        <el-col :span="4">
          <expo-button :hover="tab == 'zhygl'" :name="'智慧云管理'" class="button" @click="changeTab('zhygl')"></expo-button>
        </el-col>
      </el-row>
      <el-row v-if="tab == 'zhxj'">
        <el-col :span="6" :offset="6">
          <expo-button :hover="secondTab == 'normal'" :name="'正常巡检'" class="button" @click="changeSecondTab('normal')"></expo-button>
        </el-col>
        <el-col :span="6">
          <expo-button :hover="secondTab == 'overall'" :name="'全面巡检'" class="button" @click="changeSecondTab('overall')"></expo-button>
        </el-col>
      </el-row>
      <el-row v-if="tab == 'zhxj' && secondTab == 'normal'">
        <el-col :span="8" :offset="2">
          <el-row>
            <el-col :span="8" :offset="4">
              <expo-pause-button @click="send('pauseMove')"></expo-pause-button>
            </el-col>
            <el-col :span="8">
              <normal-play-button @click="send('playMove')"></normal-play-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <component :is="tab == 'zhxj' && secondTab == 'normal' ? 'PowerOneDish' : ''" :no="no" :ws="ws"></component>
        </el-col>
      </el-row>
<!--      <power-one-dish :no="no" :ws="ws" v-if="tab == 'zhxj' && secondTab == 'normal'"></power-one-dish>-->
      <power-two-dish :no="no" :ws="ws" v-if="tab == 'zhxj' && secondTab == 'overall'"></power-two-dish>

      <el-row v-if="tab == 'xltsd'">
        <el-col :span="8" :offset="4">
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频一'" class="module-button" @click="send('video', {'value': 0})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频二'" class="module-button" @click="send('video', {'value': 1})"></expo-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8" :offset="4">
              <expo-pause-button @click="send('pause')"></expo-pause-button>
            </el-col>
            <el-col :span="8">
              <normal-play-button @click="send('play')"></normal-play-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row v-if="tab == 'byqtsd'">
        <el-col :span="8" :offset="4">
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频一'" class="module-button" @click="send('video', {'value': 0})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频二'" class="module-button" @click="send('video', {'value': 1})"></expo-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8" :offset="4">
              <expo-pause-button @click="send('pause')"></expo-pause-button>
            </el-col>
            <el-col :span="8">
              <normal-play-button @click="send('play')"></normal-play-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row v-if="tab == 'dmxcz'">
        <el-col :span="8" :offset="4">
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频一'" class="module-button" @click="send('video', {'value': 0})"></expo-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8" :offset="4">
              <expo-pause-button @click="send('pause')"></expo-pause-button>
            </el-col>
            <el-col :span="8">
              <normal-play-button @click="send('play')"></normal-play-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row v-if="tab == 'sbjs'">
        <el-col :span="8" :offset="4">
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频一'" class="module-button-small" @click="send('video', {'value': 0})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频二'" class="module-button-small" @click="send('video', {'value': 1})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频三'" class="module-button-small" @click="send('video', {'value': 2})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频四'" class="module-button-small" @click="send('video', {'value': 3})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频五'" class="module-button-small" @click="send('video', {'value': 4})"></expo-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <expo-button :name="'视频六'" class="module-button-small" @click="send('video', {'value': 5})"></expo-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8" :offset="4">
              <expo-pause-button @click="send('pause')"></expo-pause-button>
            </el-col>
            <el-col :span="8">
              <normal-play-button @click="send('play')"></normal-play-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <component class="sbsmgl" :is="tab == 'sbsmgl' ? 'PowerOneDish' : ''" :no="no" :ws="ws" v-if="tab == 'sbsmgl'"></component>
<!--      <power-one-dish :no="no" :ws="ws" v-if="tab == 'sbsmgl'"></power-one-dish>-->
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import SmallButton from '../../components/SmallButton'
  import BigButton from '../../components/BigButton'
  import ExpoButton from '../../components/ExpoButton'
  import Dish from '../../components/Dish'
  import PowerOneDish from '../../components/PowerOneDish'
  import PowerTwoDish from '../../components/PowerTwoDish'
  import ExpoPauseButton from '../../components/ExpoPauseButton'
  import NormalPlayButton from '../../components/NormalPlayButton'
  import WebsocketConfig from '../../config/websocket'
  import {send} from '@/api/send'

  export default {
    name: 'electric-automation-power',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      Dish,
      PowerOneDish,
      PowerTwoDish,
      ExpoPauseButton,
      NormalPlayButton,
    },
    data() {
      return {
        no: 2,
        ws: undefined,
        tab: 'main',
        secondTab: 'normal'
      }
    },
    created() {
      this.connectWS()
    },
    mounted(){
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
      },
      changeTab(tab) {
        this.tab = tab
        this.send(tab)
      },
      changeSecondTab(tab) {
        this.secondTab = tab
        this.send(tab)
      },
      connectWS() {
        if (this.ws == undefined || this.ws.readyState !== undefined && this.ws.readyState == 3) {
          this.ws = new WebSocket("ws://" + location.hostname + ":2346")
        }
        setTimeout(() => {
          if (this.$route.name == 'electric-automation-power') {
            this.connectWS()
          }
        }, WebsocketConfig.reconnect)
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 1%;
  }

  .button {
    font-size: 2vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 8%;
  }

  .module-button {
    color: #d2fcff;
    font-size: 2.2vw;
    margin-top: 1.2vw;
    padding-top: 2.4vw;
    padding-bottom: 2.4vw;
  }

  .module-button-small {
    color: #d2fcff;
    font-size: 2.0vw;
    margin-top: 0.8vw;
    padding-top: 1.8vw;
    padding-bottom: 1.8vw;
  }

  .sbsmgl {
    margin-top: 3vw;
  }
</style>
