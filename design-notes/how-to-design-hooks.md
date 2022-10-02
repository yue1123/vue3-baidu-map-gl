## 如何设计编写一个易用的 hooks

vue3 composition Api 是一个很好的功能，能帮助我们抽离项目中的许多公共逻辑，而不受视图影响。我个人对 composition Api 的理解就是，没有视图纯逻辑的组件。
不同于 react hooks, vue3 的 composition Api 更加的灵活高效，它允许嵌套调用，这很方便。
但我认为，作为提供为用户使用的 hooks，应尽量避免 composition Api 只能在某个回调函数中使用，一方面，这增加的代码层级不直观；另一方面，嵌套的代码会丢失 composition Api 的灵活性

举个例子，我们有一个需要等待外部依赖加载完，才能使用的 hooks，你会怎样设计它？

```ts
type Options = {
	path: []
}
function useTrackAnimation(map, options: Options) {
	// ....
	return { start, stop }
}
```

使用

```html
<Map @pluginReady="handlePluginReady" />
```

```ts
function handlePluginReady() {
	const { start, stop } = useTrackAnimation(null, { path: [] })
}
```

或者

```ts
function useTrackAnimation(map) {
	// ....
	return { start, stop, setPath }
}
```

使用

```html
<Map @pluginReady="handlePluginReady" />
```

```ts
const { start, stop, setPath } = useTrackAnimation(null, { path: [] })
function handlePluginReady() {
	setPath([])
}
```

显然第二种是更好的处理，因为 hooks 提供的方法在外层，我们可以在任意地方灵活的调用。要做到这一点，我们只需要把依赖于外部的关键方法抽离出来，在回调中调用，这样的小变动就能让hooks更加的易用