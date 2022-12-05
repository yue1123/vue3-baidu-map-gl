<template>
  <Map v-bind="$attrs" :center="center">
    <ContextMenu :menuItems="list" />
  </Map>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { ContextMenuItem, ContextMenuSeparator } from 'vue3-baidu-map-gl'
  const center = ref('北京市')
  const list = ref<(ContextMenuItem | ContextMenuSeparator)[]>([
    {
      text: '放大一级',
      callback: function ({ map }) {
        map.zoomIn()
      }
    },
    {
      text: '缩小一级',
      callback: function ({ map }) {
        map.zoomOut()
      }
    },
    '-',
    {
      text: '去上海',
      callback: function () {
        center.value = center.value === '上海市' ? '北京市' : '上海市'
        setTimeout(() => {
          ;(list.value[2] as ContextMenuItem).text = '回北京'
        })
      }
    }
  ])
</script>
