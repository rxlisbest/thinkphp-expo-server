<template>
  <product-detail :back-name="'wisdom-energy-meter'" :no="no" :index="key" :info="info"></product-detail>
</template>

<script>
  import Layout from '@/components/Layout'
  import ProductDetail from '@/components/ProductDetail'
  import WisdomEnergyMeter from "@/data/WisdomEnergyMeter"
  import {send} from '@/api/send'

  export default {
    name: 'wisdom-energy-meterDetail',
    components: {
      Layout,
      ProductDetail
    },
    data() {
      return {
        no: 9,
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      this.key = key
      this.info = WisdomEnergyMeter[key]
    },
    methods: {}
  }
</script>
<style scoped>
  .grid-content bg-purple {
    margin-top: 2%;
  }
</style>
