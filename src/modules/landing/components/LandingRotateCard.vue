<template>
  <div class="cex-container mt-20">
    <h2 class="text-center text-6xl font-bold text-[#4d4f4f]">We’re here. For good.</h2>
    <p class="mx-auto mb-[39px] mt-3 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f]">
      Gemini is a full-reserve and highly-regulated cryptocurrency exchange and custodian.
    </p>

    <div class="grid grid-cols-1 gap-[18px]">
      <div class="grid grid-cols-3 gap-[18px]">
        <div class="col-span-1 grid grid-cols-1 gap-[18px]">
          <card-rotate>
            <template #front>
              <div class="flex h-full flex-col justify-center rounded-2xl bg-[#000] p-8 text-left">
                <img
                  src="https://images.ctfassets.net/jg6lo9a2ukvr/6M5JdyKvUnByc3BDfSkw9k/dc90ea5b32c665e61ba2681712dc37fe/earthBg.png?fm=webp"
                  alt=""
                  class="absolute left-0 top-0 h-full w-full object-cover"
                />
                <div class="relative z-10">
                  <p class="text-lg font-bold text-white">Based in NYC since 2014</p>
                  <p class="text-[40px] font-bold leading-[48px] text-white">Available in 70+ countries.</p>
                </div>
              </div>
            </template>
            <template #back>
              <p class="p-8 text-left text-sm">
                Our founders, Cameron and Tyler Winklevoss, were early investors in cryptocurrency and struggled to find a
                platform where they could securely manage their growing portfolio. They built Gemini to deliver the first trusted
                platform that focused on strong security controls and compliance.
              </p>
            </template>
          </card-rotate>
          <card-rotate>
            <template #front>
              <div class="bg-blue flex h-full flex-col justify-center rounded-2xl p-8 text-left">
                <div class="relative z-10">
                  <p class="text-lg font-bold text-white">Our mantra</p>
                  <p class="text-2xl font-bold text-white">Asking permission, not forgiveness.</p>
                </div>
              </div>
            </template>
            <template #back>
              <p class="p-8 text-left text-sm">
                Gemini Trust Company, LLC, which is part of the Gemini family of companies, is a New York trust company regulated
                by the New York State Department of Financial Services (NYSDFS). This means we are subject to requirements
                including capital reserves, cybersecurity, and high banking compliance standards.
              </p>
            </template>
          </card-rotate>
        </div>
        <div class="col-span-2">
          <card-rotate class="h-full">
            <template #front>
              <div class="flex h-full flex-col justify-center rounded-2xl bg-[#cccdcd] p-8 text-left">
                <div class="relative z-10 text-[#000]">
                  <p class="text-lg font-semibold">We are</p>
                  <p class="max-w-[200px] text-[60px] font-semibold">Certified. Regulated. Licensed.</p>
                  <p class="max-w-[500px] text-2xl">
                    From day one, Gemini has prioritized the security of your assets. We never have and never will compromise on
                    that.
                  </p>
                </div>
              </div>
            </template>
            <template #back>
              <ul class="flex h-full flex-col items-center justify-center space-y-[22px] p-8">
                <li class="flex items-center gap-[27px] text-left">
                  <img src="/images/iso-27001.svg" alt="" class="w-20" />
                  <div class="flex flex-col">
                    <span class="text-lg font-semibold">ISO/IEC 27001:2013 </span>
                    <p class="max-w-[400px] text-sm">
                      Validates that Gemini operates an Information Security Management System (ISMS) that conforms to the
                      requirements of ISO/IEC 27001:2013.
                    </p>
                  </div>
                </li>
                <li class="flex items-center gap-[27px] text-left">
                  <img src="/images/pci.svg" alt="" class="w-20" />
                  <div class="flex flex-col">
                    <span class="text-lg font-semibold">ISO/IEC 27001:2013 </span>
                    <p class="max-w-[400px] text-sm">
                      Validates that Gemini operates an Information Security Management System (ISMS) that conforms to the
                      requirements of ISO/IEC 27001:2013.
                    </p>
                  </div>
                </li>
                <li class="flex items-center gap-[27px] text-left">
                  <img src="/images/SOC.webp" alt="" class="w-20" />
                  <div class="flex flex-col">
                    <span class="text-lg font-semibold">ISO/IEC 27001:2013 </span>
                    <p class="max-w-[400px] text-sm">
                      Validates that Gemini operates an Information Security Management System (ISMS) that conforms to the
                      requirements of ISO/IEC 27001:2013.
                    </p>
                  </div>
                </li>
              </ul>
            </template>
          </card-rotate>
        </div>
      </div>
      <!-- <div class="grid grid-cols-3 gap-[18px]">
        <div class="col-span-2">
          <card-rotate>
            <template #front>
              <div class="bg-yellow flex h-full min-h-[247px] flex-col justify-center rounded-2xl p-8 text-left">
                <div class="relative z-10">
                  <p class="text-lg font-bold">The Ascent 2022 Best Crypto Exchanges</p>
                  <p class="text-[60px] font-bold leading-none">Best Crypto</p>
                  <p class="text-[60px] font-bold leading-none">Exchange Overall</p>
                </div>
              </div>
            </template>
            <template #back>
              <p class="p-8 text-left text-sm">
                Gemini Trust Company, LLC, which is part of the Gemini family of companies, is a New York trust company regulated
                by the New York State Department of Financial Services (NYSDFS). This means we are subject to requirements
                including capital reserves, cybersecurity, and high banking compliance standards.
              </p>
            </template>
          </card-rotate>
        </div>
        <div class="col-span-1"></div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardRotate from '@/components/card/CardRotate.vue'
</script>

<style scoped></style>
