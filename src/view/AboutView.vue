<template>
    <h2 class="text-danger">About</h2>
    <VForm>
    <VField
        name="email"
        type="email"
        rules="required|email"
        />
        <ErrorMessage name="email"/>
    </VForm>
</template>
