<template>
  <layout :back-name="backName" :backCommand="{'no': no, 'command': 'product'}">
    <template slot="body">
      <div class="button-container">
        <el-row>
          <el-col :span="12" :offset="6">
            <img class="product-img" :src="info.img">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6">
            <div class="product-name">{{ info.name }}</div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="12" v-for="(v, k) in info.video.small">
            <expo-button class="button" :name="v" @click="send('product', index, {'video': k})"></expo-button>
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
    name: 'ProductDetail',
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
      this.send('product', this.key)
      console.log(this.info.img)
      this.info.img = require('@/' + this.info.img)
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

  .product-img {
    width: 100%;
    max-height: 30%;
  }
</style>
