<template>
  <div class="simulation">
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
    <el-row>
      <el-col :span="14" :offset="1">
        <el-row :gutter="25" class="build-row">
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">办公楼宇</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">商业楼宇</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">市政设施</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="25" class="build-row">
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">教育机构</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">体育场</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">居民社区</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="25" class="build-row">
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">轻工业</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">冶金化工</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="build">
              <el-row>
                <el-col :span="24">
                  <div class="build-title">智慧园区</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="build-intro">介绍</el-col>
                <el-col :span="12" class="build-intro">控制</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'开启'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'闭合'" class="build-button"></expo-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="1">
                  <expo-button :name="'关闭'" class="build-button"></expo-button>
                </el-col>
                <el-col :span="10" :offset="2">
                  <expo-button :name="'分开'" class="build-button"></expo-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="1">
        <el-row>
          <el-col :span="18" :offset="3">
            <expo-button :name="'返回'" class="back"></expo-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3">
            <dish :no="no" :moveId="'move'" :ws="ws"></dish>
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

  export default {
    name: 'WisdomTownSimulation',
    components: {
      ExpoButton,
      Dish
    },
    props: {
      no: {
        type: Number,
        default: 0
      },
      ws: {
        type: WebSocket,
        default: {}
      }
    },
    data() {
      return {
        tab: 'main'
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
      }
    }
  }
</script>
<style scoped>
  .simulation {
    background: url(../assets/electric-automation/wisdom-town-2-bg.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .tab {
    height: 5.5vw;
  }

  .build {
    padding: 0.5vw;
    width: 100%;
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
    font-size: 1vw;
    padding-top: 0.8vw;
    padding-bottom: 0.8vw;
  }

  .build-row {
    margin-top: 1.2vw;
  }

  .back {
    margin-top: 1.2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }
</style>
