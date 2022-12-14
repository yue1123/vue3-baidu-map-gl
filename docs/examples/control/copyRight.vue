<template>
  <div>
    <Map v-bind="$attrs">
      <Copyright anchor="BMAP_ANCHOR_TOP_RIGHT" v-if="show">
        <div style="display: flex; align-items: flex-end">
          <img width="40" src="https://s1.ax1x.com/2022/09/29/xmTpcT.png" alt="" />
          @我是自定义版权控件呀
        </div>
      </Copyright>
      <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
        <h3>动态内容1: {{ count }}</h3>
      </Copyright>
      <Copyright anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
        <h3>动态内容2: {{ count }}</h3>
      </Copyright>
    </Map>
    <button class="myButton no-m-b" @click="toggle">{{ show ? '隐藏' : '显示' }}右上角版权</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref<number>(1)
  const show = ref<boolean>(true)
  function toggle() {
    show.value = !show.value
  }
  setInterval(() => {
    count.value++
  }, 1000)
</script>
