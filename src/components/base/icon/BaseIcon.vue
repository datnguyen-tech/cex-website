<template>
  <div class="base-icon" :style="{ width: size + 'px' }" @click="emit('click')">
    <component :is="icon"></component>
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    name: string
    size?: string | number
  }
  const props = withDefaults(defineProps<IProps>(), {
    name: '',
    size: 20
  })
  const emit = defineEmits<{
    click: []
  }>()
  const icons = import.meta.glob(`@/icons/*.svg`)
  const icon = shallowRef<any>()

  watch(
    () => props.name,
    () => {
      //@ts-ignore
      icon.value = defineAsyncComponent(() => icons[`/src/icons/${props.name}.svg`]())
    }
  )

  onMounted(() => {
    //@ts-ignore
    icon.value = defineAsyncComponent(() => icons[`/src/icons/${props.name}.svg`]())
  })
</script>

<style scoped></style>
