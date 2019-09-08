<template>
  <wisdom-water-video-play :back-name="'set-up-index'" :no="no" :title="title" :bind-module="'electric-automation-index'"></wisdom-water-video-play>
</template>

<script>
  import WisdomWaterVideoPlay from '../../components/WisdomWaterVideoPlay'

  export default {
    name: 'wisdom-water-index',
    components: {
      WisdomWaterVideoPlay
    },
    data() {
      return {
        no: 4,
        title: '智慧水务'
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
</style>
