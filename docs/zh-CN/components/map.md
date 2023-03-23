---
title: Map 地图
---

# Map 地图

地图核心对象，地图控件、覆盖物、图层等需作为其子组件，以获得 map 的实例化对象

```ts
import { BMap } from 'vue3-baidu-map-gl'
```

## 渲染地图

:::demo class="p-top"
map/base
:::

## 多实例

:::demo class="p-top not-full p-bottom"
map/multiInstance
:::

## 个性化地图

通过指定 `Map` 组件的 `mapStyleId`或者`mapStyleJson`来展示个性化地图，如果同时指定，`mapStyleId`会优先生效。

::: tip 提示

1. 如果个性化地图没有生效，请先检查`mapStyleId`或`mapStyleJson`是否正确。如果是通过`mapStyleId`实现，还需要检查是否与 `ak`申请的账号一致
2. 以下示例使用的 `mapStyleId` 均与 ak 和 域名绑定，无法直接复制使用。可根据示例主题名字到[百度地图个性化编辑器](https://lbsyun.baidu.com/apiconsole/custommap)创建后使用
   :::

### 获取资源

> mapStyleId 和 mapStyleJson 获取以及相关注意事项，请访问 [百度地图个性化地图相关文档](https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/custom#service-page-anchor3) 知悉

### 出行主题示例

:::demo 类似苹果地图风格
map/theme1
:::

### 赛博朋克主题示例

:::demo 满满的科技感
map/theme2
:::

## 自定义地图加载中

默认情况下，地图加载中效果是`map loading...`。如果不能满足你的需求，你可以通过提供`loading`具名作用域插槽来自定义地图加载中显示效果，在地图未完成加载前`isLoading`为 `false`，完成后为`true`

:::details 显示代码

<!-- prettier-ignore -->
```html
<template>
  <BMap>
    <template #loading>
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </template>
  </BMap>
</template>

<style lang="css">
  .spinner {
    width: 60px;
    height: 60px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #42b883;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2s infinite ease-in-out;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
</style>
```

:::

## 静态组件 props

| 属性              | 说明                                                     | 类型                                                                    | 可选值 | 默认值  | 版本                               |
| ----------------- | -------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | ------- | ---------------------------------- |
| ak                | 百度地图 ak [申请 ak](../guide/quick-start#申请-ak-密钥) | `string`                                                                | -      | -       | -                                  |
| minZoom           | 地图允许展示的最小级别                                   | `number`                                                                | `0-21` | `0`     | -                                  |
| maxZoom           | 地图允许展示的最大级别                                   | `number`                                                                | `0-21` | `21`    | -                                  |
| showControls      | 是否显示室内图                                           | `boolean`                                                               | -      | `false` | -                                  |
| restrictCenter    | 是否限制中心                                             | `boolean`                                                               | -      | `true`  | <Badge type="tip" text="^1.1.3" /> |
| plugins           | 需要注册的插件                                           | `['TrackAnimation', 'Mapvgl', 'Mapv', 'MapvThree']`                     | -      | -       | -                                  |
| pluginsSourceLink | 自定义插件资源地址                                       | `Record<'TrackAnimation' \| 'Mapvgl' \| 'Mapv' \| 'MapvThree', string>` | -      | -       | -                                  |

## 动态组件 Props

| 属性                   | 说明                                                                                                                                                                           | 类型                                  | 默认值            | 版本                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ----------------- | ---------------------------------- |
| width                  | 地图显示宽度                                                                                                                                                                   | `string / number`                     | `100%`            | <Badge type="tip" text="^1.0.1" /> |
| height                 | 地图显示高度                                                                                                                                                                   | `string / number`                     | `550px`           | <Badge type="tip" text="^1.0.1" /> |
| center                 | 地图默认中心点，可使用城市名，如：北京市，也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度。                                                                    | `string / {lng: number, lat: number}` | `北京市`          | -                                  |
| heading                | 地图旋转角度                                                                                                                                                                   | `number`                              | `0`               | -                                  |
| tilt                   | 地图倾斜角度                                                                                                                                                                   | `number`                              | `0 `              | -                                  |
| mapType                | 地图类型 [mapType](#地图类型)                                                                                                                                                  | `string`                              | `BMAP_NORMAL_MAP` | -                                  |
| zoom                   | 地图缩放级别                                                                                                                                                                   | `number`                              | `14`              | -                                  |
| displayOptions         | 自定义地图属性 [详见](#displayoptions)                                                                                                                                         | -                                     | -                 | -                                  |
| mapStyleId             | 个性化地图样式 ID [详见](#个性化地图)                                                                                                                                          | `string`                              | -                 | -                                  |
| mapStyleJson           | 个性化地图样式 Json [详见](#个性化地图)                                                                                                                                        | `{featureType: string...}[]`          | -                 | -                                  |
| enableTraffic          | 是否启用交通路况图层                                                                                                                                                           | `boolean`                             | `false`           | -                                  |
| enableDragging         | 启用地图拖拽                                                                                                                                                                   | `boolean`                             | `true`            | -                                  |
| enableInertialDragging | 启用地图惯性拖拽                                                                                                                                                               | `boolean`                             | `true`            | -                                  |
| enableScrollWheelZoom  | 允许地图可被鼠标滚轮缩放                                                                                                                                                       | `boolean`                             | `false`           | -                                  |
| enableContinuousZoom   | 开启双击平滑缩放效果                                                                                                                                                           | `boolean`                             | `true`            | -                                  |
| enableResizeOnCenter   | 开启图区 resize 中心点不变                                                                                                                                                     | `boolean`                             | `true`            | -                                  |
| enableDoubleClickZoom  | 启用地图双击缩放，左键双击放大、右键双击缩小                                                                                                                                   | `boolean`                             | `false`           | -                                  |
| enableKeyboard         | 启用键盘操作，键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home 和 End 键会使地图平移其 1/2 的大小。 +、-键会使地图放大或缩小一级 | `boolean`                             | `true`            | -                                  |
| enablePinchToZoom      | 启用双指缩放地图                                                                                                                                                               | `boolean `                            | `true`            | -                                  |
| enableAutoResize       | 启用自动适应容器尺寸变化                                                                                                                                                       | `boolean `                            | `true`            | -                                  |

## 地图类型

| 值                 | 描述         |
| ------------------ | ------------ |
| BMAP_NORMAL_MAP    | 标准地图     |
| BMAP_EARTH_MAP     | 地球模式     |
| BMAP_SATELLITE_MAP | 普通卫星地图 |

::: warning 注意
地球模式（BMAP_EARTH_MAP）下能支持的地图交互操作有限，如您需要卫星地图支持和标准地图（BMAP_NORMAL_MAP）一致的交互体验，请使用普通卫星图模式（BMAP_SATELLITE_MAP）
:::

## displayOptions

| 属性      | 说明                                              | 类型               | 默认值 |
| --------- | ------------------------------------------------- | ------------------ | ------ |
| poi       | 是否显示地图上的地点标识                          | `boolean`          | `true` |
| indoor    | 是否显示室内图                                    | `boolean`          | `true` |
| poiText   | 是否显示地图上的地点标识文字                      | `boolean`          | `true` |
| poiIcon   | 是否显示地图上的地点标识图标                      | `boolean`          | `true` |
| overlay   | 是否显示覆盖物                                    | `boolean`          | `true` |
| layer     | 是否显示叠加图层，地球模式暂不支持                | `boolean`          | `true` |
| building  | 是否显示 3D 建筑物（仅支持 WebGL 方式渲染的地图） | `boolean`          | `true` |
| street    | 是否显示路网（只对卫星图和地球模式有效）          | `boolean`          | `true` |
| skyColors | 是否显示路网（只对卫星图和地球模式有效）          | `[string, string]` | -      |

## 组件方法

| 方法              | 说明                             | 类型                               |
| ----------------- | -------------------------------- | ---------------------------------- |
| getMapInstance    | 父组件获取 map 实例方法          | `() => void`                       |
| getBaseMapOptions | 父组件/外部获取 map 组件 options | `() => void`                       |
| resetCenter       | 重置地图中心                     | `() => void`                       |
| setDragging       | 设置地图是否可拖动               | `(nableDragging: boolean) => void` |

## 组件事件

| 事件名          | 说明                                                                                             | 类型                                     |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| initd           | 组件初始化后会触发此事件，返回一个地图实例                                                       | `{ map, BmapGL, instance }`              |
| unload          | 组件卸载时会触发此事件                                                                           | -                                        |
| pluginReady     | 插件加载完毕会触发此事件                                                                         | `{map}`                                  |
| click           | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick                     | `{type, target, latlng, pixel, overlay}` |
| dblclick        | 鼠标双击地图时会触发此事件                                                                       | `{type, target, pixel, point}`           |
| rightclick      | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick      | `{type, target, latlng, pixel, overlay}` |
| rightdblclick   | 右键双击地图时触发此事件                                                                         | `{type, target, latlng, pixel, overlay}` |
| maptypechange   | 地图类型发生变化时触发此事件                                                                     | `{type, target}`                         |
| mousemove       | 鼠标在地图区域移动过程中触发此事件                                                               | `{type, target, latlng, pixel, overlay}` |
| mouseover       | 鼠标移入地图区域时触发此事件                                                                     | `{type, target}`                         |
| mouseout        | 鼠标移出地图区域时触发此事件                                                                     | `{type, target}`                         |
| movestart       | 地图移动开始时触发此事件                                                                         | `{type, target}`                         |
| moving          | 地图移动过程中触发此事件                                                                         | `{type, target}`                         |
| moveend         | 地图移动结束时触发此事件                                                                         | `{type, target}`                         |
| zoomstart       | 地图更改缩放级别开始时触发触发此事件                                                             | `{type, target}`                         |
| zoomend         | 地图更改缩放级别结束时触发触发此事件                                                             | `{type, target}`                         |
| addoverlay      | 当组件被挂载到地图中时会触发此事件                                                    | `{type, target}`                         |
| removeoverlay   | 当组件被移除时会触发此事件                                                            | `{type, target}`                         |
| addcontrol      | 当组件被挂载到地图中时会触发此事件                                                    | `{type, target}`                         |
| removecontrol   | 当组件被移除时会触发此事件                                                            | `{type, target}`                         |
| clearoverlays   | 当使用方法一次性移除全部覆盖物时会触发此事件                                | `{type, target}`                         |
| dragstart       | 开始拖拽地图时触发                                                                               | `{type, target, pixel, point}`           |
| dragging        | 拖拽地图过程中触发                                                                               | `{type, target, pixel, point}`           |
| dragend         | 停止拖拽地图时触发                                                                               | `{type, target, pixel, point}`           |
| addtilelayer    | 添加一个自定义地图图层时触发此事件                                                               | `{type, target}`                         |
| removetilelayer | 移除一个自定义地图图层时触发此事件                                                               | `{type, target}`                         |
| load            | 调用方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块 | `{type, target}`                         |
| resize          | 地图可视区域大小发生变化时会触发此事件                                                           | `{type, target, pixel, point}`           |
| hotspotclick    | 点击热区时触发此事件                                                                             | `{type, target}`                         |
| hotspotover     | 鼠标移至热区时触发此事件                                                                         | `{type, target}`                         |
| hotspotout      | 鼠标移出热区时触发此事件                                                                         | `{type, target}`                         |
| tilesloaded     | 当地图所有图块完成加载时触发此事件                                                               | `{type, target}`                         |
| touchstart      | 触摸开始时触发此事件，仅适用移动设备                                                             | `{type, target}`                         |
| touchmove       | 触摸移动时触发此事件，仅适用移动设备                                                             | `{type, target}`                         |
| touchend        | 触摸结束时触发此事件，仅适用移动设备                                                             | `{type, target}`                         |
| longpress       | 长按事件，仅适用移动设备                                                                         | `{type, target}`                         |
