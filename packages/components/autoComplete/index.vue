<template>
  <input class="b-auto-complete-input" type="text" ref="autoCompleteInput" placeholder="请输入搜索关键词" />
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import useParentComponentEffect from '../../hooks/useParentComponentEffect'
  import { Callback, Point, bindEvents, getPoint, warn } from '../../utils'
  export interface AutocompleteProps {
    /**
     * 设定返回结果的所属范围。例如“北京市”
     * @default 当前实例所在容器的`BMapGL.Map`实例
     */
    location?: string | Point | BMapGL.Map
    /**
     * 返回数据类型
     * @description 两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条
     */
    types?: string[]
    onSearchComplete?: Callback
    onHighlight?: Callback
    onConfirm?: Callback
  }
  const autoCompleteInput = ref<HTMLInputElement>()
  const props = withDefaults(defineProps<AutocompleteProps>(), {})
  const vueEmits = defineEmits(['initd', 'unload', 'searchComplete', 'highlight', 'confirm'])
  let autoComplete: BMapGL.Autocomplete

  const { ready } = useParentComponentEffect((map: BMapGL.Map) => {
    if (!autoCompleteInput.value) warn('BAutoComplete', 'render error')
    const { location, types } = props
    let _location: string | BMapGL.Point | BMapGL.Map = map
    if (typeof location === 'object' && (location as Point).lat && (location as Point).lng) {
      _location = getPoint(location as Point)
    }
    autoComplete = new BMapGL.Autocomplete({
      location: _location,
      onSearchComplete: (e) => vueEmits('searchComplete', e),
      input: autoCompleteInput.value,
      types
    })
    bindEvents(props, vueEmits, autoComplete)
    ready(map, autoComplete)
    watch(
      () => props.location,
      (n) => {
        let _location: string | BMapGL.Point | BMapGL.Map = map
        if (typeof n === 'object' && (n as Point).lat && (n as Point).lng) {
          _location = getPoint(n as Point)
        }
        autoComplete.setLocation(_location)
      }
    )
    watch(
      () => props.types,
      (n) => {
        n && autoComplete.setTypes(n)
      }
    )
  })
  defineOptions({
    name: 'BAutoComplete'
  })
</script>
