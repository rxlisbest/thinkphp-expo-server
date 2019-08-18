<template>
  <div class="container">
    <el-row class="title-row">
      <el-col :span="24" style="height: 100%;">
        <div class="title">
          国际工业与能源物联网创新发展大会
        </div>
      </el-col>
    </el-row>
    <el-row class="module-row">
      <el-col :span="4" :offset="2">
        <div class="module" @click="to('electric-automation-index')">
          <div class="module-electric-automation module-logo"></div>
          <div class="module-name">电力自动化</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('electric-automation-ar')">
          <div class="module-electric-automation module-logo"></div>
          <div class="module-name">电力自动化AR</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('wisdom-water-index')">
          <div class="module-wisdom-water module-logo"></div>
          <div class="module-name">智慧水务</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('low-voltage-index')">
          <div class="module-low-voltage module-logo"></div>
          <div class="module-name">低压智能配电</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('low-voltage-ar')">
          <div class="module-low-voltage module-logo"></div>
          <div class="module-name">低压智能配电AR</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="module-row">
      <el-col :span="4" :offset="4">
        <div class="module" @click="to('wisdom-energy-index')">
          <div class="module-wisdom-energy module-logo"></div>
          <div class="module-name">智慧能效</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('new-energy-index')">
          <div class="module-new-energy module-logo"></div>
          <div class="module-name">新能源</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('new-china-index')">
          <div class="module-new-china module-logo"></div>
          <div class="module-name">新华</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="module" @click="to('energy-storage-index')">
          <div class="module-energy-storage module-logo"></div>
          <div class="module-name">储能</div>
        </div>
      </el-col>
    </el-row>
    <!--    <el-table-->
    <!--      :data="moduleData"-->
    <!--      stripe-->
    <!--      style="width: 100%">-->
    <!--      <el-table-column-->
    <!--        prop="date"-->
    <!--        label="模块名称">-->
    <!--        <template slot-scope="scope">-->
    <!--          <router-link :to="{'name': scope.row.router}">{{scope.row.name}}</router-link>-->
    <!--        </template>-->
    <!--      </el-table-column>-->
    <!--      <el-table-column-->
    <!--        prop="name"-->
    <!--        label="设置权限">-->
    <!--        <template slot-scope="scope">-->
    <!--          <el-button @click="setUp(scope)" type="danger" circle icon="el-icon-link-->
    <!--"></el-button>-->
    <!--        </template>-->
    <!--      </el-table-column>-->
    <!--    </el-table>-->
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
      to(name) {
        this.$router.push({name: name})
      },
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
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .title {
    font-size: 3vw;
    font-weight: bold;
    color: white;
    width: 50%;
    height: 0;
    padding-bottom: 4%;
    margin: 0px auto;
    /*background: url(../../assets/set-up/title.png) no-repeat;*/
    /*background-size: 100% 100%;*/

    background: linear-gradient(to bottom, #3defff, #4497ff);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .module-row {
    height: 42%;
  }

  .el-col {
    height: 100%;
  }

  .module {
    text-align: center;
    width: 100%;
    height: 38%;
    padding-top: 60%;
    padding-bottom: 60%;
    background: url(../../assets/set-up/module-bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .module-hover {
    text-align: center;
    width: 100%;
    padding-top: 60%;
    padding-bottom: 60%;
    background: url(../../assets/set-up/module-hover-bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-row {
    padding-bottom: 2%;
  }

  .module-electric-automation {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/electric-automation.png) no-repeat;
    background-size: 100%;
  }

  .module-wisdom-water {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/wisdom-water.png) no-repeat;
    background-size: 100% 100%;
  }

  .module-low-voltage {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/low-voltage.png) no-repeat;
    background-size: 100%;
  }

  .module-wisdom-energy {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/wisdom-energy.png) no-repeat;
    background-size: 100%;
  }

  .module-new-energy {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/new-energy.png) no-repeat;
    background-size: 100%;
  }

  .module-new-china {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/new-china.png) no-repeat;
    background-size: 100%;
  }

  .module-energy-storage {
    margin: 0px auto;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
    background: url(../../assets/set-up/energy-storage.png) no-repeat;
    background-size: 100%;
  }

  .module-name {
    width: 100%;
    padding-top: 10%;
    height: 20%;
    font-size: 2vw;
    color: #FFFFFF;
  }
</style>
