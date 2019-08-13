<template>
  <layout>
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(v, k) in list">
          <router-link :to="{'name': name + '-productDetail', 'query': {'key': k}}">
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
    padding-top: 30px;
  }

  .module {
    text-align: center;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background: url(../assets/set-up/module-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-name {
    padding-top: 20px;
    font-size: large;
    color: #FFFFFF;
    padding-left: 30px;
    padding-right: 30px;
    height: 50px;
    overflow-x: hidden;
    overflow-y: hidden;
    word-wrap: break-word;
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
