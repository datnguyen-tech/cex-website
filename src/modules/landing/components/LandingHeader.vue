<template>
    <div class="header-container">
        <header class="header">
            <div class="logo">
                <router-link to="#"> <img src="/images/logo.webp" alt="logo" class="logo-img" /></router-link>
            </div>

            <div class="logo-mb">
                <router-link to="#"> <img src="/images/logo-mb.webp" alt="logo" class="logo-img" /></router-link>
            </div>

            <ul class="menu">
                <li class="menu-item"><router-link to="#">Prices</router-link></li>
                <li class="menu-item"><router-link to="#">Derivatives</router-link></li>
                <li class="menu-item"><router-link to="#">All Products</router-link></li>
                <li class="menu-item"><router-link to="#">Institutions</router-link></li>
                <li class="menu-item"><router-link to="#">Resources</router-link></li>
            </ul>

            <div class="actions">
                <button type="button" class="btn-login">Log in</button>
                <button type="button" class="btn-signup">Sign up</button>
                <div class="menu-icon" :class="{ change: isMenuOpen }" @click="toggleMenu">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                </div>
            </div>

            <div id="menu-mb" class="menu-mb" :style="{ width: isMenuOpen ? '100%' : '0' }">
                <a href="#" class="btn-close" @click="closeMenu">×</a>
                <a href="#">Prices</a>
                <a href="#">Derivatives</a>
                <a href="#">All Products</a>
                <a href="#">Institutions</a>
                <a href="#">Resources</a>

                <div class="actions-mb">
                    <button type="button" class="btn-login-mb">Log in</button>
                    <button type="button" class="btn-signup-mb">Sign up</button>
                </div>
            </div>
        </header>
    </div>

    <section class="banner">
        <h1 class="banner-header">Turn your money into crypto assets</h1>
        <p class="banner-intro">
            The secure way to buy, sell, store, and convert crypto. Millions use Gemini to diversify their portfolios.
        </p>
        <button class="btn-get-started">Get started</button>

        <div class="banner-images">
            <img src="/images/banner-image-1.avif" alt="banner" class="banner-1" />
            <img src="/images/banner-image-2.avif" alt="banner" class="banner-2" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
        isMenuOpen.value = false
    }
</script>

<style scoped>
    .header-container {
        z-index: 9999;
        position: fixed;
        top: 0px;
        width: 100%;
        height: 60px;
        background-color: #010304;
    }

    .header {
        max-width: 1280px;
        height: 100%;
        margin: auto;
        font-size: 0.875rem;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        color: #fff;
        padding: 0 20px;
    }

    .logo {
        display: none;
    }

    .logo-mb {
        z-index: 1000;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .logo-img {
        height: 24px;
    }

    .menu {
        display: none;
    }

    .menu-item:hover {
        color: #888;
    }

    .actions {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .actions .btn-login {
        display: none;
    }

    .actions .btn-signup {
        width: 130px;
        height: 40px;
        font-size: 0.75rem;
        padding: 0px 16px;
        border-radius: 999px;
        background-color: #26ddf9;
        color: #010304;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.33px;
        text-align: center;
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
    }

    .actions .btn-signup:hover {
        border-color: #7ceafb;
        background-color: #7ceafb;
    }

    .menu-icon {
        display: inline-block;
        cursor: pointer;
    }

    .bar {
        width: 30px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
    }

    .menu-mb {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #010304;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        transition: width 0.4s;
        overflow-y: auto;
    }

    .menu-mb .btn-close {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 2.25rem;
        margin-left: 50px;
    }

    .menu-mb a {
        padding: 16px 16px 16px 32px;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 32px;
        letter-spacing: 0px;
        color: #fff;
        display: block;
        transition: 0.3s;
    }

    .menu-mb a:hover {
        color: #888;
    }

    .actions-mb {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .btn-login-mb {
        display: block;
        outline: none;
        border: none;
        font-size: 1rem;
        height: 56px;
    }

    .btn-signup-mb {
        width: 80%;
        height: 56px;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid rgb(38, 221, 249);
        border-radius: 999px;
        padding: 0px 16px;
        background-color: #26ddf9;
        color: #010304;
        text-align: center;
        line-height: 16px;
        letter-spacing: 0.33px;
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
    }

    .btn-signup-mb:hover {
        border-color: #7ceafb;
        background-color: #7ceafb;
    }

    .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
        overflow: hidden;
    }

    .banner-header {
        margin-top: 60px;
        padding-top: 100px;
        font-size: 3rem;
        line-height: 48px;
        letter-spacing: -2.64px;
        text-align: center;
        max-width: 680px;
        margin-bottom: 24px;
        color: #010304;
        font-weight: 700;
    }

    .banner-intro {
        font-size: 1.125rem;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: center;
        max-width: 480px;
        margin-bottom: 38px;
        margin: 0px 0px 16px;
        color: rgb(1, 3, 4);
        font-weight: 500;
    }

    .btn-get-started {
        z-index: 1;
        min-width: 180px;
        height: 56px;
        padding: 0px 32px;
        font-size: 1.125rem;
        border-radius: 999px;
        outline: 0px;
        margin-top: 20px;
        cursor: pointer;
        background-color: #26ddf9;
        color: #010304;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.33px;
        text-align: center;
        border: 2px solid #26ddf9;
        transition: border-color 300ms ease-in 0s, color 300ms ease-in 0s, background-color 300ms ease-in 0s;
        white-space: nowrap;
    }

    .btn-get-started:hover {
        border-color: #7ceafb;
        background-color: #7ceafb;
    }

    .banner-images {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .banner-1 {
        width: 50%;
        position: relative;
        left: 0;
    }

    .banner-2 {
        width: 100%;
        position: relative;
        right: 80px;
    }

    @media (min-width: 768px) {
        .menu {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            gap: 2rem;
            margin: 0;
            padding: 0;
        }

        .menu-icon {
            display: none;
        }

        .logo {
            display: flex;
            height: 100%;
            /* flex-grow: 1; */
            align-items: center;
            justify-content: space-between;
        }

        .logo-mb {
            display: none;
        }

        .actions .btn-login {
            display: block;
            outline: none;
            border: none;
        }

        .actions .btn-signup {
            min-width: 80px;
            width: auto;
            font-size: 14px;
        }

        .banner-header {
            font-size: 60px;
            line-height: 60px;
        }
    }

    @media (min-width: 1200px) {
        .btn-get-started {
            margin-bottom: -100px;
        }

        .banner-1 {
            width: 25%;
            left: 250px;
        }

        .banner-2 {
            width: 40%;
            top: -40px;
            right: -20px;
        }
    }
</style>
