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
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
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
    margin: 0 auto;
    width: 30vw;
    height: 30vw;
  }

  .product-img {
    max-width: 30vw;
    max-height: 30vw;
    width: expression(this.width > '30vw' ? "30vw" : this.width);
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
