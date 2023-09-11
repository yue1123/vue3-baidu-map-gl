<template></template>

<script setup lang="ts">
  import useParentComponentEffect from '../../../hooks/useParentComponentEffect'
  let panoramaCoverageLayer: BMapGL.PanoramaCoverageLayer
  defineEmits(['initd', 'unload'])
  const { ready } = useParentComponentEffect((map) => {
    panoramaCoverageLayer = new BMapGL.PanoramaCoverageLayer()
    map.addTileLayer(panoramaCoverageLayer)
    ready(map, panoramaCoverageLayer)
    return () => map.removeTileLayer(panoramaCoverageLayer)
  })
  defineOptions({
    name: 'BPanoramaCoverageLayer'
  })
</script>
