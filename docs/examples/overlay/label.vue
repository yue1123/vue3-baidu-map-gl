<template>
  文字内容:
  <input class="my-input" type="text" v-model="content" />
  <BMap v-bind="$attrs">
    <BLabel
      :content="content"
      :position="{ lng: 116.404, lat: 39.915 }"
      :style="{
        color: '#fff',
        backgroundColor: '#f90',
        border: 'none',
        borderRadius: '3px',
        padding: '5px 10px',
        fontSize: '16px'
      }"
    />
  </BMap>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const content = ref<string>('欢迎使用百度地图GL版Vue3组件库')
</script>
