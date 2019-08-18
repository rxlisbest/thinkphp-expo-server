<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="5">
          <div class="back" @click="back"></div>
        </el-col>
        <el-col :span="8">
          <div class="title">
            <img :src="require('../assets/set-up/title.png')">
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <slot name="body"></slot>
    </el-main>
  </el-container>
</template>

<script>
  import {send} from '@/api/send'

  const backCommandDefault = function () {
    return {}
  }

  export default {
    name: 'Layout',
    components: {},
    data() {
      return {}
    },
    props: {
      backCommand: {
        type: Object,
        default: backCommandDefault
      },
      backName: {
        type: String,
        default: undefined
      }
    },
    mounted() {
    },
    methods: {
      async back() {
        if (this.backCommand.no != undefined) {
          let res = await send(this.backCommand)
        }
        if (this.backName !== undefined) {
          this.$router.push({name: this.backName})
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style scoped>
  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-row {
    widht: 100%;
    height: 100%;
  }

  .el-col {
    height: 100%;
  }

  .el-header {
    padding-top: 3%;
    padding-left: 5%;
    text-align: left;
    height: 10% !important;
    width: 100%;
    border: 0px;
  }

  .el-main {
    width: 100%;
    height: 90%;
    padding: 5% 5%;
  }

  .back {
    margin-top: 3%;
    height: 50%;
    width: 36%;
    background: url(../assets/back.png) no-repeat;
    background-size: 100% 100%;
  }

  .title {
    height: 68%;
  }

  .title img {
    height: 100%;
  }
</style>
