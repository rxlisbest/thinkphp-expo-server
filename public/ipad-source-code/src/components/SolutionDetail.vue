<template>
  <layout :title="info.name" :back-name="backName" :backCommand="{'no': no, 'command': 'solution'}">
    <template slot="body">
      <div class="button-container">
        <el-row class="row-img">
          <el-col :span="18" :offset="3">
            <div class="product-img-div">
              <img class="product-img"
                   :src="info.imgDetail !== undefined ? require('@/' + info.imgDetail) : require('@/' + info.img)">
            </div>
          </el-col>
        </el-row>
        <el-row class="row-button" :gutter="0">
          <el-col :span="6" v-for="(v, k) in info.video.small">
            <expo-button class="button" :name="v" @click="send('product', k)"></expo-button>
          </el-col>
          <el-col :span="3">
            <expo-button class="circle-button" :name="'首页'" @click="send('circle', 0)"></expo-button>
          </el-col>
          <el-col :span="3">
            <expo-button class="circle-button" :name="'循环播放'" @click="send('circle', 1)"></expo-button>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import ExpoButton from '@/components/ExpoButton'
  import {send} from '@/api/send'

  export default {
    name: 'SolutionDetail',
    components: {
      Layout,
      ExpoButton
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
      // this.send('product')
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
    padding-top: 5%;
    padding-bottom: 5%;
    background: url(../assets/wisdom-water/border.png) no-repeat;
    background-size: 100% 100%;
  }

  .button {
    width: 80%;
    font-size: 2vw;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .circle-button {
    width: 80%;
    font-size: 1.3vw;
    margin: 0 auto;
    padding-top: 27%;
    padding-bottom: 27%;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
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
</style>
