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