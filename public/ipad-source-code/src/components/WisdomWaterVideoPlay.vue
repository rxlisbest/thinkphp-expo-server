<template>
  <layout :back-name="backName" :bind-module="bindModule">
    <template slot="body">
      <div class="button-container">
        <el-row>
          <el-col :span="24">
            <div class="body-title">
              {{ title }}
              <!--              <img width="100%" :src="require('@/' + title)">-->
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <expo-button class="open-button" :name="'打开网页'" @click="send('web')"></expo-button>
          </el-col>
          <el-col :span="12">
            <expo-button class="open-button" :name="'打开视频'" @click="send('video')"></expo-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col class="small-col" :span="4" :offset="2">
            <expo-stop-button class="stop" @click="send('stop', 0)"></expo-stop-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-pause-button class="pause" @click="send('pause', 0)"></expo-pause-button>
          </el-col>
          <el-col :span="4">
            <expo-play-button class="play" @click="send('play', 0)"></expo-play-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-volumn0-button class="volumn0" @click="send('volume', 0)"></expo-volumn0-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-volumn100-button class="volumn100" @click="send('volume', 100)"></expo-volumn100-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '../components/Layout'
  import ExpoStopButton from '../components/ExpoStopButton'
  import ExpoPauseButton from '../components/ExpoPauseButton'
  import ExpoPlayButton from '../components/ExpoPlayButton'
  import ExpoVolumn0Button from '../components/ExpoVolumn0Button'
  import ExpoVolumn100Button from '../components/ExpoVolumn100Button'
  import {send} from '@/api/send'
  import ExpoButton from "./ExpoButton";

  export default {
    name: 'WisdomWaterVideoPlay',
    components: {
      ExpoButton,
      Layout,
      ExpoStopButton,
      ExpoPauseButton,
      ExpoPlayButton,
      ExpoVolumn0Button,
      ExpoVolumn100Button
    },
    props: {
      backName: {
        type: String,
        default: undefined
      },
      no: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      bindModule: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      async send(command, value) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        if (value > 0) {
          sendData.value = value
        }
        let res = await send(sendData)
      }
    }
  }
</script>
<style scoped>
  .button-container {
    margin: 0 auto;
    background: url(../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .body-title {
    font-weight: bold;
    margin: 0 auto;
    margin-top: 22%;
    width: 100%;
    color: #FFFFFF;
    font-size: 3vw;
    background: linear-gradient(to bottom, white, #98e0fc);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .small-col {
    /*padding: 45px 45px !important;*/
  }

  .pause {
    width: 100%;
  }

  .play {
    width: 100%;
  }

  .stop {
    width: 100%;
  }

  .volume0 {
    width: 100%;
  }

  .volume100 {
    width: 100%;
  }

  .open-button {
    font-size: 2vw;
    margin: 0 auto;
    width: 80%;
    padding-top: 3vw;
    padding-bottom: 3vw;
  }
</style>
