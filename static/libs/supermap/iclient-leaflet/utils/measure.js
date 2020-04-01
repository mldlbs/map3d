/* eslint-disable */
/**
 * 地图量算 leaflet
 * @author gzq
 * 2019.10.30
 */
import turf from '@turf/turf';

export default {
  measure: {
    map: {},
    mlayer: {},
    veclayers: {},
    points: [],
    polygon: null,
    polyline: null,
    initMeasure(map, mlayer, veclayers) {
      this.measure.map = map;
      this.measure.veclayers = veclayers;
      this.measure.points = [];
      this.measure.polygon = null;
    },
    activateMeasure2DControl(type) {
      switch (type) {
        case 'DIS':
          this.measure.map.on('click', this.measure.dis.click);
          this.measure.map.on('mousemove', this.measure.dis.mousemove);
          this.measure.map.on('contextmenu', this.measure.dis.dblclick);
          break;
        case 'AREA':
          this.measure.map.on('click', this.measure.area.click);
          this.measure.map.on('mousemove', this.measure.area.mousemove);
          this.measure.map.on('contextmenu', this.measure.area.dblclick);
          break;
      }
    },
    dis: {
      distance: 0,
      end: null,
      calculate(start, end) {
        this.measure.dis.distance += start.distanceTo(end);
      },
      click(e) {
        // 添加点信息
        if (this.measure.dis.end) {
          this.measure.polyline = L.polyline([this.measure.dis.end, e.latlng], { color: 'red' });
          this.measure.veclayers.addLayer(this.measure.polyline);
          this.measure.dis.calculate(this.measure.dis.end, e.latlng);
        }
        this.measure.dis.end = e.latlng;
      },
      dblclick(e) {
        this.measure.polyline.bindPopup('总距离：' + this.measure.dis.distance + '千米', { closeButton: false }).openPopup(e.latlng);
        this.measure.map.off('click').off('dblclick').off('mousemove');
      },
      mousemove(e) {
        if (this.measure.polyline) {
          this.measure.veclayers.removeLayer(this.measure.polyline);
        }
        if (this.measure.dis.end) {
          this.measure.polyline = L.polyline([this.measure.dis.end, e.latlng], { color: 'red' });
          this.measure.veclayers.addLayer(this.measure.polyline);
        }
      }
    },
    area: {
      acreage: 0,
      start: null,
      end: null,
      points: [],
      calculate(polygon) {
        this.measure.area.acreage += turf.area(polygon.toGeoJSON());
      },
      click(e) {
        this.measure.area.points.push(e.latlng);
        if (this.measure.area.start) {
          if (this.measure.area.end) {
            if (this.measure.polygon) {
              this.measure.veclayers.removeLayer(this.measure.polygon);
            }
            this.measure.polygon = L.polygon(this.measure.area.points, { color: 'red' });
            this.measure.veclayers.addLayer(this.measure.polygon);
            this.measure.area.calculate(this.measure.polygon);
          }
          this.measure.area.end = e.latlng;
        } else {
          this.measure.area.start = e.latlng;
        }
      },
      dblclick(e) {
        this.measure.polygon.bindPopup('总面积：' + this.measure.area.acreage + '平方米', { closeButton: false }).openPopup(e.latlng);
        this.measure.map.off('click').off('dblclick').off('mousemove');
      },
      mousemove(e) {
        let p = this.measure.area.points.concat();
        p.push(e.latlng);
        if (this.measure.area.end) {
          if (this.measure.polygon) {
            this.measure.veclayers.removeLayer(this.measure.polygon);
          }
          this.measure.polygon = L.polygon(p, { color: 'red' });
          this.measure.veclayers.addLayer(this.measure.polygon);
        }
      }
    },
    clear() {
      this.measure.veclayers.clearLayers();
      this.measure.dis.end = null;
      this.measure.area.points = [];
      this.measure.area.start = null;
      this.measure.area.end = null;
      this.measure.map.off('click').off('dblclick').off('mousemove');
    }
  }
};
