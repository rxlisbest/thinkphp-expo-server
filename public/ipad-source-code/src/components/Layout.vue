<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="5">
          <div class="back" @click="back" v-if="!bindedModule && bindModule || !bindedModule || !bindModule"></div>
        </el-col>
        <el-col :span="13">
          <div class="title">
            {{ title }}
<!--            <img :src="require('../assets/set-up/title.png')">-->
          </div>
        </el-col>
        <el-col class="bind" :span="3" :offset="3" v-if="bindModule">
          <el-button type="warning" icon="el-icon-connection" circle @click="bind"  v-if="!bindedModule"></el-button>
          <el-button type="danger" icon="el-icon-connection" circle @click="unbind"  v-if="bindedModule"></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <slot name="body"></slot>
      <el-dialog title="解除绑定" :visible.sync="formDialog">
        <el-form :model="form">
          <el-form-item label="密码">
            <el-input v-model="form.password" autocomplete="off" show-password></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="formDialog = false">取 消</el-button>
          <el-button type="primary" @click="unbindSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import {send} from '@/api/send'
  import BindConfig from '../config/bind'

  const backCommandDefault = function () {
    return {}
  }

  export default {
    name: 'Layout',
    components: {},
    data() {
      return {
        bindedModule: '',
        form: {
          password: ''
        },
        formDialog: false
      }
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
      },
      bindModule: {
        type: String,
        default: ''
      }
    },
    mounted() {
      this.bindedModule = localStorage.getItem('module')
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
      },
      bind() {
        this.$confirm('确定绑定此模块?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.setItem('module', this.bindModule)
          this.bindedModule = localStorage.getItem('module')
          this.$message({
            type: 'success',
            message: '绑定成功'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消绑定'
          })
        })
      },
      unbind() {
        this.formDialog = true
      },
      unbindSubmit() {
        if (this.form.password == BindConfig.password) {
          localStorage.removeItem('module')
          this.$message({
            type: 'success',
            message: '解绑成功'
          })
          this.formDialog = false
        } else {
          this.$message({
            type: 'error',
            message: '密码错误'
          })
        }
        this.bindedModule = localStorage.getItem('module')
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

  .bind {
    text-align: center;
  }
</style>
