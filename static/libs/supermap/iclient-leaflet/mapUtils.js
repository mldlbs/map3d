/* eslint-disable */
/**
 * 二维leaflet工具类
 * @author gzq
 * @editor Hash
 * 2019.10.30
 */
import query from './utils/query';
import theme from './utils/themeLayer';
import measure from './utils/measure';
import verify from '../../../mapjs/verify';

export default {
  utils: {
    query: query,
    theme: theme,
    measure: measure,
    icon(cfg) {
      return L.icon({
        iconUrl: cfg.url,
        iconSize: cfg.iconSize || [15, 15],
        iconAnchor: cfg.iconAnchor || [0, 0],
        popupAnchor: cfg.popupAnchor || [0, 0],
      });
    },
    addMarker(cfg) {
      if (verify.verifyCfg(cfg, 'addMarker')) {
        let layer = L.marker(cfg.position, {
          icon: cfg.icon,
          id: cfg.id,
          props: cfg.props,
          autoPan: true,
        }).addTo(cfg.layerGroup);
        if (!cfg.noPopup) {
          let popup = layer.bindPopup(cfg.content, {
            className: cfg.className,
            offset: cfg.popOffset
          });
          console.log('已绑定！', popup);
        }
        return layer;
      }
    },
    getMarker(cfg) {
      if (verify.verifyCfg(cfg, 'getMarker')) {
        cfg.layerGroup.eachLayer(function (layer) {
          if (layer.options.id === cfg.id) {
            if (cfg.callback) {
              cfg.callback(layer);
            }
            return layer;
          }
        });
      }
    }
  },
  initMap(cfg) {
    let baseMap = L.map('map2d', {
      crs: cfg.crs,
      center: cfg.center,
      maxZoom: cfg.maxZoom,
      zoom: cfg.zoom,
      attributionControl: false
    });
    L.supermap['tiledMapLayer'](cfg.url, { id: cfg.layerId }).addTo(baseMap);
    return baseMap;
  }
};

