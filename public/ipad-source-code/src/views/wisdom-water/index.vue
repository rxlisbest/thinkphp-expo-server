<template>
  <video-play :back-name="'set-up-index'" :no="no" :title="title"></video-play>
</template>

<script>
  import VideoPlay from '../../components/VideoPlay'

  export default {
    name: 'wisdom-water-index',
    components: {
      VideoPlay
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
