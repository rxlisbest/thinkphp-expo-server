<template>
  <div class="container">
    <el-row class="title-row">
      <el-col :span="24" style="height: 100%;">
        <div class="title"></div>
      </el-col>
    </el-row>
    <el-table
      :data="moduleData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="模块名称">
        <template slot-scope="scope">
          <router-link :to="{'name': scope.row.router}">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="设置权限">
        <template slot-scope="scope">
          <el-button @click="setUp(scope)" type="danger" circle icon="el-icon-link
"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'set-up-index',
    components: {},
    data() {
      return {
        moduleData: [
          {
            router: 'electric-automation-index',
            name: '电力自动化'
          },
          {
            router: 'electric-automation-ar',
            name: '电力自动化AR识别'
          },
          {
            router: 'wisdom-water-index',
            name: '智慧水务'
          },
          {
            router: 'low-voltage-index',
            name: '低压智能配电'
          },
          {
            router: 'low-voltage-ar',
            name: '低压智能配电AR识别'
          },
          {
            router: 'wisdom-energy-index',
            name: '智慧能效'
          },
          {
            router: 'new-energy-index',
            name: '新能源'
          },
          {
            router: 'new-china-index',
            name: '新华'
          },
          {
            router: 'energy-storage-index',
            name: '储能系统'
          }
        ]
      }
    },
    created() {
    },
    methods: {
      setUp(data) {
        this.$confirm('设置后将不能返回主菜单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'error',
            message: '暂不支持此功能'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
    }
  }
</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
  .title-row {
    margin-top: 30px;
  }
  .title {
    width: 400px;
    height: 25px;
    margin: 0px auto;
    background: url(../../assets/set-up/title.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
