<template>
  <layout :back-name="backName">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(v, k) in list">
          <router-link :to="{'name': view + '-productDetail', 'query': {'key': k}}">
            <div class="module">
              <div class="module-logo">
                <img :src="v.img">
              </div>
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
      return {}
    },
    created() {
      this.list.forEach((v, k) => {
        this.list[k].img = require('@/' + v.img)
      })
    },
    mounted() {
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
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: 8.7vw;
  }

  .module-logo {
    margin: 0px auto;
    width: 12vw;
    height: 12vw;
    /*background: url(../assets/electric-automation/wisdomTown.png) no-repeat;*/
    background-size: 100%;
  }

  .module-logo img {
    max-width: 12vw;
    max-height: 12vw;
    width: expression(this.width > '12vw' ? "12vw" : this.width);
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
