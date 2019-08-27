<template>
  <product-detail :back-name="'electric-automation-product'" :no="no" :index="key" :info="info"></product-detail>
</template>

<script>
  import ProductDetail from '@/components/ProductDetail'
  import ElectricAutomation from "@/data/ElectricAutomation"

  export default {
    name: 'electric-automation-productDetail',
    components: {
      ProductDetail
    },
    data() {
      return {
        no: [100, 101],
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      this.key = key
      this.info = ElectricAutomation[key]
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>
