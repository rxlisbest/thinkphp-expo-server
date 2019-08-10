<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('pause', 0)">暂停</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('play', 0)">播放</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('stop', 0)">停止</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('volume', 0)">静音</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="send('volume', 100)">不静音</el-button>
          </div>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '../../components/Layout'
  import { send } from '@/api/send'

  export default {
    name: 'wisdom-water-index',
    components: {
      Layout
    },
    data() {
      return {
        no: 0
      }
    },
    created() {
      this.no = this.$route.query.no
    },
    methods: {
      send(command, value) {
        let sendData = {}
        sendData.no = this.no
        sendData.command = command
        if (value > 0) {
          sendData.value = value
        }
        send(sendData).then(response => {

        })
      }
    }
  }
</script>
<style scoped>
</style>
