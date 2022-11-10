# mapvgl 可视化

本章节将演示一下通过插件的形式加载 `mapvgl` 相关资源，以及如何与 `mapvgl` 结合。

> 以下示例均来自于 `mapvgl` 官方示例。更多示例见及文档请参考: https://mapv.baidu.com/gl/docs/index.html

## PointLayer 基础点层图

> https://mapv.baidu.com/gl/docs/PointLayer.html

<Map
:zoom="5"
:center="{ lat: 39.915185, lng: 116.403901 }"
:plugins="[ 'Mapvgl', 'Mapv' ]"
:displayOptions="{
indoor: false,
poi: true,
skyColors: ['rgba(5, 5, 30, 0.01)', 'rgba(5, 5, 30, 1.0)']
}"
mapStyleId="91c53039a0b7f75e3dd8ddcdd932243b"
enableScrollWheelZoom
@pluginReady="handleInit"
/>

<script lang="ts" setup>
  function handleInit(map){
    var data = []

    var citys = [
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

    var randomCount = 300

    // 构造数据
    while (randomCount--) {
      var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[Math.floor(Math.random() * citys.length)])
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

    var view = new mapvgl.View({
      map: map
    })

    var pointLayer = new mapvgl.PointLayer({
      blend: 'lighter',
      size: 15,
      color: 'rgba(102, 0, 204, 0.6)'
    })

    view.addLayer(pointLayer)
    pointLayer.setData(data)
  }

  function handleInitd1(map){
    var citys = [
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
    ];

    var randomCount = 100; // 模拟的飞线的数量
    var curve = new mapvgl.BezierCurve();

    var data = [];

    // 构造数据
    while (randomCount--) {
        var startPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)]);
        var endPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)]);

        curve.setOptions({
            start: [startPoint.lng, startPoint.lat],
            end: [endPoint.lng, endPoint.lat]
        });
        var curveModelData = curve.getPoints();

        data.push({
            geometry: {
                type: 'LineString',
                coordinates: curveModelData
            },
            properties: {
                count: Math.random()
            }
        });
    }

    var view = new mapvgl.View({
        map: map
    });

    var flylineLayer = new mapvgl.FlyLineLayer({
        style: 'chaos',
        step: 0.3,
        color: 'rgba(33, 242, 214, 0.3)',
        textureColor: function (data) {
            return data.properties.count > 0.5 ? '#ff0000' : '#56ccdd';
        },
        textureWidth: 20,
        textureLength: 10
    });
    view.addLayer(flylineLayer);
    flylineLayer.setData(data);
  }


  function handleInitd2(map){
    var view = new mapvgl.View({
        map: map
    });

    var grid = new mapvgl.HeatGridLayer({
        max: 80, // 最大阈值
        min: 10, // 最小阈值
        gridSize: 500,
        gradient: { // 对应比例渐变色
            0: 'rgb(50, 50, 256)',
            0.3: 'rgb(178, 202, 256)',
            1: 'rgb(250, 250, 256)'
        },
        riseTime: 1800, // 楼块初始化升起时间
        maxHeight: 10000, // 最大高度
        minHeight: 200 // 最小高度
    });
    view.addLayer(grid);

    fetch('/vue3-baidu-map-gl/beijing.json').then(rs => {
        return rs.json();
    }).then(rs => {
        rs = rs.result.data[0].bound;
        var data = [];
        for (var i = 0; i < rs.length; i++) {
            var item = rs[i];
            data.push({
                geometry: {
                    type: 'Point',
                    coordinates: [item[0], item[1]]
                },
                properties: {
                    count: item[2]
                }
            });
        }
        grid.setData(data);
    });
  }

</script>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map
  :zoom="5"
  :center="{ lat: 39.915185, lng: 116.403901 }"
  :displayOptions="{
  indoor: false,
  poi: true,
  skyColors: ['rgba(5, 5, 30, 0.01)', 'rgba(5, 5, 30, 1.0)']
  }"
  mapStyleId="91c53039a0b7f75e3dd8ddcdd932243b"
  enableScrollWheelZoom
  :plugins="[ 'Mapvgl', 'Mapv' ]"
  @pluginReady="handleInit"
/>

<script lang="ts" setup>
  import { Map } from 'vue3-baidu-map-gl'
  function handleInit(map) {
    var data = []

    var citys = [
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

    var randomCount = 300

    // 构造数据
    while (randomCount--) {
      var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[Math.floor(Math.random() * citys.length)])
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

    var view = new mapvgl.View({
      map: map
    })

    var pointLayer = new mapvgl.PointLayer({
      blend: 'lighter',
      size: 15,
      color: 'rgba(102, 0, 204, 0.6)'
    })

    view.addLayer(pointLayer)
    pointLayer.setData(data)
  }
</script>
```

:::

## HeatGridLayer 柱状热力图

> https://mapv.baidu.com/gl/docs/HeatGridLayer.html

<Map
:heading="30"
:tilt="30"
:zoom="12"
:plugins="[ 'Mapvgl', 'Mapv' ]"
:center="{ lat: 39.925406, lng: 116.387456 }"
:displayOptions="{
indoor: false,
poi: true,
skyColors: ['rgba(5, 5, 30, 0.01)', 'rgba(5, 5, 30, 1.0)']
}"
mapStyleId="980161f3645989feac25a0da15da4178"
enableScrollWheelZoom
@pluginReady="handleInitd2"
/>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<Map
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
  :plugins="[ 'Mapvgl', 'Mapv' ]"
  @pluginReady="handleInitd"
/>

<script lang="ts" setup>
  import { Map } from 'vue3-baidu-map-gl'
  function handleInit(map) {
    var view = new mapvgl.View({
      map: map
    })

    var grid = new mapvgl.HeatGridLayer({
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
        var data = []
        for (var i = 0; i < rs.length; i++) {
          var item = rs[i]
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
```

:::

## FlyLineLayer 飞线图层

基于 `three.js` 实现，需要额外引入 `mapvglThree`。

> https://mapv.baidu.com/gl/docs/FlyLineLayer.html

<Map
:tilt="45"
:zoom="8.5"
:plugins="[ 'Mapvgl', 'Mapv', 'MapvglThree' ]"
:center="{ lat: 27.848930, lng: 111.858773 }"
:displayOptions="{
indoor: false,
poi: true,
}"
mapStyleId="980161f3645989feac25a0da15da4178"
enableScrollWheelZoom
@pluginReady="handleInitd1"
/>

::: details 点击查看代码

```html
<map
  :tilt="45"
  :zoom="8.5"
  :center="{ lat: 27.848930, lng: 111.858773 }"
  :displayOptions="{
    indoor: false,
    poi: true,
  }"
  mapStyleId="980161f3645989feac25a0da15da4178"
  enableScrollWheelZoom
  :plugins="[ 'Mapvgl', 'Mapv', 'MapvglThree' ]"
  @pluginReady="handleInitd"
/>

<script lang="ts" setup>
  import { Map } from 'vue3-baidu-map-gl'
  function handleInit(map) {
    var citys = [
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

    var randomCount = 100 // 模拟的飞线的数量
    var curve = new mapvgl.BezierCurve()

    var data = []

    // 构造数据
    while (randomCount--) {
      var startPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])
      var endPoint = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length, 10)])

      curve.setOptions({
        start: [startPoint.lng, startPoint.lat],
        end: [endPoint.lng, endPoint.lat]
      })
      var curveModelData = curve.getPoints()

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

    var view = new mapvgl.View({
      map: map
    })

    var flylineLayer = new mapvgl.FlyLineLayer({
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
```

:::
