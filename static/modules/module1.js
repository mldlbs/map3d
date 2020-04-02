import service from '../mapjs/config';
import { viewer, handler, utils } from '../mapjs/sceneEvent';

let main = {
  initHandler() {
    handler.setInputAction(function (click) {
      let picked = viewer.scene.pick(click.position);
      if (Cesium.defined(picked)) {
        let entity = Cesium.defaultValue(picked.id, picked.primitive.id);
        if (entity) {
          console.log(entity);
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
};

/**
 * 模块一
 */
export default {
  init() {
    setTimeout(() => {
      main.initHandler();
    }, 1);
  }
};
