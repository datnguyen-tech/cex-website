<template>
  <div class="cex-container mt-24 sm:px-8">
    <h2 class="mt-[150px] text-center text-6xl font-bold text-[#4d4f4f] sm:text-start sm:text-[45px]">
      Your
      portfolio.
      Your way.
    </h2>
    <p
      class="mx-auto mb-5 mt-6 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f] sm:text-start sm:text-[24px] sm:leading-7">
      See which interface is right for you.
    </p>

    <div class="mb-[15px] flex items-center justify-center">
      <div class="rounded-[30px] bg-white p-5 sm:p-3">
        <span class="__transition mr-2 cursor-pointer rounded-[30px] p-3 text-sm sm:p-2"
          :class="{ isActiveBtn: isActiveBtn == 'EXCHANGE' }" @click="() => (isActiveBtn = 'EXCHANGE')">
          View the Exchange
        </span>
        <span class="__transition cursor-pointer rounded-[30px] p-3 text-sm sm:p-2"
          :class="{ isActiveBtn: isActiveBtn == 'ACTIVETRADER' }" @click="() => (isActiveBtn = 'ACTIVETRADER')">
          View ActiveTrader
        </span>
      </div>
    </div>

    <div class="relative flex items-center justify-center">
      <img class="h-[590px] w-[807px] sm:h-[294px] sm:w-[538px]"
        src="https://images.ctfassets.net/jg6lo9a2ukvr/1EBEh7UD9nQVJ3Xe7v27M7/975ac830b87fda0ed51ad545622c056b/YourPortfolio_EmptyFrame__1_.png?fm=webp"
        alt="homepage-yourportfolioframe-boxshadow" loading="lazy" decoding="async" style="object-fit: inherit" />
      <img v-if="isActiveBtn == 'EXCHANGE'" class="absolute h-[510px] w-[734px] sm:h-[248px] sm:w-[298px]"
        src="https://images.ctfassets.net/jg6lo9a2ukvr/7xaILFL34WQgY19PXsmbH3/50b53131564780e32782df0488806bbb/homepage-retail-portfolio.png?fm=webp"
        alt="homepage-yourportfolio-bg-black@2x" loading="lazy" decoding="async" style="object-fit: inherit" />
      <img v-else class="absolute h-[510px] w-[734px] sm:h-[248px] sm:w-[298px]"
        src="https://images.ctfassets.net/jg6lo9a2ukvr/1sCVyLVytbSLUO9SD5x1k1/82dca3b2fd11c2b4c60f71d728cbd1d4/homepage-activetrader.png?fm=webp"
        alt="homepage-yourportfolio-bg-black@2x" loading="lazy" decoding="async" style="object-fit: inherit" />
    </div>

    <div class="mb-20 mt-[150px] grid grid-cols-3 gap-[18px] sm:grid-cols-1">
      <div class="flex flex-col items-start justify-start rounded-[15px] bg-white px-7 py-8">
        <img
          src="https://images.ctfassets.net/jg6lo9a2ukvr/NvIBm45dTq7Bd5Lb0g7bW/d2c9d03f9f8e6485df28d515026adf6e/customView.png?fm=webp"
          alt="CustomView-Icon" loading="lazy" decoding="async" style="object-fit: inherit" />
        <span class="mt-4 text-5xl font-medium"> Customize your view </span>
        <p class="mt-5 font-medium text-black">
          Multiple charting types, watchlists, and price alerts help you follow the market and make strategic trades.
        </p>

        <p class="mb-10 mt-20 text-sm font-medium underline">Learn More</p>
      </div>

      <div class="flex flex-col items-start justify-start rounded-[15px] bg-white px-7 py-8">
        <img
          src="https://images.ctfassets.net/jg6lo9a2ukvr/2FpnnYGIlBxx4iMAV9Kz37/3eea3e9b15fb5f851cc5ba1f91c0517e/cryptoIcon.png?fm=webp"
          alt="CustomView-Icon" loading="lazy" decoding="async" style="object-fit: inherit" />
        <span class="mt-4 text-5xl font-medium"> 70+ cryptos </span>
        <p class="mt-5 font-medium text-black">
          Place instant, recurring, and limit buys on our growing and vetted list of available cryptos.
        </p>

        <p class="mb-10 mt-20 text-sm font-medium underline">View cryptocurrencies</p>
      </div>

      <div class="flex flex-col items-start justify-start rounded-[15px] bg-white px-7 py-8">
        <img
          src="https://images.ctfassets.net/jg6lo9a2ukvr/1oW0rtHdxAgPBZH2kVrJYJ/6e7c251defaf68a9b0f8a56841cadf45/buyCard.png?fm=webp"
          alt="CustomView-Icon" loading="lazy" decoding="async" style="object-fit: inherit" />
        <span class="mt-4 text-5xl font-medium"> Don’t want to buy (yet)? </span>
        <p class="mt-5 font-medium text-black">
          Not everyone wants to place their own trades. Invest in crypto simply by spending with the Gemini Credit Card.
        </p>

        <p class="mb-10 mt-20 text-sm font-medium underline">Apply For The Gemini Credit Card</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type IBtn = 'EXCHANGE' | 'ACTIVETRADER'
const isActiveBtn = ref<IBtn>('EXCHANGE')
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

  .isActiveBtn {
    background-color: #676868;
    color: white;
  }

  .__transition {
    transition: background-color 0.3s ease;
  }
}
</style>
