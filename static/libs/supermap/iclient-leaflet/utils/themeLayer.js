/* eslint-disable */
/**
 * 专题图 leaflet
 * @author gzq
 * 2019.10.30
 */
import verify from '../../../../mapjs/verify';

export default {
  initSectionTheme(cfg) {
    if (verify.verifyCfg(cfg, 'initSectionTheme')) {
      let themeService = L.supermap.themeService(cfg.url);
      let items = [];
      cfg.themeRanges.forEach(v => {
        let c = v.color.split(',');
        items.push(new SuperMap.ThemeRangeItem({
          start: v.start,
          end: v.end,
          style: new SuperMap.ServerStyle({
            fillForeColor: new SuperMap.ServerColor(parseInt(c[0]), parseInt(c[1]), parseInt(c[2])),
            lineColor: new SuperMap.ServerColor(167, 167, 167),
            lineWidth: 0.01
          })
        }));
      });
      let themeRange = new SuperMap.ThemeRange({
        rangeExpression: cfg.tag,
        rangeMode: SuperMap.RangeMode.EQUALINTERVAL,
        items: items
      });
      let themeParameters = new SuperMap.ThemeParameters({
        datasetNames: [cfg.dataSetName],
        dataSourceNames: [cfg.dataSourceName],
        joinItems: null,
        themes: [themeRange]
      });
      themeService.getThemeInfo(themeParameters, cfg.success);
    } else {
      console.log('参数不完整');
    }
  },

  initIndividualTheme(cfg) {
    if (verify.verifyCfg(cfg, 'initIndividualTheme')) {
      let defultStyle = new SuperMap.ServerStyle({
        fillForeColor: new SuperMap.ServerColor(248, 203, 249),
        lineColor: new SuperMap.ServerColor(255, 255, 255),
        lineWidth: 0.1
      });
      let themeService = L.supermap.themeService(cfg.url);
      let items = [];
      cfg.themeUniques.forEach(v => {
        let c = v.color.split(',');
        items.push(new SuperMap.ThemeUniqueItem({
          unique: v.unique,
          style: new SuperMap.ServerStyle({
            fillForeColor: new SuperMap.ServerColor(parseInt(c[0]), parseInt(c[1]), parseInt(c[2])),
            lineColor: new SuperMap.ServerColor(167, 167, 167),
            lineWidth: 0.01
          })
        }));
      });
      let themeUnique = new SuperMap.ThemeUnique({
        uniqueExpression: cfg.tag,
        items: items,
        defaultStyle: defultStyle

      });
      let themeParameters = new SuperMap.ThemeParameters({
        datasetNames: [cfg.dataSetName],
        dataSourceNames: [cfg.dataSourceName],
        themes: [themeUnique]
      });
      themeService.getThemeInfo(themeParameters, cfg.success);
    } else {
      console.log('参数不完整');
    }
  },

  initGridTheme(cfg) {
    if (verify.verifyCfg(cfg, 'initGridTheme')) {
      let themeService = L.supermap.themeService(cfg.url);
      let items = [];
      cfg.themeRanges.forEach(v => {
        let c = v.color.split(',');
        items.push(new SuperMap.ThemeGridRangeItem({
          start: v.start,
          end: v.end,
          color: new SuperMap.ServerColor(parseInt(c[0]), parseInt(c[1]), parseInt(c[2])),
        }));
      });
      let themeRange = new SuperMap.ThemeGridRange({
        reverseColor: false,
        rangeMode: SuperMap.RangeMode.EQUALINTERVAL,
        items: items
      });
      let themeParameters = new SuperMap.ThemeParameters({
        datasetNames: [cfg.dataSetName],
        dataSourceNames: [cfg.dataSourceName],
        joinItems: null,
        themes: [themeRange]
      });
      themeService.getThemeInfo(themeParameters, cfg.success);
    } else {
      console.log('参数不完整');
    }
  }
};
