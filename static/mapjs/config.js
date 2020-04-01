/* eslint-disable */
/**
 * 初始化gis相关基础数据
 */
const host = 'http://222.91.72.102:2664';
const iServer = host + '/iserver/services/';
export let URL_CONFIG = {
  TDT_IMG: 'https://[subdomain].tianditu.com/img_w/wmts',//天地图影像
  TDT_LABEL: 'https://[subdomain].tianditu.com/cia_w/wmts',//天地图文字注记
  BINGMAP: '//dev.virtualearth.net',//bing map影像
  STK: 'https://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path',//STK 地形
  ZF_IMG: 'http://www.supermapol.com/realspace/services/3D-dxyx_ios2/rest/realspace/datas/MosaicResult_2@IMAGE_1',
  ZF_TERRAIN: 'http://www.supermapol.com/realspace/services/3D-dxyx_ios2/rest/realspace/datas/DatasetDEM_1@sichuanTer',
  ZF_IMG2: 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/image',//珠峰影像SCI
  ZF_TERRAIN2: 'http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace/datas/srtm_54_07@zhufeng',//珠峰地形SCT
  SiChuan_TERRAIN: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', // 四川地形
  SiChuan_IMG: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult', // 四川影像
  TENSE_IMG0: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0300@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG1: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0310@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG2: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0330@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG3: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0340@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG4: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0350@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG5: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0400@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG6: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0410@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG7: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0420@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG8: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0430@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG9: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0440@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  TENSE_IMG10: 'http://www.supermapol.com/realspace/services/3D-HuanJingJianCe/rest/realspace/datas/rs0450@%E6%88%BF%E5%B1%B1',//环境监测时态影像SCI（房山）
  SUPERMAP_IMG_WGS: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',//经纬度投影地图TILE IMGERY（中国区域）
  SUPERMAP_IMG_MEC: 'http://www.supermapol.com/realspace/services/map-China400/rest/maps/China400',//墨卡托投影地图TILE IMGERY（全球）
  SCENE_NIAOCHAO: 'http://www.supermapol.com/realspace/services/3D-niaocao_water/rest/realspace', // 鸟巢 场景
  SCENE_BIMBUILDING: 'http://www.supermapol.com/realspace/services/3D-BIMbuilding/rest/realspace', // BIM 场景
  SCENE_POINTCLOUD: 'http://www.supermapol.com/realspace/services/3D-cloud/rest/realspace',
  SCENE_SGNS: 'http://www.supermapol.com/realspace/services/3D-SGNS/rest/realspace', // 四姑娘山 场景
  SCENE_CBD: 'http://www.supermapol.com/realspace/services/3D-CBD/rest/realspace', // CBD场景
  BING_MAP_KEY: 'AhLx52IuZUuca_C3zK2TzBG2eu1vihUkayqc_e4MISbXZyn5Zw_X--odRqrweVap',
  TOKEN_TIANDITU: '4a00a1dc5387b8ed8adba3374bd87e5e', // 天地图token
};
export let service = {
  mConf: {
    x: 109.16653009033203,
    y: 35.265538635253906,
    zoom: 2,
    minZoom: 2
  },
  sConf: {
    x: 109.16653009033203,
    y: 35.265538635253906,
    height: 27080.69973126,
    pitch: -1.5707953113269526,
    roll: 0,
    type: 'setView'
  },
  data: {}
};
