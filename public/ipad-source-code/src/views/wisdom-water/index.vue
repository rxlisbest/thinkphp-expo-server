<template>
  <video-play :no="no"></video-play>
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
      }
    },
    created() {
    },
    methods: {}
  }
</script>
<style scoped>
</style>
