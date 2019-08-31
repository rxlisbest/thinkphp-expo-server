<template>
  <div class="structure">
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
    <el-row :gutter="20" class="top-row">
      <el-col :span="6" :offset="3">
        <expo-button :name="'主接线图'" class="module-button" @click="send('image', {'value': 0})"></expo-button>
      </el-col>
      <el-col :span="6">
        <expo-button :name="'产品拓扑图'" class="module-button" @click="send('image', {'value': 1})"></expo-button>
      </el-col>
      <el-col :span="6">
        <expo-button :name="'系统架构图'" class="module-button" @click="send('image', {'value': 2})"></expo-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-row :gutter="30" class="build-row">
          <el-col :span="8" v-for="(v, k) in list">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">{{ v.name }}</div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <expo-button :name="'闭合'" @click="switchClick(k, 1)" :hover="list[k].switch ? true: false" class="build-button"></expo-button>
                </el-col>
                <el-col :span="12">
                  <expo-button :name="'分开'" @click="switchClick(k, 0)" :hover="list[k].switch ? false : true" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ExpoButton from '../components/ExpoButton'
  import Dish from '../components/Dish'
  import {send} from '@/api/send'
  import WisdomTownSmulation from "../data/WisdomTownSimulation"
  for(let i in WisdomTownSmulation) {
    WisdomTownSmulation[i].switch = 1
  }

  export default {
    name: 'WisdomTownStructure',
    components: {
      ExpoButton,
      Dish
    },
    props: {
      no: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        list: WisdomTownSmulation,
      }
    },
    watch: {},
    created() {
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
        this.$emit('changeTab', tab)
      },
      switchClick(index, value) {
        this.list[index].switch = value
        this.send('switch', {'no': index, 'value': value})
      }
    }
  }
</script>
<style scoped>
  .structure {
    background: url(../assets/electric-automation/wisdom-town-3-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .tab {
    height: 5.5vw;
  }

  .build {
    margin-top: 3vw;
    padding: 1vw;
    width: 90%;
    border: 0.1vw solid #77d3ff;
  }

  .build-title {
    font-size: 1.8vw;
    margin: 0px;
    background: linear-gradient(to bottom, white, #bbedff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .build-intro {
    font-size: 1.5vw;
    margin: 0px;
    background: linear-gradient(to bottom, #91ddff, #5087ed);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .build-button {
    color: #d2fcff;
    font-size: 1.6vw;
    padding-top: 0.8vw;
    padding-bottom: 0.8vw;
  }

  .build-row {
    margin-top: 1.2vw;
  }

  .module-button {
    color: #d2fcff;
    font-size: 2.5vw;
    margin-top: 1.2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }

  .top-row {
    margin-top: 3vw;
  }
</style>
