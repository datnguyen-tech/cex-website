<template>
    <section class="cex-container">
        <h2 class="text-center text-6xl font-bold text-[#4d4f4f]">Crypto, covered.</h2>
        <p class="mx-auto mb-[39px] mt-3 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f]">
            We’re crypto-obsessed and compliance-focused, making it safe and easy to buy and sell crypto.
        </p>

        <div class="space-y-4">
            <card-covered>
                <template #title-top> What to expect from the industry in 2024 </template>
                <template #overlay>
                    <video width="100%" height="100%" playsinline autoplay loop muted>
                        <source
                            src="//videos.ctfassets.net/jg6lo9a2ukvr/4QVIn6YkzW6uIwtdSA2lRb/e7c5996648cecf9ceabd07ad1e790090/Homecard.mp4"
                            type="video/mp4"
                        />
                    </video>
                </template>
                <template #title-bottom> Gemini Crypto Trend Report. </template>
            </card-covered>
            <card-covered>
                <template #title-top>
                    <span class="text-[#000]">Advanced trading mode is now available </span>
                </template>
                <template #overlay>
                    <picture>
                        <img
                            src="https://images.ctfassets.net/jg6lo9a2ukvr/1fE86snrxS8u4j2ZFARLqb/792198205eb4a8008e4f16a880acfc60/advanced_trading_mode_desktop.png?fm=avif"
                            alt="Mobile Image-ATI Mobile App Section"
                        />
                    </picture>
                </template>
                <template #title-bottom>
                    <span class="text-[#000]">Mobile App</span>
                </template>
                <template #button>
                    <base-icon name="arrow-circle" size="48"></base-icon>
                </template>
            </card-covered>
            <card-covered>
                <template #title-top> Unlock low-fee advanced trading </template>
                <template #overlay>
                    <picture>
                        <img
                            src="https://images.ctfassets.net/jg6lo9a2ukvr/27GCWGu5u4ie2dYp0j46wz/e4f3fce254e0325310c859b5218b209d/ActiveTraderBackground__1_.jpg?fm=webp"
                            alt="Mobile Image-ATI Mobile App Section"
                        />
                    </picture>
                </template>
                <template #title-bottom> ActiveTrader </template>
            </card-covered>

            <div class="grid grid-cols-3 gap-[18px]">
                <card-covered type="small" class="card">
                    <div>
                        <picture>
                            <img
                                src="https://images.ctfassets.net/jg6lo9a2ukvr/7HVLLIxjoTWzTmIzKQGAZn/e99c3674691b9f4d204251cdbc2b8322/CreditCardHero__1_.png?fm=webp"
                                alt=""
                                class="mx-auto w-[174px]"
                            />
                        </picture>
                    </div>
                    <h2 class="mt-5 text-5xl font-semibold text-white">Invest when you spend</h2>
                    <p class="mt-2 text-[10px] leading-[15px] text-white">
                        Engaging with crypto involves risks, including the risk of your crypto rewards declining in value over
                        time. Past performance no guarantee of future results. A Gemini Mastercard®. Issued by WebBank. Terms
                        apply.
                    </p>
                    <template #title-bottom> Credit Card </template>
                </card-covered>
                <card-covered type="small" class="card">
                    <h2 class="mb-[55px] text-5xl font-semibold text-white">Get rewards on your crypto</h2>
                    <div>
                        <picture>
                            <img
                                src="https://images.ctfassets.net/jg6lo9a2ukvr/5yqbTQNkghbsfcYBPQnFpS/f302aeff0963afa3174ccb8ffe4642ea/StakingHero.png?fm=webp"
                                alt=""
                                class="mx-auto w-[174px]"
                            />
                        </picture>
                    </div>

                    <template #title-bottom> Staking </template>
                </card-covered>
                <card-covered type="small" class="card">
                    <div>
                        <picture>
                            <img
                                src="https://images.ctfassets.net/jg6lo9a2ukvr/3ewWHJKvx3P1mnFDN8ksT8/c2e7d30914e20865c9e1de874254b5d6/NiftyGatewayBackground__1_.png?fm=webp"
                                alt=""
                                class="absolute left-0 top-0 h-full w-full"
                            />
                        </picture>
                    </div>
                    <h2 class="absolute bottom-[115px] text-5xl font-semibold text-white">Buy and sell NFTs</h2>
                    <template #title-bottom> Staking </template>
                </card-covered>
            </div>
            <card-covered>
                <template #title-top> Elevate your trading strategies with derivatives contracts on ActiveTrader</template>
                <template #overlay>
                    <picture>
                        <img
                            src="https://images.ctfassets.net/jg6lo9a2ukvr/OrgTcbtDDqbik3DnxwaK9/1413ce4d6e1d8553c833c7467580773e/homepage-perpsBg.png?fm=webp"
                            alt="Mobile Image-ATI Mobile App Section"
                        />
                    </picture>
                </template>
                <template #title-bottom> Derivatives </template>
            </card-covered>
        </div>
    </section>
</template>

<script setup lang="ts">
    import CardCovered from '@/components/card/CardCovered.vue'
</script>

<style scoped lang="scss">
    .cex-container {
        .card:first-child {
            background: linear-gradient(184.5deg, rgb(38, 221, 249) 2.88%, rgb(0, 176, 203) 76.95%);
        }
        .card:nth-child(2) {
            background: linear-gradient(rgb(164, 133, 255) 0%, rgb(104, 51, 255) 100%);
        }
        .card:last-child {
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 0%);
        }
    }
</style>
