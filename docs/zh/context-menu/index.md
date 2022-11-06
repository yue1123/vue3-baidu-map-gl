# 上下文菜单

<Map :center="center">
  <Zoom></Zoom>
  <ContextMenu :menuItems="list" />
</Map>

<script lang="ts" setup>
  import { ref } from 'vue'
  const center = ref('北京市')
  const list = ref([
    {
      text: '放大一级',
      callback: function ({map}) {
        map.zoomIn();
      }
    },
    {
      text: '缩小一级',
      callback: function ({map}) {
          map.zoomOut();
      }
    },
    {
      text: '去上海',
      callback: function () {
        center.value = center.value === '上海市' ? '北京市' : '上海市';
        setTimeout(() => {
          list.value[2].text = '回北京'
        })
      }
    },
  ])
</script>

