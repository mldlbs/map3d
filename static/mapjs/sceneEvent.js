/* eslint-disable */
import iScene from '../libs/supermap/iclient-webgl/sceneUtils';
import {service,URL_CONFIG} from './config';
/**
 * 三维地图功能入口
 */
export let viewer, scene;
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

  },
  /**
   * 初始化场景成功回调
   */
  initSceneSuccess: function () {
  },
};
