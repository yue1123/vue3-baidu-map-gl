<script setup lang="ts">
  import { computed, ref, nextTick, onUnmounted, onMounted } from 'vue'
  import { useClipboard, useToggle, useMagicKeys } from '@vueuse/core'
  import { exampleModuleMap } from './../constants'
  import Example from './demo/vp-example.vue'
  import SourceCode from './demo/vp-source-code.vue'
  const props = defineProps<{
    source: string
    path: string
    rawSource: string
    description?: string
  }>()
  const demoContainer = ref<HTMLDivElement>()
  const rawSource = computed(() => {
    return decodeURIComponent(props.rawSource)
  })
  const [showCode, toggleShowCode] = useToggle()
  const [fullScreen, toggleFullScreen] = useToggle()
  const { copy, copied, isSupported } = useClipboard({ source: rawSource })
  const decodedDescription = computed(() => decodeURIComponent(props.description!))
  const buttonsHeight = 47
  let preHeight = ref<number>()
  let height = ref<number>()
  function handleFullScreen() {
    toggleFullScreen()
    const mapContainer = demoContainer.value?.querySelector('.baidu-map-container') as HTMLDivElement
    if (fullScreen.value) {
      document.body.style.overflow = 'hidden'
      nextTick(() => {
        const demoEl = demoContainer.value?.querySelector('.example-showcase') as HTMLDivElement
        const emptyHeight = window.innerHeight - demoEl.offsetHeight
        preHeight.value = mapContainer.offsetHeight
        height.value = mapContainer.offsetHeight + emptyHeight - buttonsHeight
      })
    } else {
      resetHeight()
    }
  }
  function resetHeight() {
    document.body.style.overflow = 'auto'
    height.value = preHeight.value
  }
  function handleEscKeydown(e) {
    if (fullScreen.value && e.key === 'Escape') {
      toggleFullScreen(false)
      resetHeight()
    }
  }
  onMounted(() => {
    document.addEventListener('keydown', handleEscKeydown)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscKeydown)
  })
</script>

<template>
  <div>
    <ClientOnly>
      <p text="sm" v-html="decodedDescription" />
      <div class="demo-container" ref="demoContainer" :class="{ 'full-screen': fullScreen }">
        <Example :height="height" :file="path" :demo="exampleModuleMap[path]" />
        <div class="buttons">
          <button v-tooltip="fullScreen ? '退出全屏（Esc）' : '全屏'" @click="handleFullScreen">
            <template v-if="fullScreen">
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                <path
                  d="M33 6V15H42"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 6V15H6"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 42V33H6"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 42V33H41.8995"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template v-else>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                <path
                  d="M33 6H42V15"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M42 33V42H33"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 42H6V33"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 15V6H15"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </button>
          <button v-tooltip="copied ? '复制成功' : '复制代码'" v-if="isSupported" @click="() => copy()">
            <template v-if="copied">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </template>
            <template v-else>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                <path
                  d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </button>
          <button v-tooltip="showCode ? '隐藏代码' : '显示代码'" v-show="!fullScreen" @click="() => toggleShowCode()">
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path
                fill="currentColor"
                d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
              ></path>
            </svg>
          </button>
        </div>
        <Transition name="collapse">
          <div v-if="showCode" class="source_code-container">
            <SourceCode :source="props.source" />
          </div>
        </Transition>
        <div v-if="showCode" class="hide_code-btn" @click="showCode = false">
          <span>隐藏代码</span>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped lang="less">
  .demo-container {
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 6px;
    overflow: hidden;
    &.full-screen {
      background-color: var(--vp-c-black-soft);
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 99999;
    }
    .buttons {
      border-top: 1px dashed var(--vp-c-divider-light);
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: var(--vp-c-bg);
      button {
        width: 30px;
        height: 30px;
        color: var(--vp-c-text-2);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.3s;
        &:hover {
          color: var(--vp-c-text-1);
        }
      }
    }
    .buttons + div {
      border-top: 1px dashed var(--vp-c-divider-light);
    }
    .source_code-container {
      overflow: hidden;
    }
    .hide_code-btn {
      position: sticky;
      bottom: 0;
      text-align: center;
      padding: 0.5rem 0;
      border-top: 1px dashed var(--vp-c-divider-light);
      background-color: var(--vp-c-black-soft);
      z-index: 99;
    }
  }
  .collapse-enter-active {
    transition: all 0.5s ease-in-out;
    max-height: 0;
  }
  .collapse-leave-active {
    transition: all 0.25s cubic-bezier(0, 1, 0, 1);
    max-height: 200vh;
  }
  .collapse-enter-to {
    max-height: 200vh;
  }
  .collapse-leave-to {
    max-height: 0;
  }
  .demo-container :deep(.baidu-map-container) {
    width: calc(100% + 2rem) !important;
    margin-left: -1rem;
  }
  .p-top :deep(.example-showcase) {
    padding-top: 1rem;
  }
  .p-bottom :deep(.example-showcase) {
    padding-bottom: 1rem;
  }
</style>
