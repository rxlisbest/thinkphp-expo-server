<template>
  <layout :title="'配电自动化智慧小镇'">
    <template slot="body">
      <div class="button-container">
        <div class="button-top">
          <el-row :gutter="10">
            <el-col :span="6">
              <expo-button :hover="module == 'main' ? true : false" :name="'主界面'" class="button"
                           @click="selectModule('main')"></expo-button>
            </el-col>
            <el-col :span="6">
              <expo-button :hover="module == 'simulation' ? true : false" :name="'仿真控制'" class="button"
                           @click="selectModule('simulation')"></expo-button>
            </el-col>
            <el-col :span="6">
              <expo-button :hover="module == 'structure' ? true : false" :name="'系统结构'" class="button"
                           @click="selectModule('structure')"></expo-button>
            </el-col>
            <el-col :span="6">
              <expo-button :hover="module == 'introduction' ? true : false" :name="'产品介绍'" class="button"
                           @click="selectModule('introduction')"></expo-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'main'">
            <el-col :span="6">
              <expo-button :name="'智慧控制中心'" class="button" @click="send('center')"></expo-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'structure'">
            <el-col :span="6">
              <expo-button :name="'主接线图'" class="button" @click="send('image', {'value': 0})"></expo-button>
            </el-col>
            <el-col :span="6">
              <expo-button :name="'产品拓扑图'" class="button" @click="send('image', {'value': 1})"></expo-button>
            </el-col>
            <el-col :span="6">
              <expo-button :name="'系统架构图'" class="button" @click="send('image', {'value': 2})"></expo-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'introduction'">
            <el-col :span="4">
              <expo-button :name="'视频一'" class="button" @click="send('video', {'value':0})"></expo-button>
            </el-col>
            <el-col :span="4">
              <expo-button :name="'视频二'" class="button" @click="send('video', {'value':1})"></expo-button>
            </el-col>
            <el-col :span="4">
              <expo-button :name="'视频三'" class="button" @click="send('video', {'value':2})"></expo-button>
            </el-col>
            <el-col :span="4">
              <expo-button :name="'视频四'" class="button" @click="send('video', {'value':3})"></expo-button>
            </el-col>
            <el-col :span="4">
              <expo-button :name="'视频五'" class="button" @click="send('video', {'value':4})"></expo-button>
            </el-col>
            <el-col :span="2">
              <play-button class="play-button" @click="send('play')"></play-button>
            </el-col>
            <el-col :span="2">
              <pause-button class="play-button" @click="send('pause')"></pause-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'structure' || module == 'simulation' || module == 'main'">
            <el-col :span="2" :offset="3">H5</el-col>
            <el-col :span="2">H6</el-col>
            <el-col :span="2">H7</el-col>
            <el-col :span="2">H8</el-col>
            <el-col :span="2">H9</el-col>
            <el-col :span="2">BH5</el-col>
            <el-col :span="2">BH6</el-col>
            <el-col :span="2">BH7</el-col>
            <el-col :span="2">BH8</el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'main'">
            <el-col :span="3">
              简介
            </el-col>
            <el-col :span="2" v-for="i in 9">
              <el-button type="warning" icon="el-icon-coordinate" circle
                         @click="send('cameraMove', {'value': i})"></el-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'simulation' || module == 'main'">
            <el-col :span="3">
              详情
            </el-col>
            <el-col :span="2" v-for="i in 9">
              <el-button type="primary" icon="el-icon-document" circle
                         @click="send('cameraMoveBtnPress', {'value': i})"></el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="danger" icon="el-icon-close" circle @click="send('closeCameraMoveBtnPress')"></el-button>
            </el-col>
          </el-row>
          <el-row :gutter="10" v-if="module == 'structure' || module == 'simulation'">
            <el-col :span="3">
              开关
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="H5"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="H6"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="H7"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="H8"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="H9"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="BH5"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="BH6"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="BH7"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
            <el-col :span="2">
              <el-switch
                v-model="BH8"
                active-color="#FF7F50"
                active-value="1"
                inactive-value="0"
                name="test">
              </el-switch>
            </el-col>
          </el-row>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">
            <expo-button :name="'返回'" class="button" @click="send('back')"></expo-button>
          </el-col>
          <!--          <el-col :span="4" :offset="4">-->
          <!--            <small-button class="square-button" @click="send('size', {'value':-0.1})"></small-button>-->
          <!--          </el-col>-->
          <!--          <el-col :span="4">-->
          <!--            <big-button class="square-button" @click="send('size', {'value':+0.1})"></big-button>-->
          <!--          </el-col>-->
          <el-col :span="8" :offset="10">
            <dish :no="no" :moveId="'move'" :ws="ws"></dish>
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
  import PlayButton from '../../components/PlayButton'
  import PauseButton from '../../components/PauseButton'
  import Dish from '../../components/Dish'
  import {send} from '@/api/send'

  export default {
    name: 'electric-automation-wisdomTownOld',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      PlayButton,
      PauseButton,
      Dish
    },
    data() {
      return {
        no: 3,
        ws: {},
        module: 'main',
        H5: "1",
        H6: "1",
        H7: "1",
        H8: "1",
        H9: "1",
        BH5: "1",
        BH6: "1",
        BH7: "1",
        BH8: "1"
      }
    },
    watch: {
      H5(value) {
        this.send('switch', {'no': '1', 'value': value})
      },
      H6(value) {
        this.send('switch', {'no': '2', 'value': value})
      },
      H7(value) {
        this.send('switch', {'no': '3', 'value': value})
      },
      H8(value) {
        this.send('switch', {'no': '4', 'value': value})
      },
      H9(value) {
        this.send('switch', {'no': '5', 'value': value})
      },
      BH5(value) {
        this.send('switch', {'no': '6', 'value': value})
      },
      BH6(value) {
        this.send('switch', {'no': '7', 'value': value})
      },
      BH7(value) {
        this.send('switch', {'no': '8', 'value': value})
      },
      BH8(value) {
        this.send('switch', {'no': '9', 'value': value})
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
      },
      selectModule(module) {
        this.module = module
        this.send(module)
      }
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 1%;
  }

  .square-button {
    margin: 30% auto;
    width: 60%;
  }

  .button {
    font-size: 2.5vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 8%;
  }

  .button-container {
    padding: 5% 5%;
    background: url(../../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
    height: 80%;
  }

  .el-col {
    color: #FFFFFF;
  }

  .button-top {
    height: 25vw;
  }

  .play-button {
    width: 6vw;
    height: 6vw;
  }
</style>
