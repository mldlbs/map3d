/**
 * 三维webgl工具类
 */

import layer from './utils/layer';
import query from './utils/query';

export default {
  initScene(cfg) {
    let viewer = new Cesium['Viewer'](cfg.id, {
      sceneModePicker: false,
      navigation: false
    });
    viewer['selectionIndicator'].destroy();
    viewer['infoBox'].destroy();
    let scene = viewer.scene;
    let promise = scene.open(cfg.url);
    cfg.cesium.when(promise, cfg.success);
    return viewer;
  },
  utils: {
    layer,query
  }
};

