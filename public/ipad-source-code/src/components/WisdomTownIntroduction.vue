<template>
  <div class="introduction">
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
    <el-row :gutter="20" class="top-row">
      <el-col :span="14" :offset="1">
        <el-row v-for="v in list">
          <el-col :span="24">
            <expo-button :name="v.name" class="module-button" @click="send('video', {'value': v.value})"></expo-button>
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
  </div>
</template>

<script>
  import ExpoButton from '../components/ExpoButton'
  import Dish from '../components/Dish'
  import ExpoPauseButton from '../components/ExpoPauseButton'
  import NormalPlayButton from '../components/NormalPlayButton'
  import {send} from '@/api/send'
  import WisdomTownIntroduction from "../data/WisdomTownIntroduction"

  export default {
    name: 'WisdomTownStructure',
    components: {
      ExpoButton,
      Dish,
      ExpoPauseButton,
      NormalPlayButton,
    },
    props: {
      no: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        tab: 'main',
        list: WisdomTownIntroduction,
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
  .introduction {
    background: url(../assets/electric-automation/wisdom-town-4-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .tab {
    height: 5.5vw;
  }

  .module-button {
    color: #d2fcff;
    font-size: 2.2vw;
    margin-top: 1.2vw;
    padding-top: 2.4vw;
    padding-bottom: 2.4vw;
  }

  .top-row {
    margin-top: 3vw;
  }
</style>
