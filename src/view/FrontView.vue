<template>
    <h2>這是前台</h2>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/products">Products</RouterLink> |
        <RouterLink to="/cart">Carts</RouterLink> |
        <RouterLink to="/login">登入頁</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>
