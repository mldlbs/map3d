<template>
  <div></div>
</template>
<script>
export default {
  layout: 'gis',
  data() {
    return {};
  },
  asyncData: {

  },
  mounted() {
    this.$router.push({
      path: '/actions/model1'
    })
  },
  methods: {},
  beforeDestroy() {
  }
};
</script>
