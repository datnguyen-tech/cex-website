<template>
  <div class="el-block" :class="{ isBorderTop: props.isShowBorderTop }" @click="handleExpand">
    <div class="w-full flex content-center justify-between title">
      <slot />
      <div class="flex content-center items-center">
        <base-icon size="20" name="arrow" class="text-secondary" />
      </div>
    </div>
    <div class="expand-menu w-full" :class="{ 'active': expand }">
      <div class="pt-4 mt-2">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const expand = ref<Boolean>(false);

const handleExpand = () => {
  expand.value = !expand.value;
}

const props = withDefaults(defineProps<{ isShowBorderTop: boolean }>(), {
  isShowBorderTop: false
})
</script>

<style scoped lang="scss">
.text-secondary {
  color: var(--dr-text-secondary);
}

.isBorderTop {
  border-top: 1px solid var(--gray-100, #e1e3e7);
}

.el-block {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0px 16px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-100, #e1e3e7);
  background: #FFF;

  &:hover {
    cursor: pointer;
  }

  .expand-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.65s ease-out;
  }

  .active {
    max-height: 500px;
    transition: max-height 0.65s ease-in;
  }

}
</style>