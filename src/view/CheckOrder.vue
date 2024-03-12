<template>
    <BannerTop :subject-tilte="subjectTilte" :back-list="backList"></BannerTop>
    <section class="checkOrder">
        <div class="container my-6">
            <!-- 進度條 -->
            <div class="row d-flex flex-column align-items-center position-relative">
                <div class="col-7 progress">
                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <ul class="col-8 list-unstyled d-flex justify-content-between position-absolute top-50 start-50 translate-middle">
                    <li class="progressStep bg-danger rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2">1</span>
                    </li>
                    <li class="progressStep bg-secondary rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2">2</span>
                    </li>
                    <li class="progressStep bg-secondary rounded-circle d-flex justify-content-center align-items-center">
                        <span class="h3 text-white pt-2">3</span>
                    </li>
                </ul>
            </div>
            <!--訂單資訊-->
            <div class="row mt-6">
                <div class="col-6">
                    <h3 class="bg-secondary text-light text-center py-3 mb-0">訂單資訊</h3>
                    <div class="bg-table border p-3">
                        <ul class="row d-flex align-items-center text-center border-bottom border-third list-unstyled">
                            <li class="col-3 fw-bold">
                                <p>商品圖片</p>
                            </li>
                            <li class="col-3 fw-bold">
                                <p>商品名稱</p>
                            </li>
                            <li class="col-3 fw-bold">
                                <p>數量</p>
                            </li>
                            <li class="col-3 fw-bold text-center">
                                <p>小計</p>
                            </li>
                        </ul>
                        <ul class="row list-unstyled d-flex align-items-center" v-for="item in carts" :key="item.id">
                            <li class="col-3 text-center">
                                <img :src="item.product.imageUrl" alt="cartPhoto" style="max-width:70px" class="object-fit-cover">
                            </li>
                            <li class="col-3 text-center">
                                {{ item.product.title }}
                            </li>
                            <li class="col-3 text-center">
                                {{ item.qty }} {{ item.product.unit }}
                            </li>
                            <li class="col-3 text-center">
                                {{ item.final_total }}
                            </li>
                        </ul>
                    </div>
                    <div class="bg-table border border-top-0">
                        <div class="d-flex justify-content-between align-items-center py-3 mx-4">
                            <span class="fw-bold text-lg">總金額:</span>
                            <span class="text-danger fw-bolder">NT${{ Final_total }}</span>
                        </div>
                    </div>
                </div>
                <!--顧客資訊-->
                <div class="col-6 mb-5">
                    <h3 class="bg-secondary text-light text-center py-3 mb-0">顧客資訊</h3>
                    <div class="bg-table border justify-content-start p-3">
                        <VeeForm ref="form" class="col-12" v-slot="{ errors }" @submit="createOrder">
                            <div class="mb-4">
                                <label for="email" class="form-label fw-bold">Email:</label>
                                <VeeField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                                        placeholder="請輸入Email" rules="email|required" v-model="form.user.email" autocomplete="off">
                                </VeeField>
                                <Error-message name="email" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="name" class="form-label fw-bold">收件人姓名:</label>
                                <VeeField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                                        placeholder="請輸入姓名" rules="required" v-model="form.user.name" autocomplete="off">
                                </VeeField>
                                <Error-message name="姓名" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="tel" class="form-label fw-bold">收件人電話:</label>
                                <VeeField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                                        placeholder="請輸入電話" :rules="isPhone"  v-model="form.user.tel" autocomplete="off">
                                </VeeField>
                                <Error-message name="電話" class="invalid-feedback"></Error-message>
                            </div>
                            <div class="mb-4">
                                <label for="address" class="form-label fw-bold">收件人地址:</label>
                                <VeeField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                                        placeholder="請輸入地址" rules="required" v-model="form.user.address" autocomplete="off">
                                </VeeField>
                                <Error-message name="地址" class="invalid-feedback"></Error-message>
                            </div>
                            <div>
                                <label for="message" class="form-label fw-bold">留言:</label>
                                <textarea id="message" class="form-control" cols="30" rows="4" v-model="form.message" autocomplete="off"></textarea>
                            </div>
                            <div class="d-flex justify-content-around w-100 mt-3">
                        <button type="submit" class="btn btn-secondary">
                            <routerLink to="/cart" class="text-white text-decoration-none">回購物車</routerLink>
                        </button>
                        <button type="submit" class="btn btn-danger">
                            送出訂單
                        </button>
                    </div>
                        </VeeForm>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';
import BannerTop from '../components/BannerTop.vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: [],
            tempProduct: {},
            carts: {},
            Final_total: 0,
            isLoading: false,
            subjectTilte: '填寫訂單資料',
            backList:  'https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
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
        getProducts() {
            const api =`${VITE_API}/api/${VITE_PATH}/products/all`;
            const vm = this;
            vm.isLoading = true;
                axios.get(api)
                    .then(res => {
                        this.products = res.data.products;
                        vm.isLoading = false;
                        console.log(res.data);
                        console.log(this.Final_total);
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    })
        },
        getCart() {
            const api =`${VITE_API}/api/${VITE_PATH}/cart`;
                axios.get(api)
                    .then(res => {
                        this.carts= res.data.data.carts;
                        this.Final_total = res.data.data.final_total;
                        console.log(this.carts);
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
                    this.$router.push(`/paidorder/${res.data.orderId}`);
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
        Loading,
        Swal,
        BannerTop
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

<style lang="scss" scoped>

.progress {
    &Step {
        width: 50px;
    }
}
</style>
