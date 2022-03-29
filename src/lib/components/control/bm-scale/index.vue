<template></template>

<script setup lang="ts">
	// import { useBaseMapInitdCallback } from 'hooks/useBaseMapInitdCallback'
	import { useEmits } from 'hooks/useEmits'
	const { on } = useEmits()
	on('onInitd', (map) => {
		const scaleCtrl = new window.BMapGL.ScaleControl()
		map.addControl(scaleCtrl)
	})
</script>
