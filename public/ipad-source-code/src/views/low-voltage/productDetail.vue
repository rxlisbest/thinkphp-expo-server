<template>
  <product-detail :back-name="'low-voltage-product'" :no="no" :index="key" :info="info"></product-detail>
</template>

<script>
  import ProductDetail from '@/components/ProductDetail'
  import LowVoltage from "@/data/LowVoltage"

  export default {
    name: 'low-voltage-productDetail',
    components: {
      ProductDetail
    },
    data() {
      return {
        no: 5,
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      this.key = key
      this.info = LowVoltage[key]
    },
    methods: {
    }
  }
</script>
<style scoped>
  .grid-content bg-purple {
    margin-top: 30px;
  }
</style>
