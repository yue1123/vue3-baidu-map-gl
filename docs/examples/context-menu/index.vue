<template>
  <BMap v-bind="$attrs" :center="center">
    <BContextMenu :menuItems="list" />
    <BMarker icon="simple_red" :position="{ lat: 39.915185, lng: 116.403901 }">
      <BContextMenu :menuItems="overlayList" :width="200" />
    </BMarker>
  </BMap>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { ContextMenuItem, ContextMenuSeparator } from 'vue3-baidu-map-gl'
  const center = ref('北京市')
  const list = ref<(ContextMenuItem | ContextMenuSeparator)[]>([
    {
      text: '放大一级',
      callback: function ({ map }: { map: BMapGL.Map }) {
        map.zoomIn()
      }
    },
    {
      text: '缩小一级',
      callback: function ({ map }: { map: BMapGL.Map }) {
        map.zoomOut()
      }
    },
    '-',
    {
      text: '去上海',
      callback: function () {
        center.value = center.value === '上海市' ? '北京市' : '上海市'
        setTimeout(() => {
          ;(list.value[3] as ContextMenuItem).text = '回北京'
        })
      }
    }
  ])
  const overlayList = ref<(ContextMenuItem | ContextMenuSeparator)[]>([
    {
      text: '覆盖物上下文菜单',
      callback: function ({ map }: { map: BMapGL.Map }) {
        alert('点击了覆盖物上下文菜单')
      }
    }
  ])
</script>
