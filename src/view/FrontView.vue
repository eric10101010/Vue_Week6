<template>
    <nav class="bg-primary d-flex justify-content-between align-items-center py-3">
        <ul class="header d-flex list-unstyled mt-3">
            <li class="mx-3 headerItem">
                <RouterLink to="/" class="text-white text-decoration-none h3">首頁</RouterLink>
            </li>
            <li class="me-3 headerItem">
                <RouterLink to="/about" class="text-white text-decoration-none h3">關於我們</RouterLink> 
            </li>
            <li class="me-3 headerItem">
                <RouterLink to="/products" class="text-white text-decoration-none h3">產品列表</RouterLink> 
            </li>
            <li class="me-3 headerItem">
                <RouterLink to="/cart" class="text-white text-decoration-none h3">購物車</RouterLink>
            </li>
        </ul>
        <ul class="me-3 list-unstyled mt-3">
            <li class="headerItem">
                <RouterLink to="/login" class="text-white text-decoration-none h3">登入頁</RouterLink>
            </li>
        </ul>

    </nav>
    <RouterView></RouterView>
</template>


<style lang="scss">
    .header {
        &Item {
            &:hover {
                opacity: .7;
                transition: .3s;
            }
        }
    }
</style>