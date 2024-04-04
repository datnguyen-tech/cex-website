<template>
    <div v-if="type === 'large'" class="overflow-hidden rounded-2xl">
        <div class="relative h-[540px] p-10">
            <h2 class="relative z-10 max-w-[450px] text-5xl font-semibold text-white sm:text-[44px]">
                <slot name="title-top" />
            </h2>
            <div class="absolute left-0 top-0 h-full w-full">
                <slot name="overlay" />
            </div>
            <div class="absolute bottom-10 left-10 z-10 flex w-[calc(100%-80px)] items-center justify-between sm:bottom-3">
                <h3 class="text-4xl font-semibold text-white sm:text-lg">
                    <slot name="title-bottom" />
                </h3>
                <slot v-if="showArrow" name="button">
                    <base-icon name="arrow-circle" size="48" class="text-white"></base-icon>
                </slot>
            </div>
        </div>
    </div>
    <div v-else class="relative h-[575px] overflow-hidden rounded-2xl p-10">
        <slot></slot>
        <div class="absolute bottom-10 left-10 flex w-[calc(100%-80px)] items-center justify-between text-white">
            <h3 class="text-2xl font-semibold">
                <slot name="title-bottom" />
            </h3>
            <base-icon name="arrow-circle" size="48" class="text-white"></base-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface IProp {
        type: 'small' | 'large'
        showArrow?: boolean
    }
    const props = withDefaults(defineProps<IProp>(), {
        type: 'large',
        showArrow: true
    })
</script>

<style scoped></style>
