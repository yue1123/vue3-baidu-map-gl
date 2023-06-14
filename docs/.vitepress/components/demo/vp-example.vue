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
    background-color: var(--vp-c-bg);
    background-image: radial-gradient(circle, var(--vp-c-divider) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 1rem 1rem;
  }
</style>
