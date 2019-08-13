<template>
  <video-play :no="no" :title="title"></video-play>
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
        title: 'assets/wisdom-water/title.png'
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
</style>
