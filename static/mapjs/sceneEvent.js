/* eslint-disable */
import iScene from '../libs/supermap/iclient-webgl/sceneUtils';
import { service, URL_CONFIG } from './config';

/**
 * 三维地图功能入口
 */
let viewer, scene, handler, utils;
export default {
  initScene: function () {
    let cfg = {
      cesium: Cesium,
      id: 'map3d',
      url: URL_CONFIG.SCENE_CBD,
      success: this.initSceneSuccess
    };
    viewer = iScene.initScene(cfg);
    scene = viewer.scene;
    handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  },
  /**
   * 初始化场景成功回调
   */
  initSceneSuccess: function () {
    utils = iScene.utils;
    this.infoBoxMove();

  },
  /**
   * 弹框跟随
   */
  infoBoxMove() {
    scene.postRender.addEventListener(() => {
      let heading = scene.camera.heading;
      let x = -Cesium.Math.toDegrees(heading);
      let degrees = 'rotate(' + x + 'deg)';
      let infoBox = document.getElementById('.infoBox');
      infoBox.style.transform = degrees;
    });
  }
};
export { viewer, scene, utils, handler };
