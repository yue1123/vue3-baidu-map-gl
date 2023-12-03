<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue'

  const offlineReady = ref(false)
  const needRefresh = ref(false)

  let updateServiceWorker: ((reload: boolean) => Promise<void>) | undefined

  function onOfflineReady() {
    offlineReady.value = true
  }
  function onNeedRefresh() {
    needRefresh.value = true
  }
  async function close() {
    offlineReady.value = false
    needRefresh.value = false
  }

  onBeforeMount(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    updateServiceWorker = registerSW({
      immediate: true,
      onOfflineReady,
      onNeedRefresh,
      onRegistered() {
        console.info('Service Worker registered')
      },
      onRegisterError(e) {
        console.error('Service Worker registration error!', e)
      }
    })
  })
</script>

<template>
  <template v-if="offlineReady || needRefresh">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div class="icon">
        <img
          v-if="needRefresh"
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
          alt="Party Popper"
          width="40"
          height="40"
        />
        <img
          v-else
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
          alt="Rocket"
          width="40"
          height="40"
        />
      </div>
      <div class="content">
        <h2 class="title">
          {{ offlineReady ? 'Offline ' : 'Update' }}
        </h2>
        <div id="pwa-message" class="mb-3">
          {{ offlineReady ? 'App ready to work offline' : 'New content available, click the reload button to update.' }}
        </div>
        <div class="buttons">
          <button
            v-if="needRefresh && updateServiceWorker"
            type="button"
            class="pwa-refresh myButton"
            @click="updateServiceWorker(true)"
          >
            Reload
          </button>
          <button type="button" class="pwa-cancel myButton" @click="close">Close</button>
        </div>
      </div>
    </div>
  </template>
</template>

<style lang="less">
  .pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid var(--vp-custom-block-details-border);
    border-radius: 8px;
    z-index: 100;
    text-align: left;
    box-shadow: 0 0 25px 0px var(--vp-custom-block-details-border);
    background-color: var(--vp-c-bg-soft);
    display: flex;
    max-width: 380px;
    .icon {
      margin-right: 15px;
    }
    .title {
      font-weight: 700;
      color: var(--vp-c-text-1);
    }
    #pwa-message {
      margin: 8px 0;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      button {
        margin: 0 8px;
      }
    }
  }
</style>
