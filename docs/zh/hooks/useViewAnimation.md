# useViewAnimation <Badge type="tip" text="^0.0.30" />

该 hooks 用于展示地图的 3D 动画，您可以自定义从地图上某一地点切换到另一地点的 3D 过渡动画效果。

```ts
import { useViewAnimation } from 'vue3-baidu-map-gl'
```

:::warning 注意

- 由于在渲染动画时，数据资源是随着当前方位和坐标的改变而实时加载的，刚开始播放动画时画面可能会卡顿，属于正常现象；此外，为了减少加载数据资源的性能损耗，在播放动画时隐藏了地图上的 POI 点。
- 其次，在定义关键帧时相邻两个关键帧的坐标点不宜距离太远，否则会导致当前帧的资源还未加载完毕，就已经进入下一帧的播放，出现视野中看不到地图的现象。

:::

## 示例

<div>
  <Map 
    :center="{
      lng: 116.308301,
      lat: 40.050566
    }"
    :zoom='16'
    :plugins="['TrackAnimation']"
    ref="map"
    @initd="handleInitd"
  />
  <div class="state">
    <span>动画状态: {{ status !== 'INITIAL' ? '已开始' : '未开始' }}</span>
    <span>播放状态: {{ status === 'INITIAL' ||  status === 'STOPPING'  ? '未播放' : '播放中' }}</span>
  </div>
  <button class="myButton no-m-b" type="button" @click="start">开始</button>
  <button class="myButton no-m-b" type="button" @click="stop">暂停</button>
  <button class="myButton no-m-b" type="button" @click="proceed">继续</button>
  <button class="myButton no-m-b" type="button" @click="cancel">取消</button>
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useViewAnimation } from '../../../packages/hooks/useViewAnimation'
  const map = ref(null)
  const { 
    viewAnimation,
    setKeyFrames,   
    start, 
    stop,
    proceed,
    cancel,
    status
  } = useViewAnimation(map, {
    duration: 10000,
    delay: 0,
    loop: 'INFINITE'
  })
  function handleInitd(){
    var keyFrames = [
      {
        center: { lng: 116.307092, lat: 40.054922 },
        zoom: 18,
        tilt: 50,
        heading: 0,
        percentage: 0
      },
      {
        center: { lng: 116.307631, lat:40.055391 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.1
      },
      {
        center: { lng: 116.306858, lat:40.057887 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.25
      },
      {
        center: { lng: 116.306858, lat:40.057887 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.35
      },
      {
        center: { lng: 116.307904, lat:40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.45
      },
      {
        center: { lng: 116.307904, lat:40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.55
      },
      {
        center: { lng: 116.308902, lat:40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.75
      },
      {
        center: { lng: 116.308902, lat:40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -270,
        percentage: 0.85
      },
      {
        center: { lng: 116.307779, lat:40.055754 },
        zoom: 19,
        tilt: 70,
        heading: -360,
        percentage: 0.95
      },
      {
        center: { lng: 116.307092, lat:40.054922 },
        zoom: 18,
        tilt: 50,
        heading: -360,
        percentage: 1
      }
    ]
    setKeyFrames(keyFrames)
  }
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>

:::details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map
    :center="{
      lng: 116.308301,
      lat: 40.050566
    }"
    :zoom="16"
    :plugins="['TrackAnimation']"
    ref="map"
    @initd="handleInitd"
  />
  <div class="state">
    <span>动画状态: {{ status !== 'INITIAL' ? '已开始' : '未开始' }}</span>
    <span>播放状态: {{ status === 'INITIAL' || status === 'STOPPING' ? '未播放' : '播放中' }}</span>
  </div>
  <button class="myButton no-m-b" type="button" @click="start">开始</button>
  <button class="myButton no-m-b" type="button" @click="stop">暂停</button>
  <button class="myButton no-m-b" type="button" @click="proceed">继续</button>
  <button class="myButton no-m-b" type="button" @click="cancel">取消</button>
</div>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useViewAnimation } from 'vue3-baidu-map-gl'
  const map = ref(null)
  const { viewAnimation, setKeyFrames, start, stop, proceed, cancel, status } = useViewAnimation(map, {
    duration: 10000,
    delay: 0,
    loop: 'INFINITE'
  })
  function handleInitd() {
    var keyFrames = [
      {
        center: { lng: 116.307092, lat: 40.054922 },
        zoom: 18,
        tilt: 50,
        heading: 0,
        percentage: 0
      },
      {
        center: { lng: 116.307631, lat:40.055391 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.1
      },
      {
        center: { lng: 116.306858, lat:40.057887 },
        zoom: 19,
        tilt: 70,
        heading: 0,
        percentage: 0.25
      },
      {
        center: { lng: 116.306858, lat:40.057887 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.35
      },
      {
        center: { lng: 116.307904, lat:40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -90,
        percentage: 0.45
      },
      {
        center: { lng: 116.307904, lat:40.058118 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.55
      },
      {
        center: { lng: 116.308902, lat:40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -180,
        percentage: 0.75
      },
      {
        center: { lng: 116.308902, lat:40.055954 },
        zoom: 19,
        tilt: 70,
        heading: -270,
        percentage: 0.85
      },
      {
        center: { lng: 116.307779, lat:40.055754 },
        zoom: 19,
        tilt: 70,
        heading: -360,
        percentage: 0.95
      },
      {
        center: { lng: 116.307092, lat:40.054922 },
        zoom: 18,
        tilt: 50,
        heading: -360,
        percentage: 1
      }
    ]
    setKeyFrames(keyFrames)
  }
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>
```

:::

## 用法

```ts
const { setKeyFrames, start, cancel, stop, proceed, status } = useViewAnimation(map, options)
```

:::tip
该 hooks 依赖于 `BMapGL` ，所以需要在 `Map` 组件初始化完毕调用 `setKeyFrames` 方法后其他方法和数据才可用
:::

### 参数

| 参数    | 描述                   | 类型                                            | 默认值     |
| ------- | ---------------------- | ----------------------------------------------- | ---------- |
| map     | `Map`地图组件`ref`引用 | `Ref<Map>`                                      | `required` |
| options | 地图视角动画的配置     | [`ViewAnimationOptions`](#viewanimationoptions) | -          |

#### ViewAnimationOptions

| 属性            | 描述                                                             | 类型                   | 默认值 |
| --------------- | ---------------------------------------------------------------- | ---------------------- | ------ |
| duration        | 动画持续时常，单位 ms                                            | `number`               | `1000` |
| delay           | 动画开始延迟                                                     | `number`               | `0`    |
| loop            | 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环 | `number \| 'INFINITE'` | `1`    |
| disableDragging | 动画播放时禁止鼠标拖动                                           | `boolean`              | `true` |

### 引用

| 引用          | 描述                                                                     | 类型                                                                  |
| ------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| viewAnimation | 视角动画实例                                                             | `BMapGL.ViewAnimation`                                                |
| setKeyFrames  | 设置动画关键帧函数，需要在`Map`组件`initd`事件触发后才可调用             | [`(path: ViewAnimationKeyFrames[]) => void`](#viewanimationkeyframes) |
| start         | 开始动画函数，`setKeyFrames` 设置路径后且 `status` 为 `INITIAL` 才可调用 | `() => void`                                                          |
| stop          | 暂停动画函数                                                             | `() => void`                                                          |
| cancel        | 取消动画函数                                                             | `() => void`                                                          |
| proceed       | 继续播放动画函数                                                         | `() => void`                                                          |
| status        | 动画状态                                                                 | [`Ref<AnimationStatus>`](#animationstatus)                            |

#### ViewAnimationKeyFrames

```ts
type Point = { lng: number; lat: number }
interface ViewAnimationKeyFrames {
  /**
   * 	地图中心点
   */
  center: Point
  /**
   * 	地图缩放级别，默认值为地图当前状态缩放级别
   */
  zoom?: number
  /**
   * 	地图倾斜角度，默认值为地图当前状态倾斜角度
   */
  tilt?: number
  /**
   * 	地图旋转角度，默认值为地图当前旋转角度
   */
  heading?: number
  /**
   * 	表示当前关键帧处于动画过程的百分比，取值范围0~1
   */
  percentage: RangeOf2<0, 1>
}
```

#### AnimationStatus

```ts
// PLAYING 播放中
// STOPPING 暂停中
// INITIAL 默认状态
type AnimationStatus = 'PLAYING' | 'STOPPING' | 'INITIAL'
```

### 事件监听

调用`useViewAnimation`后，即可通过`viewAnimation`引用来添加事件监听，无需等待`setKeyFrames`方法调用

| 事件                | 参数 | 描述                                                                          |
| ------------------- | ---- | ----------------------------------------------------------------------------- |
| animationstart      | -    | 动画开始时触发，如果配置了 delay，则在 delay 后触发                           |
| animationiterations | -    | 当动画循环大于 1 次时，上一次结束既下一次开始时触发。最后一次循环结束时不触发 |
| animationend        | -    | 动画结束时触发，如果动画中途被终止，则不会触发                                |
| animationcancel     | -    | 动画中途被终止时触发                                                          |

## FAQ

### 为什么事件监听可以同步，而其他方法需要等到 `setKeyFrames` 方法调用后才可以使用 ？

之所以事件监听可以同步，是因为`useViewAnimation`hooks 内部做了处理，先缓存了视角动画初始化前的事件监听，等到`setKeyFrames`方法调用后，再由内部添加监听到视角动画实例上。

这只是为了使用开发者使用体验更好，这和你等到`setKeyFrames`调用时，在后面添加监听，是一样的效果。

## TS 类型定义参考

```ts
import { Ref } from 'vue'
type Point = { lng: number; lat: number }
export interface ViewAnimationKeyFrames {
  /**
   * 	地图中心点，默认值为地图当前状态中心点
   */
  center: Point
  /**
   * 	地图缩放级别，默认值为地图当前状态缩放级别
   */
  zoom?: number
  /**
   * 	地图倾斜角度，默认值为地图当前状态倾斜角度
   */
  tilt?: number
  /**
   * 	地图旋转角度，默认值为地图当前旋转角度
   */
  heading?: number
  /**
   * 	表示当前关键帧处于动画过程的百分比，取值范围0~1
   */
  percentage: RangeOf2<0, 1>
}
export interface UseViewAnimationOptions {
  /**
   * 	动画开始延迟时间，单位ms，默认0
   */
  delay: number
  /**
   * 	动画持续时间，单位ms，默认1000
   */
  duration: number
  /**
   * 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环，默认为1
   */
  loop: number | 'INFINITE'
  /**
   * 动画播放时禁止鼠标拖动
   */
  disableDragging: boolean
}
declare type AnimationListenerType = 'animationstart' | 'animationiterations' | 'animationend' | 'animationcancel'
declare type AnimationStatus = 'PLAYING' | 'STOPPING' | 'INITIAL'
export declare function useViewAnimation(
  map: any,
  options: UseViewAnimationOptions
): {
  viewAnimation: {
    addEventListener(event: AnimationListenerType, cal: BMapGL.Callback): void
    removeEventListener(event: AnimationListenerType, cal: BMapGL.Callback): void
  }
  start: () => void
  cancel: () => void
  stop: () => void
  proceed: () => void
  status: Ref<AnimationStatus>
  setKeyFrames: (keyFrames: ViewAnimationKeyFrames[]) => void
}
```
