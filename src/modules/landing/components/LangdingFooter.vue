<template>
    <div class="bg-white">
        <div class="cex-container mx-auto flex bg-white">
            <div class="block1 mt-15">
                <div class="mt-20">
                    <img src="../../../assets/image/image.webp" alt="" class="mb-[32px]" />

                    <div>
                        <div class="lable">Stay up to date</div>
                        <input type="text" name="" placeholder="Email address" class="inputEmail my-5 w-44" />
                    </div>
                    <button class="btn">Subscribe</button>
                    <!-- <div class="listIcon mt-[200%] flex justify-around">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
                            <path
                                fill="currentColor"
                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                            />
                        </svg>
                    </div>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
                                <path
                                    d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z"
                                />
                                <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" />
                            </g>
                        </svg>
                    </div>

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 56 56">
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M45.608 45.607h-7.415V34.002c0-2.766-.048-6.326-3.853-6.326c-3.86 0-4.449 3.015-4.449 6.129v11.802h-7.407V21.745h7.108v3.263h.103c.99-1.877 3.409-3.855 7.016-3.855c7.51 0 8.897 4.94 8.897 11.367zM14.123 18.485a4.299 4.299 0 0 1-4.303-4.301a4.3 4.3 0 0 1 8.6 0a4.3 4.3 0 0 1-4.297 4.301m-3.714 27.122h7.423V21.745H10.41zM49.3 3H6.688C4.653 3 3 4.614 3 6.606v42.787c0 1.992 1.653 3.608 3.688 3.608H49.3c2.04 0 3.699-1.616 3.699-3.608V6.606C53 4.614 51.34 3 49.301 3"
                            />
                        </svg>
                    </div>

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M18.43 4.216H5.57A4.57 4.57 0 0 0 1 8.786v6.429a4.57 4.57 0 0 0 4.57 4.569h12.86a4.57 4.57 0 0 0 4.57-4.57V8.786a4.57 4.57 0 0 0-4.57-4.569zm-3.09 8.097l-6.015 2.869a.241.241 0 0 1-.346-.218V9.046c0-.18.19-.297.351-.215l6.016 3.048a.242.242 0 0 1-.005.434z"
                            />
                        </svg>
                    </div>

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 384">
                            <path
                                fill="currentColor"
                                d="M427 189q0 28-27 39q2 9 2 19q0 51-55.5 87.5t-134 36.5t-134-36.5T23 247q0-10 2-20q-25-11-25-38q0-18 12.5-30.5T42 146q19 0 32 15q52-36 129-39l35-104q3-7 10-5l83 20q1 0 3 1q8-20 30-20q13 0 23 10t10 23.5T387 71t-23 10q-14 0-23.5-9.5T331 48q-2 1-3 0l-77-18l-31 92q79 2 132 40q13-16 33-16q17 0 29.5 12.5T427 189zm-311 33.5q0 12.5 9 21.5t21.5 9t21.5-9t9-21.5t-9-22t-21.5-9.5t-21.5 9.5t-9 22zM282 307q4-3 .5-6.5t-7.5-.5q-18 19-62 19t-62-19q-3-3-6.5.5t-.5 6.5q21 22 70 22q47 0 68-22zm-1.5-54q12.5 0 21.5-9t9-21.5t-9-22t-21.5-9.5t-22 9.5t-9.5 22t9.5 21.5t22 9z"
                            />
                        </svg>
                    </div>

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
                            <path
                                fill="currentColor"
                                d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802c.756-1.081 1.753-1.502 3.132-1.502c.975 0 1.803.327 2.394.948c.591.621.928 1.509 1.005 2.644c.328.138.63.299.905.484c1.109.745 1.719 1.86 1.719 3.137c0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994C1 2.034 4.482 0 8.044 0C9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79c0 4.143 2.254 6.343 5.63 6.343c2.777 0 4.847-1.443 4.847-3.556c0-1.438-1.208-2.127-1.27-2.127c-.236 1.234-.868 3.31-3.644 3.31c-1.618 0-3.013-1.118-3.013-2.582c0-2.09 1.984-2.847 3.55-2.847c.586 0 1.294.04 1.663.114c0-.637-.54-1.728-1.9-1.728c-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416c0 .878 1.043 1.168 1.6 1.168c1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161"
                            />
                        </svg>
                    </div>
                </div> -->
                </div>
            </div>

            <div class="block1 mt-20 pl-10">
                <div class="name-title">Products</div>
                <ul>
                    <a href="#">
                        <li>Exchange</li>
                    </a>
                    <a href="#">
                        <li>Mobile</li>
                    </a>
                    <a href="#">
                        <li>Derivatives</li>
                    </a>
                    <a href="#">
                        <li>Active Trader</li>
                    </a>
                    <a href="#">
                        <li>Credit card</li>
                    </a>
                    <a href="#">
                        <li>Staking</li>
                    </a>
                    <a href="#">
                        <li>Gemini</li>
                    </a>
                    <a href="#">
                        <li class="mb-10">View All</li>
                    </a>
                </ul>

                <div class="name-title">Institutions</div>
                <ul>
                    <a href="#">
                        <li>Institutions Home</li>
                    </a>
                    <a href="#">
                        <li>Exchange</li>
                    </a>
                    <a href="#">
                        <li>Custody</li>
                    </a>
                    <a href="#">
                        <li>eOTC</li>
                    </a>
                    <a href="#">
                        <li>Businesses and Private Wealth</li>
                    </a>
                    <a href="#">
                        <li>Professional Traders</li>
                    </a>
                    <a href="#">
                        <li>Institutional Investors</li>
                    </a>
                    <a href="#">
                        <li>Fintechs and Banks</li>
                    </a>
                </ul>
            </div>

            <div class="block1 mt-20 pl-10">
                <div class="name-title">Resources</div>
                <ul>
                    <a href="#">
                        <li>Prices</li>
                    </a>
                    <a href="#">
                        <li>Gemini Blog</li>
                    </a>
                    <a href="#">
                        <li>Trust Center</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Cryptopedia</li>
                    </a>
                    <a href="#">
                        <li>Newsroom</li>
                    </a>
                    <a href="#">
                        <li>Videos</li>
                    </a>
                    <a href="#">
                        <li>Product Updates</li>
                    </a>
                    <a href="#">
                        <li>Security</li>
                    </a>
                    <a href="#">
                        <li>Trust and safety</li>
                    </a>
                </ul>
            </div>

            <div class="block1 mt-20 pl-10">
                <div class="name-title">Partners</div>
                <ul>
                    <a href="#">
                        <li>Samsung</li>
                    </a>
                    <a href="#">
                        <li>Trading View</li>
                    </a>
                    <a href="#">
                        <li>Brave</li>
                    </a>
                    <a href="#">
                        <li>Nefty Gateway</li>
                    </a>
                    <a href="#">
                        <li>Referral Program</li>
                    </a>
                    <a href="#">
                        <li>Frontier Fund</li>
                    </a>
                    <a href="#">
                        <li>View All</li>
                    </a>
                </ul>
            </div>

            <div class="block1 mt-20 pl-10">
                <div class="name-title">Company</div>
                <ul>
                    <a href="#">
                        <li>Careers</li>
                    </a>
                    <a href="#">
                        <li>Careers in India</li>
                    </a>
                    <a href="#">
                        <li>Students</li>
                    </a>
                    <a href="#">
                        <li>Support Center</li>
                    </a>
                    <a href="#">
                        <li>Contact Us</li>
                    </a>
                    <a href="#">
                        <li>System Status</li>
                    </a>
                    <a href="#">
                        <li>Areas of Availability</li>
                    </a>
                    <a href="#">
                        <li>API Docs</li>
                    </a>
                    <a href="#">
                        <li>Marketplace and Fees</li>
                    </a>
                    <a href="#">
                        <li>Legal Agreements</li>
                    </a>
                    <a href="#">
                        <li>Privacy Policy</li>
                    </a>
                    <a href="#">
                        <li>User Agreement and State Disclosures</li>
                    </a>
                    <a href="#">
                        <li>Do Not Share My Personal Information</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="footer-bottom cex-container mx-auto flex bg-white">
            <p class="mr-20 mt-[8px] text-xs">© Copyright 2024 Gemini Space Station, LLC or its affiliates.</p>

            <span class="mr-10 mt-[8px] text-xs">NMLS #1518126</span>
            <div>
                <a href="#" class="mb-6 mr-10 text-xs">Legal Notice</a>
            </div>
            <div class="mr-10">
                <p class="mt-[8px] text-xs">
                    This site is protected by reCAPTCHA and the
                    <a href="#" target="_blank" class="text-xs">Google Privacy Policy</a>
                    and
                    <a href="#" target="_blank" class="text-xs">Terms of Service</a> apply.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .block1 {
        width: 20%;
        .listIcon {
            .icon {
                padding: 10px;
                border-radius: 50%;
                background-color: rgb(255, 255, 255);
                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
        .lable {
            width: 100%;
            margin-bottom: 8px;
            font-weight: 500;
            align-self: flex-start;
            min-width: 120px;
            margin-bottom: 12px;
            display: inline-flex;
            font-size: 1.2rem;
        }
        .name-title {
            width: 100%;
            margin-bottom: 8px;
            font-weight: 600;
            align-self: flex-start;
            min-width: 120px;
            margin-bottom: 12px;
            display: inline-flex;
            font-size: 1.1rem;
        }
        .inputEmail {
            color: rgb(1, 3, 4);
            border: 1px solid rgb(1, 3, 4);
            box-sizing: border-box;
            border-radius: 10px;
            background: transparent;
            padding: 8px;
            height: 56px;
            width: 100%;
        }
        .btn {
            background-color: black;
            padding: 20px 40px;
            color: white;
            border-radius: 30px;
        }
        .lable {
            font-weight: 600;
        }
        ul {
            a {
                li {
                    padding: 8px 0;
                    font-size: 1rem;
                }
            }
        }
    }
    .footer-bottom {
        height: 70px;
        display: flex;
        align-items: center;
        border-top: 1px solid #dbdbdb;
        margin-top: 40px;
        .icon-globe {
            padding: 10px;
            border-radius: 50%;
            svg {
                width: 20px;
                height: 20px;
            }
        }
        .el-dropdown-link {
            cursor: pointer;
            color: #409eff;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
        .demonstration {
            display: block;
            color: #8492a6;
            font-size: 14px;
            margin-bottom: 20px;
        }
    }

    .cex-container {
        max-width: 1360px;
    }
</style>
