<template>
  <video-play :no="no" :title="title"></video-play>
</template>

<script>
  import VideoPlay from '../../components/VideoPlay'

  export default {
    name: 'wisdom-energy-detail',
    components: {
      VideoPlay
    },
    data() {
      return {
        no: 0,
        title: 'assets/wisdom-water/title.png'
      }
    },
    created() {
      this.no = this.$route.query.no
    },
    methods: {}
  }
</script>
<style scoped>
</style>

