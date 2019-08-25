<template>
  <layout :back-name="backName" :backCommand="{'no': no, 'command': 'product'}">
    <template slot="body">
      <div class="button-container">
        <el-row v-if="info.children != undefined && info.children.length > 1">
          <el-col :span="3" :offset="3" v-if="info.children != undefined && info.children.length > 1">
            <div class="left" @click="left"></div>
          </el-col>
          <el-col :span="12">
            <el-carousel :autoplay="false" ref="muti-product-detail-carousel" @change="changeItem">
              <el-carousel-item v-for="v in info.children">
                <div class="product-img-div">
                  <img class="product-img" :src="require('@/' + v.img)">
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="3">
            <div class="right" @click="right"></div>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="12" :offset="6">
            <div class="product-img-div">
              <img class="product-img" :src="require('@/' + child.img)">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="product-name">{{ child.name }}</div>
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
    name: 'MutiProductDetail',
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
      return {
        child: {}
      }
    },
    created() {
      console.log(this.info)
      if (this.info.children != undefined && this.info.children.length > 1) {
        this.child = this.info.children[0]
      } else {
        this.child = this.info
      }
      this.send('product', this.child.index)
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
      left() {
        this.$refs['muti-product-detail-carousel'].prev()
      },
      right() {
        this.$refs['muti-product-detail-carousel'].next()
      },
      changeItem(index) {
        this.child = this.info.children[index]
        this.send('product', this.child.index)
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

  .left {
    margin: 5vw auto;
    width: 70%;
    height: 0;
    padding-bottom: 160%;
    background: url(../assets/components/left.png) no-repeat;
    background-size: 100%;
  }

  .right {
    margin: 5vw auto;
    width: 70%;
    height: 0;
    padding-bottom: 160%;
    background: url(../assets/components/right.png) no-repeat;
    background-size: 100%;
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

  .el-carousel__button {
    width: 10px !important;
    height: 10px !important;
  }
</style>
