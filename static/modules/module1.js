import service from '../mapjs/config';
import { viewer, utils } from '../mapjs/sceneEvent';

/**
 * 模块一
 */
export default {
  log() {
    setTimeout(() => {
      console.log(viewer, utils);
    }, 1);
  }
};

