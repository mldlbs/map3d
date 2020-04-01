import service from '../mapjs/config';
import iMap from '../libs/supermap/iclient-leaflet/mapUtils.js';
import { viewer } from '../mapjs/sceneEvent';
export default {
  log() {
    setTimeout(()=>{
      console.log(viewer);
    },1)
  }
};

