<template>
  <layout :title="'配电自动化智慧小镇'">
    <template slot="body">
      <wisdom-town-main :no="no" :ws="ws" v-if="tab == 'main'" @changeTab="changeTab"></wisdom-town-main>
      <wisdom-town-simulation :no="no" :ws="ws" v-if="tab == 'simulation'"
                              @changeTab="changeTab"></wisdom-town-simulation>
      <wisdom-town-structure :no="no" v-if="tab == 'structure'" @changeTab="changeTab"></wisdom-town-structure>
      <wisdom-town-introduction :no="no" v-if="tab == 'introduction'" @changeTab="changeTab"></wisdom-town-introduction>
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
  import WisdomTownIntroduction from '../../components/WisdomTownIntroduction'
  import WebsocketConfig from '../../config/websocket'
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
      WisdomTownStructure,
      WisdomTownIntroduction
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
      this.connectWS()
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
        this.send(tab)
      },
      connectWS() {
        if (this.ws == undefined || this.ws.readyState !== undefined && this.ws.readyState == 3) {
          this.ws = new WebSocket("ws://" + location.hostname + ":2346")
        }
        setTimeout(() => {
          if (this.$route.name == 'electric-automation-wisdomTown') {
            this.connectWS()
          }
        }, WebsocketConfig.reconnect)
      }
    }
  }
</script>
<style scoped>
  .tab {
    height: 5.5vw;
  }
</style>
