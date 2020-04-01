<template>
  <div id="main" class="main">
    <Header/>
    <GIS/>
    <!--<Live/>-->
    <Nuxt/>
  </div>
</template>
<script>
  import Header from '~/components/common/header.vue'
  import GIS from '~/components/map/Gis.vue'

  export default {
    data() {
      return {}
    },
    components: {
      GIS,Header
    },
    mounted: function () {

    }
  }
</script>
<style></style>
