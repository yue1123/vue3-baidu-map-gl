# useTrackAnimation

通过该 hooks 可实现轨迹动画, 在轨迹动态播放的同时，视角跟随移动.

::: warning 注意

1. 使用该 hooks 前，请确保`TrackAnimation`插件正确的 [注册](../guide/#插件注册) 了。
2. 由于在渲染动画时，数据资源是随着当前方位和坐标的改变而实时加载的，刚开始播放动画时画面可能会卡顿，属于正常现象。
3. 为了减少加载数据资源的性能损耗，在播放动画时隐藏了地图上的 POI 点。
   :::

## 代码示例

<div>
  <Map 
    :center="{
      lng: 116.308301,
      lat: 40.050566
    }"
    :zoom='16'
    :plugins="['TrackAnimation']"
    ref="map" 
    @pluginReady="handleInitd"
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
  import { useTrackAnimation } from '../../../packages/hooks/useTrackAnimation'
  const map = ref(null)
  const { 
    setPath,
    start,
    cancel,
    stop,
    proceed,
    status
  } = useTrackAnimation(map, {
    duration:10000,
    delay:0
  })
  const path = [{
        'lng': 116.297611,
        'lat': 40.047363
    }, {
        'lng': 116.302839,
        'lat': 40.048219
    }, {
        'lng': 116.308301,
        'lat': 40.050566
    }, {
        'lng': 116.305732,
        'lat': 40.054957
    }, {
        'lng': 116.304754,
        'lat': 40.057953
    }, {
        'lng': 116.306487,
        'lat': 40.058312
    }, {
        'lng': 116.307223,
        'lat': 40.056379
    }];
  function handleInitd(map){
    
    setPath(path)
  }
</script>

<style>
  .state{
    margin-top: 15px;
  }
  .state span{
    margin-right: 25px;
  }
</style>

::: details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map
    :center="{
      lng: 116.308301,
      lat: 40.050566
    }"
    :zoom="16"
    ref="map"
    :plugins="['TrackAnimation']"
    @pluginReady="handleInitd"
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
  import { useTrackAnimation } from 'vue3-baidu-map-gl'
  const map = ref(null)
  const { setPath, start, cancel, stop, proceed, status } = useTrackAnimation(map, {
    duration: 10000,
    delay: 0
  })
  const path = [
    {
      lng: 116.297611,
      lat: 40.047363
    },
    {
      lng: 116.302839,
      lat: 40.048219
    },
    {
      lng: 116.308301,
      lat: 40.050566
    },
    {
      lng: 116.305732,
      lat: 40.054957
    },
    {
      lng: 116.304754,
      lat: 40.057953
    },
    {
      lng: 116.306487,
      lat: 40.058312
    },
    {
      lng: 116.307223,
      lat: 40.056379
    }
  ]
  function handleInitd(map) {
    setPath(path)
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

## 类型定义

```ts
import { Ref } from 'vue'
export declare type PathPoint = {
  lng: number
  lat: number
}
export declare type UseTrackAnimationOptions = {
  /**
   * 动画持续时常，单位ms
   * @default 10000
   */
  duration?: number
  /**
   * 动画开始延迟
   * @default 0
   */
  delay?: number
  /**
   * 是否在动画结束后总览视图缩放（调整地图到能看到整个轨迹的视野），默认开启
   * @default true
   */
  overallView?: boolean
  /**
   * 设置动画中的地图倾斜角度，默认55度
   * @default 55
   */
  tilt?: number
  /**
   * 设置动画中的缩放级别，默认会根据轨迹情况调整到一个合适的级别
   * @default auto
   */
  zoom?: number
}
declare type AnimationStatus = 'PLAYING' | 'STOPPING' | 'INITIAL'
/**
 * 轨迹动画
 * @param {any} map 地图组件实例引用
 * @param {UseTrackAnimationOptions} options 轨迹动画配置
 * @returns { setPath, start, stop}
 */
export declare function useTrackAnimation(
  map: any,
  options: UseTrackAnimationOptions
): {
  /**
   * 设置路径动画路径
   */
  setPath: (path: PathPoint[]) => void
  /**
   * 开始动画
   */
  start: () => void
  /**
   * 暂停动画
   */
  stop: () => void
  /**
   * 取消动画
   */
  cancel: () => void
  /**
   * 继续播放动画
   */
  proceed: () => void
  /**
   * 动画状态
   */
  status: Ref<AnimationStatus>
}
```
