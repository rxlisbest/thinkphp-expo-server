<template>
  <layout :back-name="backName" :backCommand="{'no': no, 'command': 'product'}">
    <template slot="body">
      <div class="button-container">
        <el-row>
          <el-col :span="12" :offset="6">
            <div class="product-img-div">
              <img class="product-img" :src="require('@/' + info.img)">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="product-name">{{ info.name }}</div>
          </el-col>
        </el-row>
        <!--        <el-row :gutter="0">-->
        <!--          <el-col :span="8" v-for="(v, k) in info.video.small">-->
        <!--            <expo-button class="button" :name="v" @click="send('product', index, {'video': k})"></expo-button>-->
        <!--          </el-col>-->
        <!--        </el-row>-->

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
  import ExpoStopButton from '../components/ExpoStopButton'
  import ExpoPauseButton from '../components/ExpoPauseButton'
  import ExpoPlayButton from '../components/ExpoPlayButton'
  import ExpoVolumn0Button from '../components/ExpoVolumn0Button'
  import ExpoVolumn100Button from '../components/ExpoVolumn100Button'
  import {send} from '@/api/send'

  export default {
    name: 'ProductDetail',
    components: {
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
      no: {},
      index: {
        type: Number,
        default: 0
      },
      info: {
        type: Object,
        default: undefined
      }
    },
    data() {
      return {}
    },
    created() {
      this.mutiSend('product', this.index)
    },
    methods: {
      async send(no, command, value, param) {
        let sendData = {}
        sendData.no = no
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
  .product-name {
    color: #FFFFFF;
    font-size: 3vw;
    background: linear-gradient(to bottom, white, #baecff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    overflow: hidden;
  }

  .el-col {
    text-align: center;
  }

  .button-container {
    padding-top: 5%;
    padding-bottom: 5%;
    background: url(../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    font-size: 2vw;
    margin: 0 auto;
    width: 70%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .product-img-div {
    display: flex;
    margin: 0 auto;
    width: 30vw;
    height: 30vw;
    align-items: center; /*副轴居中*/
  }

  .product-img {
    margin: 0px auto;
    max-width: 30vw;
    max-height: 30vw;
    width: expression(this.width > '30vw' ? "30vw" : this.width);
    vertical-align: middle;
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
