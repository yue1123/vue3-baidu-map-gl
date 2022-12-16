<template>
  <Map
    v-bind="$attrs"
    :heading="30"
    :tilt="30"
    :zoom="12"
    :center="{ lat: 39.925406, lng: 116.387456 }"
    :displayOptions="{
      indoor: false,
      poi: true,
      skyColors: ['rgba(5, 5, 30, 0.01)', 'rgba(5, 5, 30, 1.0)']
    }"
    mapStyleId="980161f3645989feac25a0da15da4178"
    enableScrollWheelZoom
    :plugins="['Mapvgl', 'Mapv']"
    @pluginReady="handlePluginReady"
  />
</template>

<script setup>
  function handlePluginReady(map) {
    let view = new mapvgl.View({
      map: map
    })

    let grid = new mapvgl.HeatGridLayer({
      max: 80, // 最大阈值
      min: 10, // 最小阈值
      gridSize: 500,
      gradient: {
        // 对应比例渐变色
        0: 'rgb(50, 50, 256)',
        0.3: 'rgb(178, 202, 256)',
        1: 'rgb(250, 250, 256)'
      },
      riseTime: 1800, // 楼块初始化升起时间
      maxHeight: 10000, // 最大高度
      minHeight: 200 // 最小高度
    })
    view.addLayer(grid)

    fetch('/vue3-baidu-map-gl/beijing.json')
      .then((rs) => {
        return rs.json()
      })
      .then((rs) => {
        rs = rs.result.data[0].bound
        let data = []
        for (let i = 0; i < rs.length; i++) {
          let item = rs[i]
          data.push({
            geometry: {
              type: 'Point',
              coordinates: [item[0], item[1]]
            },
            properties: {
              count: item[2]
            }
          })
        }
        grid.setData(data)
      })
  }
</script>
