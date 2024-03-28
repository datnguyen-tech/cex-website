<template>
  <div class="cex-container mt-24 pb-24 sm:px-8">
    <h2 class="text-center text-6xl font-bold text-[#4d4f4f] sm:text-[45px] sm:text-start sm:font-bold">When crypto is
      your business
    </h2>
    <p
      class="mx-auto mb-[39px] mt-3 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f] sm:text-start sm:text-[22px] sm:leading-8">
      Gemini works with the best. We’re partnered with leading institutions both large and small.
    </p>

    <card-covered class="bg-[#000000cc]">
      <template #title-top>
        <span class="text-[#fff] sm:text-5xl">Store and manage digital assets on behalf of clients </span>
      </template>
      <template #overlay>
        <picture>
          <img
            src="https://images.ctfassets.net/jg6lo9a2ukvr/3WRcMCA4x0zigrdZ32BiqJ/9b8e0afc6b3066d3869f2fcfeabac5ce/laptopDesktopBg__1_.png?fm=webp"
            alt="Mobile Image-ATI Mobile App Section" />
        </picture>
      </template>
      <template #title-bottom>
        <span class="text-[#fff] sm:text-2xl" style="text-wrap: nowrap;">Gemini Institutional</span>
      </template>
      <template #button>
        <base-icon name="arrow-circle" size="48"></base-icon>
      </template>
    </card-covered>

    <div class="mt-24">
      <h2 class="text-center text-6xl font-bold text-[#4d4f4f] sm:text-[45px] sm:text-start sm:font-bold">Over $200
        billion
        USD in volume traded</h2>
      <p
        class="mx-auto mb-[39px] mt-3 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f] sm:text-start sm:text-[22px] sm:leading-8">
        Join the movement.
      </p>
      <div
        class="mx-auto flex h-14 w-fit min-w-[180px] items-center justify-center rounded-full bg-[#26ddf9] px-8 text-lg font-medium sm:justify-start sm:mx-0">
        Start trading today
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardCovered from '@/components/card/CardCovered.vue'
</script>

<style scoped></style>
