<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="5">
          <div class="back" @click="back"></div>
        </el-col>
        <el-col :span="13">
          <div class="title">
            {{ title }}
<!--            <img :src="require('../assets/set-up/title.png')">-->
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
      },
      title: {
        type: String,
        default: '国际工业与能源物联网创新发展大会'
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
    text-align: center;
    height: 100%;
    font-size: 3vw;
    font-weight: bold;
    background: linear-gradient(to bottom, #3defff, #4497ff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .title img {
    /*height: 100%;*/
  }
</style>
