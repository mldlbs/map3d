<template>
  <div class="tools">
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#00102F55">

      <!--<el-submenu index="1" :show-timeout='50' :hide-timeout='50' popper-class="tool">-->
        <!--<template slot="title">地图</template>-->
        <!---->
      <!--</el-submenu>-->

      <el-submenu index="2" :show-timeout='50' :hide-timeout='50' popper-class="tool">
        <template slot="title">工具箱</template>
        <el-menu-item index="2-1" @click="doMeasure('DIS')"><img src="~assets/img/map/t/cj.png">测距</el-menu-item>
        <el-menu-item index="2-2" @click="doMeasure('DIS')"><img src="~assets/img/map/t/ct.png">测高</el-menu-item>
        <el-menu-item index="2-3" @click="doMeasure('AREA')"><img src="~assets/img/map/t/cm.png">测面</el-menu-item>
        <el-menu-item index="2-4" @click="clear"><img src="~assets/img/map/t/cc.png">清除</el-menu-item>
        <el-menu-item class="mapSwitch" index="1-1"  @click="switchView(1)"><img src="~/assets/img/map/shadow.png">二维</el-menu-item>
        <el-menu-item class="mapSwitch" index="1-2"  @click="switchView(2)"><img src="~/assets/img/map/earth.png">三维</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
  import {mapState,mapActions, mapMutations} from 'vuex';
  import main from '@/static/mapjs/main'

  export default {
    data() {
      return {}
    },
    components: {},
    mounted: function () {
    },
    computed: {
      ...mapState({
        TAG: state => state.Gis.TAG
      })
    },
    methods: {
      ...mapMutations([
        'CHANGE_TAG'
      ]),
      doMeasure(type) {
        main['mapEvent'].doMeasure(type);
      },
      clear() {
        main['mapEvent'].clearMeasures();
      },
      switchView(index) {
        // let cfg = {};
        let cfg = main['mapEvent'].getMapInfo();
        this.CHANGE_TAG(index);
        main['sceneEvent'].flyByInfo(cfg);
      },
    }
  }
</script>
<style>

  .tools {
    position: absolute;
    top: 66px;
    right: 0;
    z-index: 9999;
  }
  .tools > div {
    height: 26px;
    width: 110%;
    font-size: 10px;
    text-align: center;
    line-height: 26px;
  }
  .tools .el-menu{
    background: rgba(0, 16, 47,.5);
    color: #fff;
  }
  .tools .el-menu--horizontal > .el-menu-item {
    height: 30px;
    line-height: 30px;
    border-bottom: rgba(0, 16, 47,.5);
    color: #fff;
  }
  .tools .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 30px;
    line-height: 30px;
    border-bottom: rgba(0, 16, 47,.5);
    color: #fff;
  }
  .tools .el-menu.el-menu--horizontal {
    border-bottom: rgba(0, 16, 47,.5);
    color: #fff;
  }
  .tools .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background: rgba(0, 16, 47,.5);
    color: #fff;
  }
  .tools .el-menu--horizontal>.el-menu-item.is-active {
    background: rgba(0, 16, 47,.5);
    color: #fff;
  }

</style>
