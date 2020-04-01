/* eslint-disable */
/**
 * 地图（数据）查询功能 leaflet
 * @author gzq
 * 2019.10.30
 */
import verify from '../../../../mapjs/verify';

export default {
  queryBySql(cfg) {
    if (verify.verifyCfg(cfg, 'queryBySql')) {
      let sqlParam = new SuperMap.GetFeaturesBySQLParameters({
        queryParameter: {
          name: cfg.dataSetName + '@' + cfg.dataSourceName,
          attributeFilter: cfg.sql,
        },
        datasetNames: [cfg.dataSourceName + ':' + cfg.dataSetName],
        toIndex: -1,
      });
      L.supermap
        .featureService(cfg.url)
        .getFeaturesBySQL(sqlParam, (results) => {
          if (results) {
            cfg.success(results);
          }
        });
    } else {
      console.log('参数不完整');
    }
  },
  queryByBuffer(cfg) {
    if (verify.verifyCfg(cfg, 'queryByBuffer')) {
      let bufferParam = new SuperMap.GetFeaturesByBufferParameters({
        datasetNames: [cfg.dataSourceName + ':' + cfg.dataSetName],
        bufferDistance: 0.001,
        geometry: cfg.geometry,
        toIndex: -1
      });
      L.supermap
        .featureService(cfg.url)
        .getFeaturesByBuffer(bufferParam, cfg.success);
    }
  },
  queryByDistance(cfg) {
    if (verify.verifyCfg(cfg, 'queryByDistance')) {
      let param = new SuperMap.QueryByDistanceParameters({
        queryParams: cfg.queryParams,
        distance: 0.0001,
        geometry: cfg.geometry,
      });
      L.supermap
        .queryService(cfg.url)
        .queryByDistance(param, cfg.success);
    }
  },
  querySpecialLayers(cfg) {
    if (verify.verifyCfg(cfg, 'querySpecialLayers')) {
      L.supermap
        .layerInfoService(cfg.url)
        .getLayersInfo(cfg.success);
    }
  }
};
