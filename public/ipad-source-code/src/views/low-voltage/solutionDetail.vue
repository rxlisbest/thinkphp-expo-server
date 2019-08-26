<template>
  <solution-detail v-if="info.type == 'SolutionDetail'" :back-name="'low-voltage-index'" :no="no" :index="key" :info="info"></solution-detail>
  <video-play v-else :back-name="'low-voltage-index'" :no="no" :title="info.name"></video-play>
</template>

<script>
  import SolutionDetail from '@/components/SolutionDetail'
  import LowVoltageSolution from "@/data/LowVoltageSolution"
  import VideoPlay from '../../components/VideoPlay'

  export default {
    name: 'low-voltage-productDetail',
    components: {
      SolutionDetail,
      VideoPlay
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
