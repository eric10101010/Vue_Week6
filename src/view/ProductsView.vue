<template>
    <div class="container">
        <loading v-model:active="isLoading">
            <div class="loadingio-spinner-spin-pqarappzpn"><div class="ldio-eviqoo58lam">
            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div></div>
        </loading>
        <div class="mt-4">
        <!-- 種類側欄 -->
            <div class="col-lg-3 col-md-3 col-12 mb-4 mb-md-0">
                <ul class="side-bar list-group">
                    <li class="list-group-item border border-third" v-for="(item, key, index) of category" :key="index"
                        :class="{ 'active': choose === key }" @click="catelogClick(key)">
                        <p class="text-center mb-0">{{ key }}（{{ item }}）</p>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 col-md-9 col-12">
                <ul class="row list-unstyled">
                    <li class="col-12 col-md-6 col-lg-4 mb-5 px-2" v-for="product in products" :key="product.id" >
                        <!-- 產品容器 -->
                        <div class="productList card">
                            <!-- 1.分類tag -->
                            <span class="badge bg-primary text-white">
                                {{ product.category }}
                            </span>
                            <!-- 2.產品圖片 -->
                            <div class="productPhoto">
                                <div
                                style="
                                height: 100px;
                                background-size: cover;
                                background-position: center;
                                "
                                :style="{
                                    backgroundImage : `url(${product.imageUrl})`
                                }"
                            ></div>
                            </div>
                            <div class="card-body">
                                <!-- 4.產品名稱 -->
                                <div class="product-title">
                                    <h5 class="text-center mb-2 fw-bolder" style="font-size:22px">
                                        {{ product.title }}
                                    </h5>
                                </div>
                                <!-- 5.價錢+購物車 -->
                                <div class="cart-box">
                                    <ul class="d-flex justify-content-center align-items-center">
                                        <li class="text-third text-decoration-line-through " style="font-size:14px">
                                            NT {{ product.origin_price }}
                                        </li>
                                        <li class="text-danger fw-bolder px-3" style="font-size:20px">
                                            NT {{ product.price }}
                                        </li>
                                    </ul>
                                    <div class="add-btn mt-2 text-center d-flex align-items-center justify-content-center ">
                                        <button class="bg-secondary px-5" style="font-size:20px">
                                            <span class="text-light"><i class="bi bi-cart pe-3"></i>加入購物車</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
            <!-- <table class="table align-middle">
                <thead>
                    <tr>
                        <th>圖片</th>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td style="width: 200px">
                            <div
                                style="
                                height: 100px;
                                background-size: cover;
                                background-position: center;
                                "
                                :style="{
                                    backgroundImage : `url(${product.imageUrl})`
                                }"
                            ></div>
                        </td>
                        <td>{{ product.title }}</td>
                        <td>
                            <div class="h5" v-if="product.origin_price === product.price">{{ product.price }} 元</div>
                            <div class="div" v-else>
                                <del class="h6">原價 {{ product.original_price }} 元</del>
                                <div class="h5">現在只要 {{ product.price }} 元</div>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group btn-group-sm">
                                <button type="button" class="btn btn-outline-secondary" @click="openModal(product)">
                                    <i class="fas fa-spinner fa-pulse"></i>
                                    查看更多
                                </button>
                                <button type="button" class="btn btn-outline-danger" 
                                :disabled="product.id === status.addCartLoading"
                                @click="addCart(product.id)">
                                <span class="spinner-border spinner-border-sm text-danger" role="status" v-if="product.id === status.addCartLoading">
                                </span>
                                    加到購物車
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table> -->
        </div>
    </div>
    <ProductModal :temp-product="tempProduct" :add-cart="addCart" ref="ProductModal"></ProductModal>
</template>

<script>

import axios from 'axios';
import ProductModal from '../components/ProductModal.vue';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env


