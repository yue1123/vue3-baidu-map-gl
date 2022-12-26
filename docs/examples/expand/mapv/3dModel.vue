<template>
  <Map
    v-bind="$attrs"
    :tilt="65"
    :heading="-50"
    :zoom="21"
    :center="center"
    :displayOptions="{
      building: false
    }"
    :restrictCenter="false"
    enableInertialDragging
    enableContinuousZoom
    enableScrollWheelZoom
    @initd="handleInitd"
  />
</template>

<script setup>
  import { withBase } from 'vitepress'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  const center = { lat: 40.05298, lng: 116.25241 }
  function handleInitd({ map }) {
    import('mapv-three').then((mapvThree) => {
      const { Engine, EmptySky } = mapvThree
      const engine = new Engine(map, {})
      // engine.map.setCenter(center)
      engine.rendering.useMrt = true
      engine.rendering.shadow.enabled = true
      engine.rendering.animationLoopFrameTime = 40
      engine.rendering.colorAdjust.saturation = 0.25
      engine.rendering.colorAdjust.contrast = 0.15
      engine.rendering.colorAdjust.brightness = 0

      const sky = engine.add(new EmptySky())
      sky.time = 3600 * 16.5

      const position = engine.map.projectPointArr(center)

      // 模型
      const models = [
        {
          position: [12941311, 4845891, 6],
          path: withBase('/models/building5.glb'),
          rotate: true,
          info: '房子'
        },
        {
          position: [12941265, 4845905, 6],
          path: withBase('/models/palm_tree.glb'),
          rotate: false,
          info: '树木'
        },
        {
          position: [12941369, 4845869, 2],
          path: withBase('/models/truck1.glb'),
          rotate: true,
          info: '货车'
        }
      ]
      const loader = new GLTFLoader()
      for (let i = 0; i < models.length; i++) {
        loader.load(models[i].path, (gltf) => {
          const model = gltf.scene.children[0]
          model.userData.info = models[i].info
          for (let i = 0; i < model.children.length; i++) {
            model.children[i].castShadow = true
          }
          model.position.set(models[i].position[0], models[i].position[1], models[i].position[2])
          if (models[i].rotate) {
            model.rotation.x = Math.PI / 2
            model.rotation.y = (1.08 * Math.PI) / 2
          }
          engine.add(model)
          // 模型添加点击事件
          engine.event.markEventProxy(model)
          engine.event.bind(model, 'click', (e) => {
            alert('点击了 ' + model.userData.info)
          })
        })
      }
    })
  }
</script>
