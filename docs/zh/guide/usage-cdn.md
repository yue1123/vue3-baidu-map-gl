# 使用 CDN

在 `0.0.21` 版本后，你可以使用通过 CDN 使用 UMD 版本的 vue-baidu-map-gl。

如果你要使用 minify 版本的包，将 `https://unpkg.com/vue3-baidu-map-gl@version` 作为 `src`，`version` 是你期望使用的版本，如果不指定 `version` 则会使用最新的版本。

如果你要使用未 minify 版本的包，将 `https://unpkg.com/vue3-baidu-map-gl@version/dist/index.js` 作为 `src`。

免费 CDN
你可以通过以下免费 CDN 服务来使用 Vant:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vue3-baidu-map-gl)
- [unpkg](https://unpkg.com/vue3-baidu-map-gl)

::: tip 提示
最好锁定包的版本，避免不兼容变更带来的影响。
:::

## 示例

点击查看基本的[在线示例](https://jsbin.com/hohuximefi/edit?html,output)：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue3-baidu-map-gl"></script>
  </head>
  <body>
    <div id="app">
      <b-Map>
        <b-zoom />
      </b-ma>
    </div>
    <script>
      const App = {
        setup() {
          return {

          }
        }
      }
      const app = Vue.createApp(App)
      app.use(Vue3baiduMapGl, { ak:'cwHsf5i2fAQAlijOyELx5COtkFhItaSm' })
      app.mount('#app')
    </script>
  </body>
</html>
```
