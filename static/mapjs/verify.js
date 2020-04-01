export default {
  verifyCfg(cfg, fnc) {
    let isVerifyPass = true;
    switch (fnc) {
      case 'addMarker':
        if (!cfg.id || !cfg.position || !cfg.icon || !cfg.layerGroup) {
          isVerifyPass = false;
        }
        break;
      case 'getMarker':
        if (!cfg.id || !cfg.layerGroup) {
          isVerifyPass = false;
        }
        break;
      case 'addLayer':
        if (!cfg.url || !cfg.layerGroup) {
          isVerifyPass = false;
        }
        break;
      case 'addLayerGroups':
        if (!cfg.url || !cfg.layerGroup) {
          isVerifyPass = false;
        }
        break;
      case 'queryBySql':
        if (!cfg['url'] || !cfg['dataSetName'] || !cfg['dataSourceName'] || !cfg['success']) {
          isVerifyPass = false;
        }
        break;
      case 'queryByBuffer':
        if (!cfg['url'] || !cfg['dataSetName'] || !cfg['dataSourceName'] || !cfg['success'] || !cfg['geometry']) {
          isVerifyPass = false;
        }
        break;
      case 'queryByDistance':
        if (!cfg['url'] || !cfg['queryParams'] || !cfg['success'] || !cfg['geometry']) {
          isVerifyPass = false;
        }
        break;
      case 'querySpecialLayers':
        if (!cfg['url'] || !cfg['success']) {
          isVerifyPass = false;
        }
        break;
      case 'initSectionTheme':
        if (!cfg['url'] || !cfg['dataSetName'] || !cfg['dataSourceName'] || !cfg['success'] || !cfg['themeRanges'] || !cfg['tag']) {
          isVerifyPass = false;
        }
        break;
      case 'initIndividualTheme':
        if (!cfg['url'] || !cfg['dataSetName'] || !cfg['dataSourceName'] || !cfg['success'] || !cfg['themeUniques'] || !cfg['tag']) {
          isVerifyPass = false;
        }
        break;
      case 'initGridTheme':
        if (!cfg['url'] || !cfg['dataSetName'] || !cfg['dataSourceName'] || !cfg['success'] || !cfg['themeRanges']) {
          isVerifyPass = false;
        }
        break;
      default:
        isVerifyPass = true;
        break;
    }
    return isVerifyPass;
  }
};
