<template>
  <solution-detail :back-name="'low-voltage-solution'" :no="no" :index="key" :info="info"></solution-detail>
</template>

<script>
  import SolutionDetail from '@/components/SolutionDetail'
  import LowVoltageSolution from "@/data/LowVoltageSolution"

  export default {
    name: 'low-voltage-productDetail',
    components: {
      SolutionDetail
    },
    data() {
      return {
        no: 0,
        key: 0,
        info: {}
      }
    },
    created() {
      let key = this.$route.query.key
      let no = this.$route.query.no
      this.key = key
      this.no = no
      this.info = LowVoltageSolution[key]
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
