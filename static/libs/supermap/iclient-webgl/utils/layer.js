import verify from '../../../../mapjs/verify';

/**
 * 图层操作
 */
export default {
  /**
   * 切换底图
   * @param cfg
   */
  switchLayer(cfg) {
    if (verify.verifyCfg(cfg, 'switchLayer')) {
      let scene = cfg['viewer'].scene;
      let layers = scene.layers;
      layers.forEach((item, i) => {
        item.setVisible(false);
      });
      layers.find(cfg.layer).setVisible(true);
    }
  }

};
