<template>
  <module/>
</template>
<script>
  import module from '~/components/actions/module1';

  export default {
    layout: 'gis',
    head: {
      title: '综合管理'
    },
    data() {
      return {};
    },
    components: {
      module
    },
    mounted() {

    },
    methods: {},
    beforeDestroy() {
    }
  };
</script>
