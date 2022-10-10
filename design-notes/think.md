## 2022.10.2

vitepress markdown 文件中写`setInterval`会导致编译构建完毕后命令行一直挂起，终端进程无法被释放

截至1.0.0a17 版本(可能后几个小版本都有这个问题)的解决办法是将`setInterval`包一层条件判断

```ts
if(typeof window !== 'undefined'){
  setInterval(() => {
    // ....
  }, 1000)
}
```

## 2022.10.3 
为什么开源组件Vue组件库喜欢用tsx?
我暂且浅薄的认为有两个原因：
1. 可以有利于打包一个组件一个文件夹这种结构代码，tsx可以直接通过`tsc`编译，`.vue`单文件组件就不行，因为他需要编译器处理
2. 更加的灵活，ts 类型更方便导出，代码更可控

## 2022.10.8
如何去掉打包后vue组件配置中__file?
`rollup-plugin-vue`源码: 
```js
if (!isProduction) {
  output.push(`script.__file = ${JSON.stringify(shortFilePath)}`);
} else if (options.exposeFilename) {
  output.push(`script.__file = ${JSON.stringify(path_1.default.basename(shortFilePath))}`);
}
```
rollup 打包组件库指定环境: `cross-env NODE_ENV=production rollup -c`


## 2022.10.10
`app.use(vue3BaiduMapGl)`同时兼容 umd 和 es

只需要在默认导出插件配置项的同时导出单独的`install`和`version`
```
const vue3BaiduMapGl = {
	install: (app: App, options?: InitOptions) => {
    // ....
	},
	version: '1.0.0'
}
// export for es
export default vue3BaiduMapGl

// export for umd
export const install = vue3BaiduMapGl.install
export const version = vue3BaiduMapGl.version
```
