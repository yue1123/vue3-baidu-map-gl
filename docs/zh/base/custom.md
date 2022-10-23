# 个性化地图

通过指定 `Map` 组件的 `mapStyleId`或者`mapStyleJson`来展示个性化地图，如果同时指定，`mapStyleId`会优先生效。

::: tip 提示
如果个性化地图没有生效，请先检查`mapStyleId`或`mapStyleJson`是否正确。如果是通过`mapStyleId`实现，还需要检查是否与 `ak`申请的账号一致
:::

::: warning 注意
以下示例使用的 `mapStyleId` 均与 ak 和 域名绑定，无法直接复制使用。可根据示例主题名字到[百度地图个性化编辑器](https://lbsyun.baidu.com/apiconsole/custommap)创建后使用
:::

## 获取资源

> mapStyleId 和 mapStyleJson 获取以及相关注意事项，请访问 [百度地图个性化地图相关文档](https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/custom#service-page-anchor3) 知悉

## 示例样式 1 -- 出行
类似苹果地图风格
<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom
    mapStyleId='ee66c61531e8df3c2fd0374e96e58e81'
  />
</div>

::: details 点击查看代码
<!-- prettier-ignore -->
```html
<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom
    mapStyleId="ee66c61531e8df3c2fd0374e96e58e81" 
  />
</div>
```
:::

## 示例样式 2 -- 一蓑烟雨

<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom 
    mapStyleId='91c53039a0b7f75e3dd8ddcdd932243b' 
  />
</div>

::: details 点击查看代码
<!-- prettier-ignore -->
```html
<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom
    mapStyleId="91c53039a0b7f75e3dd8ddcdd932243b" 
  />
</div>
```
:::

## 示例样式 3 -- 眼眸主题

<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom
    mapStyleId='980161f3645989feac25a0da15da4178'
  />
</div>

::: details 点击查看代码
<!-- prettier-ignore -->
```html
<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom 
    mapStyleId="980161f3645989feac25a0da15da4178" />
</div>
```
:::

## 示例样式 4 -- 赛博朋克

<div>
  <Map 
    :zoom="10"
    enableScrollWheelZoom 
    mapStyleId='0f3219e982947931ae2893345940df80'
  />
</div>

::: details 点击查看代码
<!-- prettier-ignore -->
```html
<div>
  <Map
    :zoom="10"
    enableScrollWheelZoom
    mapStyleId="0f3219e982947931ae2893345940df80" 
  />
</div>
```
:::
