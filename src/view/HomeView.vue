<template>
    <!---首頁區塊1-banner--->
    <div class="indexBanner container-fluid d-flex align-items-center justify-content-center">
        <div class="row indexBannerBox text-white">
            <div class="col-12 text-center">
                <h2 class="pt-4">Oceanbeats</h2>
                <h2 class="typing px-4">『專注聽覺深度沉浸體驗』</h2>
                <div class="h4 py-4 text-center">
                    <router-link to="/products" class="fw-bolder text-decoration-none p-2 px-4 btn btn-outline-secondary">
                        <span class="px-2 ">由此前往選購</span>
                        <i class="bi bi-caret-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!---首頁區塊2-品牌介紹--->
    <div class="indexAbout container my-6">
        <ul class="row list-unstyled mb-0">
            <li class="col-6 gx-0">
                <img class="object-fit-cover w-100" src="https://images.unsplash.com/photo-1709238811517-78ec0ad8406c?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="aboout-1">
            </li>
            <li class="col-6 d-flex flex-column justify-content-center text-center px-4">
                <h3 class="pb-4 fw-bolder">品牌願景</h3>
                <p>Oceanbeats願產品能夠提供頂級的音質與最舒適的佩戴體驗，<br>
                致力於降躁科技的開發研究，加上配戴舒適度調整改良，<br>
                當使用者戴上Oceanbeats耳機後便可於音樂世界中盡情遨遊。</p>
            </li>
        </ul>
        <ul class="d-flex flex-row-reverse list-unstyled">
            <li class="abouotPhoto col-6 gx-0">
                <img class="object-fit-cover w-100" src="https://images.unsplash.com/photo-1709238811517-78ec0ad8406c?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="aboout-1">
            </li>
            <li class="col-6 d-flex flex-column justify-content-center text-center px-4">
                <h3 class="pb-4 fw-bolder">品牌願景</h3>
                <p>Oceanbeats願產品能夠提供頂級的音質與最舒適的佩戴體驗，<br>
                致力於降躁科技的開發研究，加上配戴舒適度調整改良，<br>
                當使用者戴上Oceanbeats耳機後便可於音樂世界中盡情遨遊。</p>
            </li>
        </ul>

    </div>
    <!---首頁區塊3-產品分類--->
    <div class="indexCatelogBack container-fluid d-flex align-items-center justify-content-center">
        <ul class="row list-unstyled gx-0 mt-3">
            <li class="indexCatelogItem change mx-2">
                <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=60');">
                    <div class="contents">
                        <router-link to="/products?category=有線耳機" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                            有線耳機
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/UHUqSwd.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=有線耳機" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                            有線耳機
                        </router-link>
                    </div>
                </div>
            </li>
            <li class="indexCatelogItem change mx-2">
                <div class="rotate-one" style="background-image: url('https://i.imgur.com/xtSWZJu.jpg');">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳機" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                            藍芽耳機
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://images.unsplash.com/photo-1606400082792-fe14743a8e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳機" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                            藍芽耳機
                        </router-link>
                    </div>
                </div>
            </li>
            <li class="indexCatelogItem change mx-2">
                <div class="rotate-one" style="background-image: url('https://i.imgur.com/MyRVJ7R.jpg'); background-position: 50% 50%">
                    <div class="contents">
                        <router-link to="/products?category=有線耳罩" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                            有線耳罩
                        </router-link>>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/gsPBD5L.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=有線耳罩" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                            有線耳罩
                        </router-link>
                    </div>
                </div>
            </li>        
            <li class="indexCatelogItem change mx-2">
                <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=60');  background-position: 35% 50%">
                    <div class="contents"          >
                        <router-link to="/products?category=藍芽耳罩" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                            藍芽耳罩
                        </router-link>
                    </div>
                </div>
                <div class="rotate-two" style="background-image: url('https://i.imgur.com/8BbcyqU.jpg'),linear-gradient(to right,#00000070,#00000070);">
                    <div class="contents">
                        <router-link to="/products?category=藍芽耳罩" class="text-decoration-none text-light text-center h3 py-1 px-3 border border-light">
                            藍芽耳罩
                        </router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <!---首頁區塊4-產品輪播--->
    <div class="container my-6">
        <swiper
            :slides-per-view="3"
            :space-between="20"
            :loop="true"
            :autoplay="autoplay"
            :loopFillGroupWithBlank="true"
            :navigation="true" :lazy="true"
            :breakpoints="{
                320: {
                slidesPerView: 1,
                spaceBetween: 0
                },
                480: {
                slidesPerView: 2,
                spaceBetween: 20
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 20
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 20
                }
            }"
            >
            <swiper-slide  v-for="item in hotSales" :key="item.id">
                <div class="indexSalesList shadow-sm pb-2 mb-1 bg-body rounded">
                    <div class="d-flex">
                        <router-link :to="`/product/${item.id}`" class="position-relative object-fit-cover">
                            <img :src="item.imageUrl" alt="hot-sale-photo"
                                    class="card-img-top"
                                    style="min-height:200px;min-width:200px;"
                            >
                            <div class="indexSalesView position-absolute">
                                <span class="h5"><i class="bi bi-search me-2"></i>查看商品</span>
                            </div>
                        </router-link>
                    </div>
                    <ul class="list-undtyled mt-4">
                        <li class="d-flex align-items-center">
                            <div class="fw-bolder badge bg-secondary me-1">
                                <span>
                                    {{ item.category }}
                                </span>
                            </div>
                            <div class="fw-bolder">
                                <span class="h4">
                                    {{ item.title }}
                                </span>
                            </div>
                        </li>
                        <li class="d-flex justify-content-start mx-3 mt-2">
                            <div class="card-text text-third text-decoration-line-through">
                                <small class="me-1">原價</small>
                                <span>NT {{ item.origin_price }}</span>
                            </div>
                            <div class="card-text price mb-2">
                                <span class="me-1">特價:</span>
                                <span class="fw-bolder text-danger">NT{{ item.price }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!---首頁區塊5-訂閱--->
    <div class="indexSubscribe d-flex align-items-center justify-content-center">
        <div class="indexSubscribeBox px-4 pt-3 pb-4 w-100">
            <div class="text-white" :class="show ? '' : 'd-none d-md-none'">
                <h3>現在訂閱電子報</h3>
                <h3>即可獲得8折優惠劵!</h3>
            </div>
            <!--Pc+Pad-->
            <VeeForm class="g-0" :class="show ? '' : 'd-none d-md-none'"
                    v-slot="{ errors }" @submit="sendSubmit" id="subscribe">
                <div class="d-flex">
                    <VeeField  type="email" id="email" name="Email"
                            class="form-control w-75 d-lg-block " :class="{ 'is-invalid': errors['Email'] }"
                            :disabled="idDisabled" placeholder="name@mail.com" rules="email|required"
                            inputmode="email" v-model="email">
                    </VeeField>
                    <button type="submit" class="btn btn-primary text-white w-25 h-50" :disabled="idDisabled" @submit="sendSubmit">
                        訂閱
                    </button>
                </div>
            </VeeForm>
            <!--優惠卷-->
            <div class="text-white fade text-center" v-if="email" ref="done">
                <h4 class="mb-1 mt-3">
                    <span class="text-primary">{{ email }}</span>
                </h4>
                <h4 class="text-white px-2 mb-3">已成功訂閱電子報</h4>
                <ul class="list-unstyled d-flex align-items-center justify-content-center">
                    <li>
                        <p class="mx-2 h4">8折優惠劵:</p>
                        <p class="h5" >
                            <i class="bi bi-patch-check-fill text-success"></i>
                            ocean2024
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Autoplay])

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data () {
        return {
            show: true,
            idDisabled: false,
            mainProduct: [],
            productsData: [],
            email: '',
            hotSales: [
                {
                    id: '-Me8IdRogwlJlGDNC8Lx',
                    title: 'Whsa-024',
                    category: '藍芽耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1627033055985.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AWfVaeRiqiVs6uPX%2FcZf1ITCi3Wu9L00jJVwE9IxEIBj3rV7E5VWiDo%2B13Cj5dspMIS5qK65yz8CjBBNMVAiLdTkNZGwrcIkzt3Ftnly7R4USCud8pc8TdqVzCYXfglqkEPJVsaDW4ply79XVaJocZXs8N3IshJXuBDkf2EhaF18M%2B%2FUcVC52dzzmo3zh83MHG2%2FdkSmEIA%2BZw1rFNDA5BuPgYEopXE233apanI87b5ijoEMYw23wex%2BZCAp9sR8xt%2BcBXUtxOIRu7NoeDdDtuCS3KJ33xfQC85J1%2BeHQOtj%2Bj4AQYr%2BiMGrW2UNQc6u4prwkumkqFZZCtjqqOVz1g%3D%3D',
                    origin_price: 6000,
                    price: 5000
                },
                {
                    id: '-Me8DcAL4oCP1yFgBOp3',
                    title: 'Whsa-124',
                    category: '藍芽耳罩',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625848362921.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a86GeqR5BY4GX4UJNeK0l4c9a4591Z2RlhVqxibDg%2FnHbweok2hmk%2BITe9%2BXF%2BrWYS2B4Qx%2FPMrq2e4pXHE11GokoYcp%2BraW1b8sGw%2FrCst5SwTOXhZdmH2419egnUptX%2FAcH6hvOvAf4waybNz5NNInZG5y9gk4XKXSe20uL1d0SeoHGpjGIKrVLzRVNXQqEkw9APXD5b%2BoVGZgyqiHa4KkkPSSUPOKZZumAtut9XS6G%2Bl1s6IuS1NWwLyw68gtI2Z6ajtG7%2FwfjOsOBfRGTibsZCbPpRmliDAQCrYF6ZZZLX5rxf%2FoM3TRU1IMRZIgQzoCKrZB9Ccd65LY8Fv0sA%3D%3D',
                    origin_price: 4000,
                    price: 3000
                },
                {
                    id: '-Me8FCubDIljeTPSudXo',
                    title: 'Whsa-085',
                    category: '藍芽耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873767329.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PIb8HYob4ZPOvnBkG4s7f0T%2F%2BIBdhsqJfR3KbMdRCSELz4%2F7BOK%2Bs74LUidx0q0fFZpA%2BU7XolHcILcUeappEWwGS7aixHe8%2BL9jPnt4ZqxtF%2FNY2cqIP4XxQ%2BOTwTAgvtWDXs11O96fJ3pdXpzcZKEnOd5vst25C3ruYC2bL91cldYIi%2BBosFYVkj0nMaVmgonPwIpd%2F5%2BEH37xfmoRSmepWLswc9G4OKu6l29tYBAp2SWkA8KdLFNQTtustfzEitr2xFGy5F%2FoE5OCzrmLO65HkORKi3CVmWxMbonN6nkaKSQrOvTzKBreCnk3twL80QfW7yzFVdZhWbzKtYRqZw%3D%3D',
                    origin_price: 6000,
                    price: 5000
                },
                {
                    id: '-Me8EN4uFnRtPUFWw4bU',
                    title: 'Whsa-002',
                    category: '藍芽耳罩',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625884050628.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BGKq%2FsS9MIzw4eO%2FC%2Fe%2Bwq9zb59cJYO%2F5Ak5gnUiOKag80F0RGQ0MQZcr7a8ZqO%2FvTqsZ%2FOpvzwXbnf4edYgPNlEIPHehMsOJmqcIgdIWQJVBQm0aDY3EjffWjj0XgEmcUjB8dShhVfqwahn6uA8%2BXwmzXOaNJ2Qjh%2BM6xMyN4JcYXZzSOjUBdVLU1ZJ%2FIkwPWLHrQjfmyOeOkvKv%2FR%2B7WVxk2xZEd5nZIyTsEFjg8gCvmn6DlN1yTubvu3I9f89TOSIZQgsKYZEmgWKuDI%2BizvNWO8rt6hzKK8MpZwh5qjyXSDkIOBndAW6gXFiUDZIopbVIbW78ghNjtzK5%2Be9mg%3D%3D',
                    origin_price: 4000,
                    price: 3000
                },
                {
                    id: '-Me8IT2myUwaIEgQQLOg',
                    title: 'Whsa-177',
                    category: '有線耳機',
                    imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873926424.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=akmbNsTmjgQ%2FLtGccjg7sCX4NOn9y%2Fus9Za3GAKNPcp%2F6D92LkgbcweOUxMOk%2FpuE6RGe%2Bvzsaq2%2F7zlr3b%2BMhNfE8Q%2FAIoqfU4kJjbRx6U4mo0MTCIpVCVossNJyBtmh8Pyq%2Bq3Fws1tGW5VrehpTNL3%2FyS8HlDKXQhsdybrffnNpIedDTWnZSOFuChaBifOYX%2FU%2FaPkZny%2B6OyNBDnGdyhoCAhBnTdDU6HvEDiqu%2BVB37w2Gkq%2FeNzq70QaA3QoVnJhNbOvvM5PRYMGgaXlHVbBiTRtxFadZGqYiE%2F%2FcjAMv5pAVfsskwqjKz%2Fz6EuXS6VaO%2FD0kskZfw5TYi5LA%3D%3D',
                    origin_price: 3000,
                    price: 2000
                }
            ],
            autoplay: {
                delay: 2500
            },
        }
    },
    methods: {
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
                axios.get(api)
                    .then(res => {
                        this.products = res.data.products;
                        // vm.isLoading = false;
                        // this.calculateCategories();
                        // console.log(res.data);
                    })
                    .catch(err => {
                        console.dir(err);
                    })
        },
        sendSubmit () {
            this.idDisabled = true
            setTimeout(() => {
                this.idDisabled = false;
                this.$refs.done.classList.add('show');
                this.show = false;
            }, 1500)
        },
    },
    mounted () {
        this.getProducts();
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>


<style lang="scss">
.index {
    &Banner {
        height:50vh;
        background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
        background-position:75% 50%;
        background-size: cover;
        &Box {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
    &Catelog {
        &Back {
            height:40vh;
            background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
            background-position: 80% 50%;
            background-size: cover;
        }
    }
    &Sales {
        &View {
            color: #fff;
            bottom: 0px;
            left: 0;
            right:0;
            top:0px;
            background-color: #000000;
            z-index: 10;
            padding: 8px 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: 0.5s;
            &:hover {
                opacity: .7;
            }
        }
    }
    &Subscribe {
        height:45vh;
        background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
        background-position: 80% 50%;
        background-size: cover;
        &Box {
            max-width: 600px;
            width: 100%;
            max-height: 200px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
}
.change{
    width: 200px;
    height: 200px;
    position: relative;
}
.rotate-one, .rotate-two{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
    perspective: 1000px;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease-in;
}
.change .rotate-two{
    transform: rotateY(180deg);
}
.contents{
    transform: translateZ(100px);
    backface-visibility: hidden;
}
.change:hover .rotate-one{
    transform: rotateY(-180deg);
}
.change:hover .rotate-two{
    transform: rotateY(0deg);
}
.typing {
    width: 450px;
    animation: typing 5s steps(16), blink .8s infinite alternate;
    animation-iteration-count: infinite;
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    font-size: 2em;
    @keyframes typing {
        from {
            width: 0%;
        }
    }
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
    
}
.swiper-button-next, .swiper-button-prev{
    display: none;
}
</style>
