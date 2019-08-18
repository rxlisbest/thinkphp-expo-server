<template>
  <product :back-name="'low-voltage-index'" :view="'low-voltage'" :list="list"></product>
</template>

<script>
  import Product from '@/components/Product'
  import LowVoltage from "@/data/LowVoltage";

  export default {
    name: 'low-voltage-product',
    components: {
      Product
    },
    data() {
      return {
        list: LowVoltage
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
  .el-col {
    padding-top: 30px;
}
</style>
