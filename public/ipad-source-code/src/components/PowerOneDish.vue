<template>
    <el-row>
      <el-col :span="8" :offset="16">
        <dish :no="no" :moveId="'move'" :ws="ws"></dish>
      </el-col>
    </el-row>
</template>

<script>
  import Dish from '../components/Dish'
  import {send} from '@/api/send'

  export default {
    name: 'PowerOneDish',
    components: {
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
      }
    },
    created() {
    },
    mounted(){
    },
    methods: {
    }
  }
</script>
<style scoped>
  .el-row {
    margin-top: 1%;
  }

  .el-col {
    height: 100%;
  }

  .square-button {
    margin: 2% auto;
    width: 60%;
  }

  .button {
    font-size: 2vw;
    margin: 0 auto;
    width: 100%;
    padding-top: 8%;
    padding-bottom: 8%;
  }
</style>
