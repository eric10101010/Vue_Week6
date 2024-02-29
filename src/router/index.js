import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    //前台
    {
      path: '/',
      component: () => import('../view/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../view/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../view/AboutView.vue'),
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('../view/ProductsView.vue'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('../view/CartView.vue'),
        },
      ],
    },
    //登入頁
    {
      path: '/login',
      component: () => import('../view/LoginView.vue'),
    },
    //後台
    {
      path: '/admin',
      component: () => import('../view/DashBoard/DashBoardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../view/DashBoard/ProductsView.vue'),
        },
        {
          path: 'order',
          component: () => import('../view/DashBoard/OrderView.vue'),
        }
      ],
    },
  ]
})

export default router

