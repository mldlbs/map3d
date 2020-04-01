<template>
  <div id="map" class="map">
    <MAP3D v-show="tag === 2"/>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex';
  import main from '../../static/mapjs/main'
  import MAP3D from '~/components/map/Map3D.vue'
  import Tools from '~/components/map/Tools.vue'

  import '~/assets/css/localCircleAnimate.css'

  export default {
    computed: {
      ...mapState({
        Gis: state => state.Gis
      })
    },
    data() {
      return {
        tag: 2
      }
    },
    watch: {
      'Gis.TAG'() {
        this.tag = this.Gis.TAG;
      }
    },
    components: {
       MAP3D, Tools
    },
    mounted: function () {
    },
    methods: {}
  }
</script>
<style>
  .map {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
</style>
