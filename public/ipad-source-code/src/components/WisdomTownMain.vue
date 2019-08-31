<template>
  <div class="main">
    <el-row>
      <el-col :span="6">
        <div class="tab" @click="changeTab('main')"></div>
      </el-col>
      <el-col :span="6">
        <div class="tab" @click="changeTab('simulation')"></div>
      </el-col>
      <el-col :span="6">
        <div class="tab" @click="changeTab('structure')"></div>
      </el-col>
      <el-col :span="6">
        <div class="tab" @click="changeTab('introduction')"></div>
      </el-col>
    </el-row>
    <el-row class="top-row">
      <el-col :span="14" :offset="1">
        <el-row :gutter="25" class="build-row">
          <el-col :span="8" class="build-col" v-for="v in list">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">{{ v.name }}</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">控制</el-col>
                <el-col :span="12" class="build-intro">介绍</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'拉近'" class="build-button"
                               @click="send('cameraMove', {'value': v.value})"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'开启'" class="build-button"
                               @click="send('cameraMoveBtnPress', {'value': v.value})"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'返回'" class="build-button" @click="send('back')"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'关闭'" class="build-button" @click="send('closeCameraMoveBtnPress')"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="1">
        <el-row class="back-row">
          <el-col :span="18" :offset="3">
            <expo-button :name="'返回'" class="back"></expo-button>
          </el-col>
        </el-row>
        <el-row class="dish-row">
          <el-col :span="18" :offset="3">
            <dish :no="no" :moveId="'move'" :ws="ws"></dish>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ExpoButton from '../components/ExpoButton'
  import Dish from '../components/Dish'
  import {send} from '@/api/send'
  import WisdomTownSmulation from "../data/WisdomTownSimulation"

  export default {
    name: 'WisdomTownMain',
    components: {
      ExpoButton,
      Dish
    },
    props: {
      no: {
        type: Number,
        default: 0
      },
      ws: {
        type: WebSocket,
        default: {}
      }
    },
    data() {
      return {
        tab: 'main',
        list: WisdomTownSmulation
      }
    },
    watch: {},
    created() {
    },
    methods: {
      async send(command, param) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        sendData.param = param
        let res = await send(sendData)
      },
      changeTab(tab) {
        this.tab = tab
        this.$emit('changeTab', tab)
      }
    }
  }
</script>
<style scoped>
  .main {
    background: url(../assets/electric-automation/wisdom-town-1-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .tab {
    height: 5.5vw;
  }

  .build {
    padding: 0.5vw;
    width: 100%;
    border: 0.1vw solid #77d3ff;
  }

  .build-title {
    font-size: 1.8vw;
    margin: 0px;
    background: linear-gradient(to bottom, white, #bbedff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .build-intro {
    font-size: 1.5vw;
    margin: 0px;
    background: linear-gradient(to bottom, #91ddff, #5087ed);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .build-button {
    font-size: 1vw;
    padding-top: 0.8vw;
    padding-bottom: 0.8vw;
  }

  .build-row {
    margin-top: 1.2vw;
  }

  .build-col {
    margin-top: 1vw;
  }

  .back {
    margin-top: 1.2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }

  .top-row {
    margin-top: 3vw;
  }

  .back-row {
    margin-top: 0.8vw;
  }

  .dish-row {
    margin-top: 10vw;
  }
</style>
