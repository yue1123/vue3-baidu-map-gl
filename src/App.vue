<template>
	<BaiduMap :enable-keyboard="false"></BaiduMap>
</template>
<script setup lang="ts">
	import { BaiduMap } from './index'
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	body {
		margin: 0;
	}
</style>
