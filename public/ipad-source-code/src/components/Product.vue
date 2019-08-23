<template>
  <layout :back-name="backName">
    <template slot="body">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(v, k) in list">
          <router-link :to="{'name': view + '-productDetail', 'query': {'key': k}}">
            <cross-module :image="v.img" :title="v.name"></cross-module>
<!--            <div class="module">-->
<!--              <div class="module-logo">-->
<!--                <img :src="require('@/' + v.img)">-->
<!--              </div>-->
<!--              <div class="module-name">-->
<!--                <p>{{ v.name }}</p>-->
<!--              </div>-->
<!--            </div>-->
          </router-link>
        </el-col>
      </el-row>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import CrossModule from '@/components/CrossModule'

  export default {
    name: 'Product',
    components: {
      Layout,
      CrossModule
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
</style>
