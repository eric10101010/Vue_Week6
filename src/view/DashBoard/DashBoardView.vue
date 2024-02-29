<template>
    <h2 class="text-danger">這是後台</h2>
    <nav>
        <RouterLink to="/products">Products</RouterLink> |
        <RouterLink to="/cart">Order</RouterLink> |
        <RouterLink to="/">回到前台</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>


<script>
import axios from 'axios'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
    data() {
        return {
            productsList: [],
            tempProduct: {}
        }
    },
    methods: {
        checkUser() {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("hexToken="))
                ?.split("=")[1];
            axios.defaults.headers.common['Authorization'] = token;
            
            axios.post(`${VITE_API}/api/user/check`, null)
                .then(() => {
                    // console.log(res.data);
                })
                .catch(err => {
                    console.dir(err);
                    this.$router.push('/login');
                })
        }
    },
    mounted() {
        this.checkUser();
    }
}
</script>
