<template>
  <layout :back-name="backName">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(v, k) in list">
          <router-link :to="{'name': view + '-productDetail', 'query': {'key': k}}">
            <div class="module">
              <div class="module-logo"></div>
              <div class="module-name">
                <p>{{ v.name }}</p>
              </div>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'

  export default {
    name: 'Product',
    components: {
      Layout
    },
    props: {
      backName: {
        type: String,
        default: undefined
      },
      view: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      to(name) {
        this.$router.push({name: name})
      }
    }
  }
</script>
<style scoped>
  .el-col {
    padding-top: 2%;
  }

  .module {
    text-align: center;
    width: 100%;
    padding-top: 20%;
    padding-bottom: 10%;
    background: url(../assets/set-up/module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    width: 70%;
    margin: 0 auto;
    padding-top: 5%;
    font-size: 2vw;
    color: #FFFFFF;
    padding-left: 5%;
    padding-right: 5%;
    height: 5%;
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: 8vw;
  }

  .module-logo {
    margin: 0px auto;
    width: 80%;
    height: 0;
    padding-bottom: 60%;
    background: url(../assets/electric-automation/wisdomTown.png) no-repeat;
    background-size: 100%;
  }

  .module-name p {
    margin: 0px;
    /*background: linear-gradient(to bottom, white, #baecff);*/
    /*-webkit-background-clip: text;*/
    /*color: transparent;*/
    /*-webkit-text-fill-color: transparent;*/
    /*text-fill-color: transparent;*/
  }
</style>