export default {
    data() {
        return {
            products: [],
            tempProduct: {},
            carts: {},
            isLoading: false,
            category: {},
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            status: {
                addCartLoading: '',
                cartQtyLoading: ''
            }
        }
    },
    methods: {
        calculateCategories () {
            this.category['全部商品'] = this.products.length
            this.products.forEach(item => {
                const cate = item.category
                    if (!(cate in this.category)) {
                        this.category[cate] = 1
                    } else {
                        this.category[cate]++
                    }
            })
            console.log(this.category)
        },
        catelogClick (key) {
            this.choose = key
            console.log(this.filterProducts)
        },
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
            vm.isLoading = true;
                axios.get(api)
                    .then(res => {
                        this.products = res.data.products;
                        vm.isLoading = false;
                        this.calculateCategories();
                        // console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    })
        },
        openModal(product) {
            this.tempProduct = product;
            console.log(product);
            this.$refs.ProductModal.openModal();
        },
        addCart(product_id, qty = 1) {
            const order = {
                product_id,
                qty,
            };
            this.status.addCartLoading = product_id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.post(api, {data: order})
                    .then(res => {
                        const name = res.data.data.product.title;
                        this.status.addCartLoading = '';
                        Swal.fire({
                                title: `成功加入 ${name} 到購物車`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                        this.$refs.ProductModal.hideModal();
                    })
                    .catch(err => {
                        console.log(err.res.data);
                        Swal.fire({
                                title: `加入購物車失敗`,
                                icon: 'error',
                                confirmButtonText: '確認'
                        })
                    });
        },
        getCart() {
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.get(api)
                    .then(res => {
                        this.carts = res.data.data;
                        // console.log(this.carts.carts);
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
        },
        editCart(item, qty = 1) {
            const order = {
                product_id: item.product.id,
                qty,
            };
            this.status.cartQtyLoading = item.id;
            const api =`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`;
                axios.put(api, {data: order})
                    .then(res => {
                        // console.log(res);
                        this.status.cartQtyLoading = '';
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
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
        delCartAll() {
            const api =`${VITE_API}/api/${VITE_PATH}/carts`;
                axios.delete(api)
                    .then(res => {
                        // console.log(res);
                        Swal.fire({
                                title: `成功清空購物車`,
                                icon: 'success',
                                confirmButtonText: '確認'
                        })
                        this.getCart();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
        },
        createOrder() {
            // this.isLoading = true;
            const api =`${VITE_API}/api/${VITE_PATH}/order`;
            const order = this.form;
                axios.post(api, { data: order }).then((res) => {
                    // this.$router.push(`/user/checkout/${response.data.orderId}`);
                    this.$refs.form.resetForm();
                    this.getCart();
                    // this.isLoading = false;
            }).catch((err) => {
                console.dir(err);
            });
        },
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        }
    },
    components: {
        ProductModal,
        Loading,
        Swal
    },
    computed: {
        checkData() {
            const attrs = ['name', 'email', 'tel', 'address'];
            return attrs.every((item) => this.form.user[item] !== '');
        },
    },
    mounted() {
        this.getProducts();
        this.getCart();
    }
}
</script>

<style type="text/css">
    @keyframes ldio-eviqoo58lam {
        0% {
            opacity: 1;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1.5,1.5);
        } 100% {
            opacity: 0;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1,1);
        }
    }
    .ldio-eviqoo58lam div > div {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #3e6d8d;
        animation: ldio-eviqoo58lam 1s linear infinite;
    }.ldio-eviqoo58lam div:nth-child(1) > div {
        left: 148px;
        top: 88px;
        animation-delay: -0.875s;
    }
    .ldio-eviqoo58lam > div:nth-child(1) {
        transform: rotate(0deg);
        transform-origin: 160px 100px;
    }.ldio-eviqoo58lam div:nth-child(2) > div {
        left: 130px;
        top: 130px;
        animation-delay: -0.75s;
    }
    .ldio-eviqoo58lam > div:nth-child(2) {
        transform: rotate(45deg);
        transform-origin: 142px 142px;
    }.ldio-eviqoo58lam div:nth-child(3) > div {
        left: 88px;
        top: 148px;
        animation-delay: -0.625s;
    }
    .ldio-eviqoo58lam > div:nth-child(3) {
        transform: rotate(90deg);
        transform-origin: 100px 160px;
    }.ldio-eviqoo58lam div:nth-child(4) > div {
        left: 46px;
        top: 130px;
        animation-delay: -0.5s;
    }
    .ldio-eviqoo58lam > div:nth-child(4) {
        transform: rotate(135deg);
        transform-origin: 58px 142px;
    }.ldio-eviqoo58lam div:nth-child(5) > div {
        left: 28px;
        top: 88px;
        animation-delay: -0.375s;
    }
    .ldio-eviqoo58lam > div:nth-child(5) {
        transform: rotate(180deg);
        transform-origin: 40px 100px;
    }.ldio-eviqoo58lam div:nth-child(6) > div {
        left: 46px;
        top: 46px;
        animation-delay: -0.25s;
    }
    .ldio-eviqoo58lam > div:nth-child(6) {
        transform: rotate(225deg);
        transform-origin: 58px 58px;
    }.ldio-eviqoo58lam div:nth-child(7) > div {
        left: 88px;
        top: 28px;
        animation-delay: -0.125s;
    }
    .ldio-eviqoo58lam > div:nth-child(7) {
        transform: rotate(270deg);
        transform-origin: 100px 40px;
    }.ldio-eviqoo58lam div:nth-child(8) > div {
        left: 130px;
        top: 46px;
        animation-delay: 0s;
    }
    .ldio-eviqoo58lam > div:nth-child(8) {
        transform: rotate(315deg);
        transform-origin: 142px 58px;
    }
    .loadingio-spinner-spin-pqarappzpn {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: transparent;
    }
    .ldio-eviqoo58lam {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio-eviqoo58lam div { box-sizing: content-box; }
</style>