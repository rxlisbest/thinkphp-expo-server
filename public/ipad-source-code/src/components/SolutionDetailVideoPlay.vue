<template>
  <layout :title="info.name" :back-name="backName" :backCommand="{'no': no, 'command': 'solution'}">
    <template slot="body">
      <div class="button-container">
        <el-row class="row-img">
          <el-col :span="18" :offset="3">
            <div class="product-img-div">
              <img class="product-img" :src="info.imgDetail !== undefined ? require('@/' + info.imgDetail) : require('@/' + info.img)">
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col class="small-col" :span="4" :offset="2">
            <expo-stop-button class="stop" @click="mutiSend('stop', 0)"></expo-stop-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-pause-button class="pause" @click="mutiSend('pause', 0)"></expo-pause-button>
          </el-col>
          <el-col :span="4">
            <expo-play-button class="play" @click="mutiSend('play', 0)"></expo-play-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-volumn0-button class="volumn0" @click="mutiSend('volume', 0)"></expo-volumn0-button>
          </el-col>
          <el-col class="small-col" :span="4">
            <expo-volumn100-button class="volumn100" @click="mutiSend('volume', 100)"></expo-volumn100-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
  import ExpoStopButton from '../components/ExpoStopButton'
  import ExpoPauseButton from '../components/ExpoPauseButton'
  import ExpoPlayButton from '../components/ExpoPlayButton'
  import ExpoVolumn0Button from '../components/ExpoVolumn0Button'
  import ExpoVolumn100Button from '../components/ExpoVolumn100Button'
  import {send} from '@/api/send'

  export default {
    name: 'SolutionDetailVideoPlay',
    components: {
      Layout,
      ExpoButton,
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
      index: {
        type: Number,
        default: 0
      },
      info: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
    },
    created() {
      this.send('product', this.index)
      // this.info.img = require(this.info.img)
    },
    methods: {
      async send(command, value, param) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        sendData.value = value
        if (param != undefined) {
          sendData.param = param
        }
        let res = await send(sendData)
      },
      mutiSend(command, value, param) {
        if (typeof this.no == 'object') {
          for (let i in this.no) {
            let no = this.no[i]
            this.send(no, command, value, param)
          }
        } else {
          let no = this.no
          this.send(no, command, value, param)
        }
      }
    }
  }
</script>
<style scoped>
  .row-img {
    margin-top: 1%;
  }

  .row-button {
    margin-top: 1%;
  }

  .product-name {
    color: #FFFFFF;
    font-size: 3vw;
    background: linear-gradient(to bottom, white, #baecff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .el-col {
    text-align: center;
  }

  .button-container {
    padding-top: 3%;
    padding-bottom: 3%;
    background: url(../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    font-size: 2vw;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .product-img-div {
    margin: 0 auto;
    width: 60vw;
    height: 36vw;
  }

  .product-img {
    max-width: 60vw;
    max-height: 36vw;
    width: expression(this.width > '36vw' ? "36vw" : this.width);
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
</style>
