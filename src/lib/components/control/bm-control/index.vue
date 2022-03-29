<template>
	<div>我是子组件</div>
</template>

<script setup lang="ts">
	import { useBaseMap } from 'hooks/useBaseMap'
	const { map } = useBaseMap()
	console.log(map)
</script>
