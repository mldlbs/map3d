<template>
  <div class="module">hello1</div>
</template>
<script>
  import module1 from '../../static/modules/module1';
  export default {
    layout: 'gis',
    data() {
      return {};
    },
    components: {
    },
    mounted() {
      module1.log();
    },
    methods: {},
    beforeDestroy() {
    }
  };
</script>
<style>
  .module{
    position: relative;
    color: #ffffff;
    z-index: 10;
  }
</style>
