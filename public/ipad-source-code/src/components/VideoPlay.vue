<template>
  <layout :back-name="backName">
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
        <el-row :gutter="20">
          <el-col class="small-col" :span="4" :offset="2">
            <div :class="stopClass" @click="send('stop', 0)">
            </div>
          </el-col>
          <el-col class="small-col" :span="4">
            <div :class="pauseClass" @click="send('pause', 0)">
            </div>
          </el-col>
          <el-col :span="4">
            <div :class="playClass" @click="send('play', 0)">
            </div>
          </el-col>
          <el-col class="small-col" :span="4">
            <div :class="volume0Class" @click="send('volume', 0)">
            </div>
          </el-col>
          <el-col class="small-col" :span="4">
            <div :class="volume100Class" @click="send('volume', 100)">
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '../components/Layout'
  import {send} from '@/api/send'

  export default {
    name: 'VideoPlay',
    components: {
      Layout
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
      }
    },
    data() {
      return {
        pauseClass: 'pause',
        playClass: 'play',
        stopClass: 'stop',
        volume0Class: 'volume0',
        volume100Class: 'volume100'
      }
    },
    created() {
    },
    methods: {
      async send(command, value) {
        if (command == 'volume') {
          this[command + value + 'Class'] = command + value + '-hover'
        } else {
          this[command + 'Class'] = command + '-hover'
        }
        setTimeout(() => {
          if (command == 'volume') {
            this[command + value + 'Class'] = command + value
          } else {
            this[command + 'Class'] = command
          }
        }, 300)
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
    width: 80%;
    color: #FFFFFF;
    font-size: 4em;
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
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/pause.png) no-repeat;
    background-size: 100%;
  }

  .pause-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/pause-hover.png) no-repeat;
    background-size: 100%;
  }

  .play {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/play.png) no-repeat;
    background-size: 100%;
  }

  .play-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/play-hover.png) no-repeat;
    background-size: 100%;
  }

  .stop {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/stop.png) no-repeat;
    background-size: 100%;
  }

  .stop-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/stop-hover.png) no-repeat;
    background-size: 100%;
  }

  .volume0 {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0.png) no-repeat;
    background-size: 100%;
  }

  .volume0-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-0-hover.png) no-repeat;
    background-size: 100%;
  }

  .volume100 {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-100.png) no-repeat;
    background-size: 100%;
  }

  .volume100-hover {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: url(../assets/wisdom-water/volumn-100-hover.png) no-repeat;
    background-size: 100%;
  }
</style>
