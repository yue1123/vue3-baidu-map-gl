<template>
  <Map
    v-bind="$attrs"
    :zoom="5"
    :center="{ lat: 39.915185, lng: 116.403901 }"
    :plugins="['Mapvgl', 'Mapv']"
    :displayOptions="{
      indoor: false,
      poi: true,
      skyColors: ['rgba(5, 5, 30, 0.01)', 'rgba(5, 5, 30, 1.0)']
    }"
    mapStyleId="91c53039a0b7f75e3dd8ddcdd932243b"
    enableScrollWheelZoom
    @pluginReady="handleInitd"
  />
</template>
<script setup>
  function handleInitd(map) {
    let data = []

    let citys = [
      '北京',
      '天津',
      '上海',
      '重庆',
      '石家庄',
      '太原',
      '呼和浩特',
      '哈尔滨',
      '长春',
      '沈阳',
      '济南',
      '南京',
      '合肥',
      '杭州',
      '南昌',
      '福州',
      '郑州',
      '武汉',
      '长沙',
      '广州',
      '南宁',
      '西安',
      '银川',
      '兰州',
      '西宁',
      '乌鲁木齐',
      '成都',
      '贵阳',
      '昆明',
      '拉萨',
      '海口'
    ]

    let randomCount = 300

    // 构造数据
    while (randomCount--) {
      let cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[Math.floor(Math.random() * citys.length)])
      data.push({
        geometry: {
          type: 'Point',
          coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
        },
        properties: {
          count: Math.random() * 100
        }
      })
    }

    let view = new mapvgl.View({
      map: map
    })

    let pointLayer = new mapvgl.PointLayer({
      blend: 'lighter',
      size: 15,
      color: 'rgba(102, 0, 204, 0.6)'
    })

    view.addLayer(pointLayer)
    pointLayer.setData(data)
  }
</script>
