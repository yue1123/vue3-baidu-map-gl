<template>
  <Map
    v-bind="$attrs"
    :tilt="45"
    :zoom="8.5"
    :center="{ lat: 27.84893, lng: 111.858773 }"
    :displayOptions="{
      indoor: false,
      poi: true
    }"
    mapStyleId="980161f3645989feac25a0da15da4178"
    enableScrollWheelZoom
    :plugins="['Mapvgl', 'Mapv', 'MapvglThree']"
    @pluginReady="handleInitd"
  />
</template>

<script setup>
  import { Map } from 'vue3-baidu-map-gl'
  function handleInitd(map) {
    let citys = [
      '长沙市',
      '株洲市',
      '湘潭市',
      '衡阳市',
      '邵阳市',
      '岳阳市',
      '常德市',
      '张家界市',
      '益阳市',
      '郴州市',
      '永州市',
      '怀化市',
      '娄底市'
    ]

    let randomCount = 100 // 模拟的飞线的数量
    let curve = new mapvgl.BezierCurve()

    let data = []

    // 构造数据
    while (randomCount--) {
      let startPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])
      let endPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])

      curve.setOptions({
        start: [startPoint.lng, startPoint.lat],
        end: [endPoint.lng, endPoint.lat]
      })
      let curveModelData = curve.getPoints()

      data.push({
        geometry: {
          type: 'LineString',
          coordinates: curveModelData
        },
        properties: {
          count: Math.random()
        }
      })
    }

    let view = new mapvgl.View({
      map: map
    })

    let flylineLayer = new mapvgl.FlyLineLayer({
      style: 'chaos',
      step: 0.3,
      color: 'rgba(33, 242, 214, 0.3)',
      textureColor: function (data) {
        return data.properties.count > 0.5 ? '#ff0000' : '#56ccdd'
      },
      textureWidth: 20,
      textureLength: 10
    })
    view.addLayer(flylineLayer)
    flylineLayer.setData(data)
  }
</script>
