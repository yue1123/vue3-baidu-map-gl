<template>
	<BaiduMap ak="4stE857hYPHbEmgKhLiTAa0QbCIULHpm" :enable-keyboard="false">
		<BmControl>
			<BmScale></BmScale>
			<!-- <BmControl> -->
			<!-- <BmControl></BmControl> -->
			<!-- </BmControl> -->
		</BmControl>
	</BaiduMap>
</template>
<script setup lang="ts">
	import { BaiduMap, BmControl, BmScale } from './index'
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
