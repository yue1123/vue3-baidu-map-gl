# bmap-draw 鼠标测量与绘制

BMap Draw 是一个基于百度地图 JSAPI 的轻量级鼠标绘制库，提供了鼠标绘制、编辑、裁切、合并、复制黏贴、移动、测量等多种几何图形操作能力，助力开发者开箱即用式快速实现自己的几何图形编辑器。

> 使用方式请参考官方文档：https://lbsyun.baidu.com/bmap-draw/

:::warning 注意
该组件库中 `BMapGL` 是异步加载，而 `bmap-draw` 中配置文件中包含同步调用 `BMapGL` 相关构造函数，所以只能使用异步加载。

```ts
import('bmap-draw').then(({ DrawScene }) => {
  // ...
})
```

:::

## 绘制

:::demo 绘制点、线、面、多边形、圆形等
expand/bmap-draw/draw
:::

## 测量

测量距离，面积，折线长度等

:::demo
expand/bmap-draw/meterage
:::

<style>
  .dark .BMapLabel{
    color: #333333;
  }
</style>
