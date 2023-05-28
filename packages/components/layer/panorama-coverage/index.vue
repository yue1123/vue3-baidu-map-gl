<template></template>

<script setup lang="ts">
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  const { ready } = useLifeCycle()
  let panoramaCoverageLayer: BMapGL.PanoramaCoverageLayer
  defineEmits(['initd', 'unload'])
  useBaseMapEffect((map) => {
    panoramaCoverageLayer = new BMapGL.PanoramaCoverageLayer()
    map.addTileLayer(panoramaCoverageLayer)
    ready(map, panoramaCoverageLayer)
    return () => map.removeTileLayer(panoramaCoverageLayer)
  })
  defineOptions({
    name: 'BPanoramaCoverageLayer'
  })
</script>
