<template>
    <div class="landing">
        <landing-crypto-covered />
        <landing-rotate-card />
        <landing-safe />
        <landing-portfolio />
        <landing-business />
        <langding-footer />
    </div>
</template>

<script setup lang="ts">
    import LandingBusiness from '../components/LandingBusiness.vue'
    import LandingCryptoCovered from '../components/LandingCryptoCovered.vue'
    import LandingPortfolio from '../components/LandingPortfolio.vue'
    import LandingRotateCard from '../components/LandingRotateCard.vue'
    import LandingSafe from '../components/LandingSafe.vue'
    import LangdingFooter from '../components/LangdingFooter.vue'
</script>

<style scoped lang="scss">
    .landing {
        background-color: #f7f7f7;
        min-height: 100vh;
    }
</style>
