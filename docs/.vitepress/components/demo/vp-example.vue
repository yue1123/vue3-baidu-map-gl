<script setup lang="ts">
  defineProps({
    file: {
      type: String,
      required: true
    },
    demo: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <ClientOnly>
    <div class="example-showcase">
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </div>
  </ClientOnly>
</template>

<style lang="less" scoped>
  .example-showcase {
    padding: 0 1rem;
    margin: 0.5px;
    background: var(--vp-c-bg);
  }
</style>
