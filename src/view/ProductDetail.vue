<template>
    <div>
        <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
        <!-- 產品細節資訊 -->
        <section class="productInfor">
            <div class="container">
                <ul class="row list-unstyled">
                    <!--商品左側圖片-->
                    <li class="col-6">
                        <div class="px-5">
                            <img :src="product.imageUrl" alt="product-item" class="object-fit-cover" style="max-width:100%">
                        </div>
                    </li>
                    <!--商品右側文字資訊-->
                    <li class="col-6">
                        <div class="py-2" >
                            <h2 class="mb-4 fw-bolder text-start">{{ product.title }}</h2>
                            <h3 class="mb-4 text-start">{{ product.content }}</h3>
                            <div class="d-flex align-items-center justify-content-center">
                                <p class="h5 text-third text-decoration-line-through me-2" v-if="product.price !== product.origin_price">
                                    NT${{ product.origin_price }}
                                </p>
                                <p class="h3 text-danger fw-bolder">
                                    NT${{ product.price }}
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="input-group input-group-sm w-50" >
                                <div class="input-group my-3">
                                    <button type="button" class="border border-primary" @click.prevent="adjustNum('minus')">
                                        -
                                    </button>
                                    <input type="number" id="Number" class="form-control text-center" v-model="cartNum" readonly/>
                                    <button type="button" class="border border-primary" @click.prevent="adjustNum('plus')">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div class="w-50">
                                <button type="button" class="btn btn-outline-danger" 
                                    :disabled="product.id === status.addCartLoading"
                                    @click.prevent="addCart(product.id, qty)">
                                <span class="spinner-border spinner-border-sm text-danger" role="status" v-if="product.id === status.addCartLoading"></span>
                                    加入購物車
                                </button>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </section>
        <!-- tab切換 -->
        <section class="tab">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-lg-6">
                        <ul class="nav nav-tabs py-0" ref="tab" id="myTab" role="tablist">
                            <li class="nav-item w-30 w-md-auto" role="presentation">
                                <button class="nav-link link w-30 active py-3"
                                        id="introduction-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#introduction"
                                        type="button"
                                        role="tab"
                                        aria-controls="introduction"
                                        aria-selected="true"
                                        data-cursor="cursor"
                                >
                                    商品規格
                                </button>
                            </li>
                            <li class="nav-item w-30 w-md-auto" role="presentation">
                                <button class="nav-link link w-30 py-3"
                                        id="notice-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#notice"
                                        type="button"
                                        role="tab"
                                        aria-controls="notice"
                                        aria-selected="false"
                                        data-cursor="cursor"
                                >
                                    注意事項
                                </button>
                            </li>
                            <li class="nav-item w-30 w-md-auto" role="presentation">
                                <button class="nav-link link w-30 py-3"
                                        id="shipping-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#shipping"
                                        type="button"
                                        role="tab"
                                        aria-controls="shipping"
                                        aria-selected="false"
                                        data-cursor="cursor"
                                >
                                    運送問題
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content bg-black-opacity-50 p-5 p-lg-7" id="myTabContent">
                            <div class="tab-pane fade show text-dark active"
                                id="introduction"
                                role="tabpanel"
                                aria-labelledby="introduction-tab"
                            >
                            <ul class="w-75">
                                <li class="pb-2 bg-info">產品型號：{{ product.title }}</li>
                                <li class="pb-2">防水係數：IPX4</li>
                                <li class="pb-2 bg-info">驅動單元：{{ product.drivers }}</li>
                                <li class="pb-2">通訊使用頻段：{{ product.infor }}</li>
                                <li class="pb-2 bg-info">響應範圍：{{ product.fequency }}KHz</li>
                                <li class="pb-2">耳機重量：{{ product.weight }}</li>
                            </ul>
                            </div>
                            <div class="tab-pane fade text-dark"
                                id="notice"
                                role="tabpanel"
                                aria-labelledby="notice-tab"
                            >
                            <ul>
                            <li class="pb-2">實際的尺寸與重量會因配備的不同而有所差異。</li>
                            <li class="pb-2">產品顏色會因網頁呈現而有些許差異，以收到實品為準。</li>
                            <li class="pb-2">規格可能依機型配置而有所改變，產品規格若敘述有誤，請以實物為主。</li>
                            <li>使用前請確實遵從產品說明書內之操作指示及注意事項。</li>
                            </ul>
                            </div>
                            <div class="tab-pane fade text-dark"
                                id="shipping"
                                role="tabpanel"
                                aria-labelledby="shipping-tab"
                            >
                            <ul>
                            <li class="pb-4">運送及其他說明:</li>
                            <li class="pb-2">送貨方式：透過宅配送達。</li>
                            <li class="pb-2">規消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，</li>
                            <li class="pb-2">本公司將取消該筆訂單，並且全額退款。</li>
                            <li>送貨範圍：本島各地各縣市、澎湖部分地區、<br/>
                                金門部分地區（大金門、小金門）、小琉球、馬祖全部地區、綠島。
                            </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'pinia';
import cartStore from '../store/cartStore';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import BannerTop from '../components/BannerTop.vue';

SwiperCore.use([Autoplay]);

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data () {
        return {
            status: {
                addCartLoading: '',
                cartQtyLoading: ''
            },
            product: {},
            products: [],
            subjectTilte: '商品細節',
            backList:  'https://plus.unsplash.com/premium_photo-1709311438052-9c3f5f867b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
            breadcrumbName:'商品細節'
        }
    },
    computed: {
            ...mapState(cartStore, ['carts']),
            ...mapState(cartStore, ['cartNum']),
            ...mapState(cartStore, ['status.addCartLoading']),
            ...mapState(cartStore, ['status.cartQtyLoading']),
        },
    methods: {
        ...mapActions(cartStore, ['getCart']),
        ...mapActions(cartStore, ['addCart']),
        ...mapActions(cartStore, ['adjustNum']),
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
            axios.get(api)
                .then(res => {
                    this.products = res.data.products;
                })
                .catch(err => {
                    console.dir(err);
                })
        },
        getProduct () {
            const ID = this.$route.params.id
            const api =`${VITE_API}/api/${VITE_PATH}/product/${ID}`;
                axios.get(api)
                    .then(res => {
                        // console.log(res)
                        this.product = res.data.product
                    })
                    .catch(err => console.log(err))
        },
        delCartItem(id) {
            this.status.cartQtyLoading = id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart/${id}`;
                axios.delete(api)
                    .then(res => {
                        let message = res.data.message;
                        this.status.cartQtyLoading = '';
                        Swal.fire({
                                title: `商品${message}`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                        Swal.fire({
                                title: `刪除失敗`,
                                icon: 'error',
                                confirmButtonText: '確認'
                        })
                    });
        },
    },
    components: {
        BannerTop,
        Swiper,
        SwiperSlide,
        Swal
    },
    watch: {
        $route () {
            this.getProduct();
        }
    },
    mounted () {
        this.getProduct();
        this.getProducts();
        this.getCart();
    }
}
</script>

<style lang="scss" scoped>
// .products-img{
//     width: 100%;
//     height: 260px;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center 50%;
//     object-fit: cover;
//     transition: all .3s ease-in-out;
//     position: relative;
//     overflow: hidden;
// // }
// .badge{
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     z-index: 2;
// }
</style>