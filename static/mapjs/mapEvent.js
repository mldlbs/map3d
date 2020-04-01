/* eslint-disable */
import {service} from './config';
import iMap from '../libs/supermap/iclient-leaflet/mapUtils';
/**添加模块索引*/
import module1 from '../modules/module1';

/**
 * 二维地图功能入口
 */
let map;
let pulses, mLayer, vecLayers, markers, localPulsesPoint, toolsLayer, monitorLayer, positionsLayer;

export default {

  module1: module1,
  iMap: iMap,

  /**
   * 初始化地图
   * @returns {*}
   */
  initMap() {
    /**设置2000坐标系*/
    proj4.defs('EPSG:4490', '+proj=longlat +ellps=GRS80 +no_defs');
    console.log(proj4);
    let cfg = {
      crs: L.Proj.CRS('EPSG:4490', {
        origin: [290066.5, 3862313.27],
        resolutions: [0.002100487609723095, 0.0015753657072923213, 0.0010502438048615476, 0.000787682853646160, 0.0005251219024307738, 0.0002625609512153869, 0.000065640237803846725, 0.0000328201189019233625, 0.00001641005945096168125, 0.000008205029725480840625, 0.0000041025148627404203125, 0.00000205125743137021015625],
        dpi: 96
      }),
      url: service.mapYXUrl,
      center: [service.mConf.y, service.mConf.x],
      maxZoom: 11,
      zoom: service.mConf.zoom,
      layerId: 'yx'
    };
    map = iMap.initMap(cfg);
    this.addLayers();
  },
  /**
   * 获取二维地图信息
   * @returns {{center: (*|Point|LatLng|void|Array<number>), zoom: (*|number), bounds: *}}
   */
  getMapInf() {
    return {
      center: map.getCenter(),
      zoom: map.getZoom(),
      bounds: map.getBounds()
    };
  },
  /**
   * 添加所有图层
   */
  addLayers() {
    mLayer = L.supermap['turfLayer']({
      attribution: '',
      style: function () {
        return {
          color: 'rgb(255,0,0)',
          opacity: 1,
          fillColor: 'rgb(255,0,0)',
          fillOpacity: 0.1,
          weight: 6
        };
      }
    }).addTo(map);
    vecLayers = L.layerGroup().addTo(map); // 矢量图层
    markers = L.layerGroup().addTo(map);// marker 图层
    pulses = L.layerGroup().addTo(map);// 闪烁点图层
    toolsLayer = L.layerGroup().addTo(map);//灾害范围/威胁用户等图层
    monitorLayer = L.layerGroup().addTo(map);//监测员图层
    positionsLayer = L.layerGroup().addTo(map);//专业监测设备图层
    //iMap.utils.measure.initMeasure(map, mLayer, vecLayers);
  },
  /**
   * 切换底图
   * @param tag
   */
  changeMap(tag) {
    map.eachLayer((layer) => {
      if (layer.options.id === 'yx' || layer.options.id === 'sl') {
        layer.remove();
      }
    });
    switch (tag) {
      case 0:
        L.supermap['tiledMapLayer'](service.mapSLUrl, { id: 'sl' }).addTo(map);
        break;
      case 1:
        L.supermap['tiledMapLayer'](service.mapYXUrl, { id: 'yx' }).addTo(map);
        break;
    }
  },
  /**
   * 量算
   * @param type
   */
  doMeasure(type) {
    iMap.utils.measure.activateMeasure2DControl(type);
  },
  clearMeasures() {
    iMap.utils.measure.clear();
  },
  /**
   * 添加Markers
   * @param items
   */
  addMarkers(items) {
    markers.clearLayers();
    items.forEach((item) => {
      if (!iMap.utils.getMarker({
        id: item['id'],
        layerGroup: markers
      })) {
        let cfg = {
          position: item.position,
          icon: iMap.utils.icon({
            url: item['icon'],
            iconSize: item['iconSize'],
            iconAnchor: item['iconAnchor']
          }),
          id: item['id'],
          props: item,
          layerGroup: markers,
          noPopup: item.noPopup,
          content: item.content,
          popOffset: item.popOffset || [0, 0],
          className: item.className,
          clickEvent: (e) => {
            map.setView(e.latlng, 9);
            if (item.callback) {
              item.callback();
            }
          }
        };
        /**添加标记气泡*/
        let layer = iMap.utils.addMarker(cfg);
        if (cfg.clickEvent) {
          layer.on('click', cfg.clickEvent);
        }
      }
    });
  },
  /**
   * 添加闪烁点Markers
   * @param items
   * @param iconData
   */
  addPulses(items, iconData) {
    pulses.clearLayers();
    let icon = L.icon.pulse({
      iconSize: (iconData && iconData.iconSize) || [12, 12],
      color: '#ff000299',
      iconAnchor: (iconData && iconData.iconAnchor) || [6, 6],
    });
    items.forEach((item) => {
      if (!iMap.utils.getMarker({
        id: item['id'],
        layerGroup: pulses
      })) {
        let cfg = {
          position: item.position,
          icon: icon,
          id: item['id'],
          props: item,
          layerGroup: pulses,
          noPopup: item.noPopup,
          content: item.content,
          clickEvent: function () {
            alert();
          }
        };
        /**添加标记气泡*/
        let layer = iMap.utils.addMarker(cfg);
        if (cfg.clickEvent) {
          layer.on('click', cfg.clickEvent);
        }
      }
    });
  },
  /**
   * 定位到当前点
   * @param cfg
   */
  fixPosition(cfg) {
    map.setView(cfg.latlng, cfg.zoom);
  },
  /**
   * 定位到当前点并将动画点进行移动
   * @param cfg
   */
  fixPulsesPosition(cfg) {
    if (localPulsesPoint) {
      localPulsesPoint.setLatLng(cfg.latlng);
    }
    map.setView(cfg.latlng, cfg.zoom);
  },
  /**
   * 添加自定义闪烁点
   * @param item 项
   * @param divData div参数
   */
  addLocalPulses(item, divData) {
    pulses.clearLayers();
    let style = '';
    if (divData && divData.iconSize) {
      style = 'width:' + divData.iconSize[0] + 'px;height:' + divData.iconSize[0] + 'px;';
    }
    let icon = L.divIcon({
      iconSize: (divData && divData.iconSize) || [60, 60],
      html: '<div class="wave solid red" style="' + style + '">' +
        '<div class="circle"></div>' +
        '<div class="circle"></div>' +
        '<div class="circle"></div>' +
        '</div>',
      className: '',
      iconAnchor: (divData && divData.iconAnchor) || [30, 30]
    });

    let cfg = {
      position: item.position,
      icon: icon,
      id: item['id'],
      props: item,
      layerGroup: pulses,
      noPopup: item.noPopup,
      content: item.content,
      clickEvent: null
    };
    localPulsesPoint = iMap.utils.addMarker(cfg);
  },
};
