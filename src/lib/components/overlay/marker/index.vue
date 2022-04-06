<template>
	<slot></slot>
</template>

<script setup lang="ts">
	import { defineProps, withDefaults } from 'vue'
	 type a = BMapGL.MarkerOptions extends {offset:any}
	const props = withDefaults(defineProps<a>(), {
	   /**
		 * 标注的位置偏移值
		 */
		offset: {
			x: number
			y: number
		}
		/**
		 * 标注所用的图标对象
		 */
		icon: Icon,
		enableMassClear: true,
		enableDragging: false,
		enableClicking: true,
		raiseOnDrag: false,
		draggingCursor: 'pointer',
		rotation: 0,
		title: ''
	 })
</script>
