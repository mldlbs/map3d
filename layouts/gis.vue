<template>
  <div id="main" class="main">
    <Header/>
    <GIS/>
    <Nuxt/>
  </div>
</template>
<script>
  import Header from '~/components/common/header'
  import GIS from '~/components/map/Gis'
  export default {
    data() {
      return {}
    },
    components: {
      Header,GIS
    },
    mounted: function () {
    }
  }
</script>
<style></style>
