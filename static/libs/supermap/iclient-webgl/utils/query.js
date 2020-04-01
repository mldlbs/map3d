/**
 * 查询数据服务
 */
import verify from '../../../../mapjs/verify';

export default {
  /**
   * sql 查询
   * @param cfg
   */
  doSqlQuery(cfg) {
    if (verify.verifyCfg(cfg,'doSqlQuery')) {
      let getFeatureParam, getFeatureBySQLService, getFeatureBySQLParams;
      getFeatureParam = new SuperMap.REST.FilterParameter({
        attributeFilter: cfg.sql
      });
      getFeatureBySQLParams = new SuperMap.REST.GetFeaturesBySQLParameters({
        queryParameter: getFeatureParam,
        toIndex: -1,
        datasetNames: cfg.datasetNames
      });
      getFeatureBySQLService = new SuperMap.REST.GetFeaturesBySQLService(cfg.url, {
        eventListeners: {
          'processCompleted': cfg.success,
          'processFailed': this.processFailed
        }
      });
      getFeatureBySQLService.processAsync(getFeatureBySQLParams);
    }
  },
  /**
   * 查询失败
   * @param queryEventArgs
   */
  processFailed(queryEventArgs) {
    console.log('执行失败！', queryEventArgs);
  }
};
