<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <!-- breadcrumb -->
    <!-- <BreadCrumb :breadcrumb-name="breadcrumbName"></BreadCrumb> -->
    <section class="contactBack">
        <div class="container">
            <ul class="row py-6 mb-0">
                <li class="contactItem col-6 ps-0">
                    <div class="contactPhoto d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1567787899110-e8399c09cbe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80') 50% 45%;">
                        <h3 class="display-5 text-light text-center">Oceanbeats<br>台北館</h3>
                        <div class="contactText text-left py-4 px-5">
                            <p class="py-2 h3">地點:台北市大安區復興南路二段202號</p>
                            <p class="py-2 h3">電話：(02)2266-2188</p>
                            <p class="py-2 h3">營業時間：週一至週日10:00~21:00</p>
                        </div>
                    </div>
                </li>
                <li class="contactMap col-6 pe-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.174076873652!2d121.54138231633563!3d25.028165844676465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzQxLjQiTiAxMjHCsDMyJzM2LjkiRQ!5e0!3m2!1szh-TW!2stw!4v1619939605303!5m2!1szh-TW!2stw"
                            width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" style="border: 0px;">
                    </iframe>
                </li>
            </ul>
            
            <ul class="row pb-6 mb-0">
                <li class="contactMap col-6 px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.2111658086787!2d120.64233391634967!3d24.164325978751187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8cea6a6b63%3A0xafd8ce8af60532e9!2zNDA35Y-w5Lit5biC6KW_5bGv5Y2A5Y-w54Gj5aSn6YGT5LiJ5q61MjUx6Jmf6Jmf!5e0!3m2!1szh-TW!2stw!4v1628666284446!5m2!1szh-TW!2stw"
                                width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" style="border: 0px;">
                    </iframe>
                </li>
                <li class="contactItem col-6">
                    <div class="contactPhoto d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80') 65% 10%;">
                        <h3 class="display-5 text-light text-center">Oceanbeats<br>台中館</h3>
                        <div class="contactText text-left py-4 px-5">
                            <p class="py-2 h3">地點:台中市西屯區台灣大道三段251號</p>
                            <p class="py-2 h3">電話：(04)2433-6688</p>
                            <p class="py-2 h3">營業時間：週一至週日10:00~21:00</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import BannerTop from '../components/BannerTop.vue';
import BreadCrumb from '../components/BreadCrumb.vue';

export default {
    data() {
        return {
            subjectTilte: '聯絡資訊',
            breadcrumbName:'聯絡資訊',
            backList:  'https://plus.unsplash.com/premium_photo-1709311438052-9c3f5f867b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
        }
    },
    components: {
        BannerTop,
        BreadCrumb
    }
}

</script>

<style lang="scss" scoped>
.contact {
    &Back {
        background-image: url("https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80");
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &Item {
        position: relative;
        overflow: hidden;
        height: 480px;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
            .contactText {
                opacity: 1;
                visibility: visible;
                transform: translateY(0%);
            }
        }
    }
    &Photo {
        transition: 1s ease-in-out;
        content: '';
            position: absolute;
            width: 100%;
            height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    &Text {
        position: absolute;
        bottom: 0;
        z-index: 1;
        background-color: rgba(2, 2, 2, 0.5);
        opacity: 0.8;
        visibility: hidden;
        transform: translateY(50%);
        transition: 0.3s ease-in-out;
        width: 100%;
        color: #fff;
        text-align: center;
    }
    &Map {
        height: 480px;
    }
}
</style>