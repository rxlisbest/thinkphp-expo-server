<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="7">
          <div class="back" @click="back"></div>
        </el-col>
        <el-col :span="8">
          <div class="title"></div>
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
  .el-header {
    border-bottom: 1px solid #eee;
    padding-top: 40px;
    padding-left: 44px;
    text-align: left;
    height: 80px !important;
    border: 0px;
  }

  .back {
    height: 25px;
    width: 80px;
    background: url(../assets/back.png) no-repeat;
    background-size: 100% 100%;
  }

  .title {
    width: 400px;
    height: 25px;
    margin: 0px auto;
    background: url(../assets/set-up/title.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
