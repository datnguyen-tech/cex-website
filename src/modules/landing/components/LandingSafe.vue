<template>
  <div class="cex-container mt-24">
    <h2 class="text-center text-6xl font-bold text-[#4d4f4f]">A safe place for your crypto</h2>
    <p class="mx-auto mb-[39px] mt-3 max-w-[780px] text-center text-3xl font-medium text-[#4d4f4f]">
      We’re focused on providing innovative security solutions to protect your assets.
    </p>
    <div class="grid grid-cols-3 gap-[18px]">
      <card-rotate class="min-h-[574px]">
        <template #front>
          <div class="h-full rounded-2xl bg-white">
            <img src="/images/Hardware_security_keys.webp" alt="" class="mx-auto h-[451px]" />
          </div>
          <div class="absolute bottom-[14px] left-[14px] text-lg font-semibold">Hardware Security Keys</div>
        </template>
        <template #back>
          <div class="p-8 text-left text-sm">
            <p class="mb-2 text-lg font-semibold">Hardware Security Keys</p>
            <p class="text-sm">
              Hardware security keys provide the strongest level of account protection. That's why we were the first crypto
              exchange to introduce support for hardware security keys across mobile devices.
            </p>
          </div>
        </template>
      </card-rotate>
      <card-rotate class="min-h-[574px]">
        <template #front>
          <div class="h-full rounded-2xl bg-white">
            <img src="/images/two-factor-authentication.webp" alt="" class="mx-auto h-[451px]" />
          </div>
          <div class="absolute bottom-[14px] left-[14px] text-lg font-semibold">Two-Factor Authentication</div>
        </template>
        <template #back>
          <div class="p-8 text-left text-sm">
            <p class="mb-2 text-lg font-semibold">Two-Factor Authentication</p>
            <p class="text-sm">
              An added layer of protection to confirm you are in control of your login credentials. 2FA is a requirement.
            </p>
          </div>
        </template>
      </card-rotate>
      <card-rotate class="min-h-[574px]">
        <template #front>
          <div class="h-full rounded-2xl bg-white">
            <img src="/images/Approved_addresses.webp" alt="" class="mx-auto h-[451px]" />
          </div>
          <div class="absolute bottom-[14px] left-[14px] text-lg font-semibold">Approved Addresses</div>
        </template>
        <template #back>
          <div class="p-8 text-left text-sm">
            <p class="mb-2 text-lg font-semibold">Approved Addresses</p>
            <p class="text-sm">
              Know where your crypto is at all times. Approved addresses is another enhanced security feature that allows you to
              ban or limit all cryptocurrency withdrawals to a list of known addresses only.
            </p>
          </div>
        </template>
      </card-rotate>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardRotate from '@/components/card/CardRotate.vue'
</script>

<style scoped></style>
