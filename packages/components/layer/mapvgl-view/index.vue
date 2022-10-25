<template></template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { View, BloomEffect, BrightEffect, BlurEffect, PointLayer } from 'mapvgl'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'

  export interface BMapvglViewProps {
    /**
     * 后处理效果数组
     */
    effects?: ('bloom' | 'bright' | 'blur')[]
  }

  // const props = defineProps<BMapvglViewProps>()
  // const vueEmits = defineEmits(['initd', 'unload'])
  // const { ready } = useLifeCycle()

  // const layer = ref(
  //   new PointLayer({
  //     blend: 'lighter',
  //     size: 15,
  //     color: 'rgba(102, 0, 204, 0.6)'
  //   })
  // )
  // watch(layer.value, () => {
  //   console.log('123123')
  // })
  // window.layer = layer
  // console.log(layer)
  // useBaseMapEffect((map) => {

  // })
</script>
<script lang="ts">
  export default {
    name: 'BMapvglView'
  }
</script>
