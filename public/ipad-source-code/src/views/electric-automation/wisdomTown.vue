<template>
  <layout :title="'配电自动化智慧小镇'">
    <template slot="body">
      <wisdom-town-main :no="no" :ws="ws" v-if="tab == 'main'" @changeTab="changeTab"></wisdom-town-main>
      <wisdom-town-simulation :no="no" :ws="ws" v-if="tab == 'simulation'" @changeTab="changeTab"></wisdom-town-simulation>
      <wisdom-town-structure :no="no" v-if="tab == 'structure'" @changeTab="changeTab"></wisdom-town-structure>
      <div class="introduction" v-if="tab == 'introduction'">
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
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import SmallButton from '../../components/SmallButton'
  import BigButton from '../../components/BigButton'
  import ExpoButton from '../../components/ExpoButton'
  import PlayButton from '../../components/PlayButton'
  import PauseButton from '../../components/PauseButton'
  import WisdomTownMain from '../../components/WisdomTownMain'
  import WisdomTownSimulation from '../../components/WisdomTownSimulation'
  import WisdomTownStructure from '../../components/WisdomTownStructure'
  import {send} from '@/api/send'

  export default {
    name: 'electric-automation-wisdomTown',
    components: {
      Layout,
      SmallButton,
      BigButton,
      ExpoButton,
      PlayButton,
      PauseButton,
      WisdomTownMain,
      WisdomTownSimulation,
      WisdomTownStructure
    },
    data() {
      return {
        no: 3,
        ws: undefined,
        tab: 'main'
      }
    },
    watch: {},
    created() {
      this.ws = new WebSocket("ws://" + location.hostname + ":2346")
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
        console.log(tab)
        this.tab = tab
        // this.send(tab)
      }
    }
  }
</script>
<style scoped>

  .structure {
    background: url(../../assets/electric-automation/wisdom-town-3-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .introduction {
    background: url(../../assets/electric-automation/wisdom-town-4-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .tab {
    height: 5.5vw;
  }
</style>
