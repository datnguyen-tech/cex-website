<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { debounce } from 'lodash-es'

  import { useBaseStore } from './stores/base.store'

  const { isDesktop } = storeToRefs(useBaseStore())

  onMounted(() => {
    setSizeScreen()
    window.addEventListener('resize', setSizeScreen)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', setSizeScreen)
  })

  const setSizeScreen = debounce(() => {
    isDesktop.value = window.innerWidth > 1023
  }, 400)
</script>

<style scoped></style>
