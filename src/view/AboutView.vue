<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <!-- breadcrumb -->
    <!-- <BreadCrumb :breadcrumb-name="breadcrumbName"></BreadCrumb> -->
    <!-- About -->
    <section class="aboutBack">
        <div class="container-fluid">
            <ul class="row mb-0 list-unstyled py-6">
                <li class="col-5 d-flex justify-content-center gx-0">
                    <img src="../assets/about.jpg" alt="" class="object-fit-cover w-100">
                </li>
                <li class="col-7 text-white text-center">
                    <h2 class="display-5 fw-bolder pt-5 pb-0">Oceanbeats</h2>
                    <p class="pb-0 h5" style="line-height:3.5rem;">
                                Oceanbeats理念是全力以赴，不斷自我挑戰<br />
                                讓用戶在使用時能有最好的聽感體驗。<br />
                                專注打造出最純粹，最頂級的音質，<br />
                                為您呈現音樂本質是Oceanbeats的使命，<br />
                                讓您享有舒適的配戴體驗更是我們的榮幸。
                    </p>
                </li>
            </ul>
            <ul class="row aboutInfor list-unstyled mb-0 d-flex justify-content-evenly">
                <li class="aboutInforItem col-3 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white w-100 border">
                        <h3 class="h2 fw-bold">核心技術</h3>
                        <p>QCC514X晶片高速及時運算，降低延遲，</p>
                        <p>ANC主動降噪技術精準抵消外界噪音，</p>
                        <p>最新版藍牙5.2，支援SBC、AAC音頻解碼。</p>
                    </div>
                </li>
                <li class="aboutInforItem col-3 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white w-100 border">
                        <h3 class="h2 fw-bold">專業服務</h3>
                        <p>Oceanbeat提供完整的產品售後服務</p>
                        <p>即時處理用戶遭遇問題，給予即時協助。</p>
                        <p>包括產品使用諮詢，產品維修諮詢。</p>
                    </div>
                </li>
                <li class="aboutInforItem col-3 text-center d-flex align-items-center justify-content-center">
                    <div class="aboutInforText text-white w-100 border">
                        <h3 class="h2 fw-bold">核心技術</h3>
                        <p>QCC514X晶片高速及時運算，降低延遲，</p>
                        <p>ANC主動降噪技術精準抵消外界噪音，</p>
                        <p>最新版藍牙5.2，支援SBC、AAC音頻解碼。</p>
                    </div>
                </li>
            </ul>
            <ul class="row mb-0 list-unstyled py-6 d-flex flex-row-reverse">
                <li class="col-5 d-flex justify-content-center gx-0">
                    <img src="../assets/about.jpg" alt="" class="object-fit-cover w-100">
                </li>
                <li class="col-7 text-white text-center">
                    <h2 class="display-5 fw-bolder pt-5 pb-0">Oceanbeats</h2>
                    <p class="pb-0 h5" style="line-height:3.5rem;">
                                Oceanbeats理念是全力以赴，不斷自我挑戰<br />
                                讓用戶在使用時能有最好的聽感體驗。<br />
                                專注打造出最純粹，最頂級的音質，<br />
                                為您呈現音樂本質是Oceanbeats的使命，<br />
                                讓您享有舒適的配戴體驗更是我們的榮幸。
                    </p>
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
            subjectTilte: '關於我們',
            breadcrumbName:'關於我們',
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
.about {
    &Back {
        background-image: url("https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80");
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &Infor {
        &Item {
            background: url("https://i.imgur.com/34gNpiJ.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: 250px;
            img {
                max-width: 100%;

            }
        }
        &Text {
            background-color: rgba(0, 0, 0, 0.7);
        }

    }
}
</style>
