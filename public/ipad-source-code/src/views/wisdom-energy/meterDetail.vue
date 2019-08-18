<template>
  <solution-detail :back-name="'wisdom-energy-meter'" :no="no" :index="key" :info="info"></solution-detail>
</template>

<script>
  import Layout from '@/components/Layout'
  import SolutionDetail from '@/components/SolutionDetail'
  import WisdomEnergyMeter from "@/data/WisdomEnergyMeter"
  import {send} from '@/api/send'

  export default {
    name: 'wisdom-energy-meterDetail',
    components: {
      Layout,
      SolutionDetail
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
