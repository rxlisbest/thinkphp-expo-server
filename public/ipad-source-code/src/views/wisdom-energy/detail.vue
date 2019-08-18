<template>
  <video-play :back-name="'wisdom-energy-index'" :no="no" :title="title"></video-play>
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
        title: ''
      }
    },
    created() {
      this.no = this.$route.query.no
      this.title = this.$route.query.title
    },
    methods: {}
  }
</script>
<style scoped>
</style>

