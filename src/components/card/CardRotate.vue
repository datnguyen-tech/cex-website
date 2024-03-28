<template>
    <div class="card-rotate relative min-h-[247px]" :class="{ rotate: !status }">
        <div class="card-inner">
            <div class="front h-full">
                <slot name="front"></slot>
                <div class="absolute bottom-[14px] right-[14px] z-20" @click="handleClickButton">
                    <base-icon name="plus-circle" size="32" class="cursor-pointer text-[#e4e4e4]"></base-icon>
                </div>
            </div>
            <div class="back">
                <slot name="back"></slot>
                <div class="absolute bottom-[14px] right-[14px] z-20" @click="handleClickButton">
                    <base-icon name="delete-circle" size="32" class="cursor-pointer text-black"></base-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const status = ref(true)

    const handleClickButton = () => {
        status.value = !status.value
    }
</script>

<style scoped lang="scss">
    .card-rotate {
        perspective: 1000px;
        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;

            .front,
            .back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                border-radius: 16px;
            }
        }

        .back {
            transform: rotateY(180deg);
            background-color: #fff;
        }
    }

    .rotate {
        .card-inner {
            transform: rotateY(180deg);
        }
    }
</style>
