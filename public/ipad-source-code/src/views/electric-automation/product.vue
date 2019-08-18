<template>
  <product :back-name="'electric-automation-index'" :view="'electric-automation'" :list="list"></product>
</template>

<script>
  import Product from '@/components/Product'
  import ElectricAutomation from "@/data/ElectricAutomation";

  export default {
    name: 'electric-automation-product',
    components: {
      Product
    },
    data() {
      return {
        list: ElectricAutomation
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>
