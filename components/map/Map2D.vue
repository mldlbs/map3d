<template>
  <div id="map2d"></div>
</template>
<script>
  import main from "~/static/mapjs/main";

  export default {
    mounted() {
      setTimeout(()=> {
        main["mapEvent"].initMap();
      },1000);
    },
    watch: {},
    methods: {}
  };
</script>
<style>
  #map2d {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .leaflet-control-container {
    display: none;
  }

  /*width: 602px;
    height: 353px;*/
  .popupContentClass .leaflet-popup-content-wrapper {
    margin: -1px;
    padding: 0;
    width: 650px;
    height: 370px;
    border-radius: 0;
    background: rgba(0, 16, 47, 0.8);
    border: 1px solid #79b7e7;
  }

  .cameraContentClass .leaflet-popup-content-wrapper {
    margin: -1px;
    padding: 0;
    width: 602px;
    height: 353px;
    border-radius: 0;
    background: rgba(0, 16, 47, 0.8);
    border: 1px solid #79b7e7;
  }

  /* 综合研判popup框 */
  .leaflet-popup .leaflet-popup-content {
    margin: 0;
  }

  .leaflet-popup .tooltipOpen {
    color: rgba(7, 248, 248, 0.9) !important;
    background-color: transparent !important;
    font-size: 15px !important;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
  }

  .leaflet-popup .tooltipOpen:before {
    border-color: transparent !important;
    /* border-bottom-color: transparent !important; */
  }

  .leaflet-container a.leaflet-popup-close-button {
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 99999;
  }

  .leaflet-container a.leaflet-popup-close-button:hover {
    color: red;
  }

  .leaflet-popup .leaflet-popup-tip {
    background: rgba(0, 16, 47, 0.8);
    border: 1px solid #79b7e7;
  }

  /*.newPopupClass {*/
    /*position: absolute;*/
    /*z-index: 1;*/
    /*width: 380px;*/
    /*height: 245px;*/
    /*background: url("../../static/img/new-tkbg.png");*/
    /*padding: 8px 18px 125px 60px;*/
    /*!* pointer-events: none; *!*/
    /*background-size: 380px 300px;*/
    /*margin: 0 0 16px -43px !important;*/
  /*}*/

  /*.newPopupClass > div {*/
    /*background: transparent;*/
    /*box-shadow: none;*/
    /*pointer-events: auto;*/
  /*}*/

  /*.newPopupClass .leaflet-popup-tip-container .leaflet-popup-tip {*/
    /*background: transparent;*/
    /*box-shadow: none;*/
    /*color: transparent;*/
  /*}*/

  /*.newPopupClass .leaflet-popup-content {*/
    /*margin: 0 0;*/
  /*}*/

  /*.newPopupClass a.leaflet-popup-close-button {*/
    /*position: absolute;*/
    /*top: 16px;*/
    /*right: 25px;*/
    /*z-index: 200;*/
    /*font-size: 20px;*/
    /*cursor: pointer;*/
  /*}*/

  /*.houseWrapper {*/
    /*max-height: inherit;*/
    /*width: 308px;*/
    /*overflow-y: auto;*/
    /*height: 204px;*/
    /*text-align: left;*/
    /*border-radius: 12px;*/
    /*background: rgba(5, 32, 38, 0.4) !important;*/
    /*border: none;*/
    /*padding: 6px 13px 5px;*/
    /*pointer-events: auto;*/
    /*color: rgb(202, 226, 247);*/
    /*font-size: 15px;*/
  /*}*/

  /*.houseWrapper > h4 {*/
    /*background: rgba(17, 67, 88, 0.4);*/
    /*height: 20px;*/
    /*margin-top: 5px;*/
    /*text-align: left;*/
    /*font-size: 15px;*/
  /*}*/

  /*.houseWrapper::-webkit-scrollbar {*/
    /*display: none;*/
  /*}*/

  /*.newMonitor {*/
    /*background-color: rgba(29, 95, 216, 0.7);*/
    /*border-radius: 2px;*/
    /*padding: 4px;*/
  /*}*/

  /*.newMonitor p {*/
    /*text-align: left;*/
    /*font-size: 13px;*/
    /*color: rgb(225, 237, 247);*/
  /*}*/

  /*#monitor {*/
    /*overflow-y: auto;*/
  /*}*/

  /*#monitor div {*/
    /*margin: 4px 0px;*/
  /*}*/

  /*.content h4 {*/
    /*margin-bottom: 4px;*/
  /*}*/

  /*.content p {*/
    /*text-align: left;*/
    /*color: rgba(6, 165, 165, 0.9);*/
    /*margin: 4px;*/
  /*}*/

  /*.leaflet-control-container {*/
    /*display: none;*/
  /*}*/

  /*.tooltipOpen {*/
    /*color: rgba(7, 248, 248, 0.9) !important;*/
    /*background-color: transparent !important;*/
    /*font-size: 15px !important;*/
    /*box-shadow: none !important;*/
    /*border: none !important;*/
    /*outline: none !important;*/
  /*}*/

  /*.tooltipOpen,*/
  /*.leaflet-tooltip:before {*/
    /*border-top-color: transparent !important;*/
    /*border-bottom-color: transparent !important;*/
  /*}*/

  /*#heat div {*/
    /*margin: 4px 0;*/
  /*}*/

  /*#qxz {*/
    /*margin-top: 3px;*/
  /*}*/

  /*#qxz div {*/
    /*margin: 6px 0px;*/
  /*}*/

  /*#warn div {*/
    /*margin: 4px 0px;*/
  /*}*/

  /*.dbwy h4 {*/
    /*color: rgb(223, 240, 255);*/
    /*text-align: left;*/
    /*font-size: 14px;*/
    /*padding-left: 10px;*/
    /*padding-top: 6px;*/
  /*}*/

  /*.dbwy > div {*/
    /*width: 590px;*/
    /*height: 265px;*/
    /*display: none;*/
  /*}*/
</style>
