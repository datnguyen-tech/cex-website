<template>
  <div class="landing">
    <landing-crypto-covered />
    <landing-rotate-card />
  </div>
</template>

<script setup lang="ts">
  import LandingCryptoCovered from '../components/LandingCryptoCovered.vue'
  import LandingRotateCard from '../components/LandingRotateCard.vue'
</script>

<style scoped lang="scss">
  .landing {
    background-color: #f7f7f7;
    min-height: 100vh;
  }
</style>
