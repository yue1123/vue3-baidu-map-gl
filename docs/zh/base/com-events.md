# 全局组件事件
每个组件都有这两个事件

| 事件名 | 说明                                     | 类型                                                                     |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------ |
| initd  | 组件初始化后,调用的方法,返回一个地图实例 | {map:BmapGL}                                                             |
| unload | 组件卸载时会调用此方法                   | (event: {type: string, target: any, pixel: Pixel, point: Point }): void; |


