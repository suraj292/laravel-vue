import {createRouter, createWebHistory} from "vue-router";

// import store from "./connection/store.js";
import {StoreUser} from "@/Store/StoreUser";

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

import PostAll from './Post/Post.vue';
import PostStore from './Post/PostStore.vue';
import PostEdit from './Post/PostEdit.vue';

import Product from "./Product/Product.vue";
import ProductStore from "./Product/ProductStore.vue";
import ProductEdit from "./Product/ProductEdit.vue";

import Login from './User/login.vue';

const routes = [
    {
        path:'',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About,
        // meta: {Auth: true}
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact,
        // meta: {Auth: true}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {Auth: false}
    },
    {
        path:'/post',
        children: [
            { path: "", name:'Post', component: PostAll },
            { path: "store", name:'post store', component: PostStore },
            { path: "edit/:postId", name:'post-edit', component: PostEdit }
        ],
        meta: {Auth: true}
    },
    {
        path:'/Product',
        children: [
            { path: "", name:'product', component: Product },
            { path: "store", name:'productStore', component: ProductStore },
            { path: "edit/:postId", name:'product_edit', component: ProductEdit }
        ],
        meta: {Auth: true}
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    // const Auth = localStorage.getItem('token')
    if (to.meta.Auth === false && StoreUser().token) {
        next('')
    }
    if (to.meta.Auth && !StoreUser().token) {
        next('Login');
    } else {
        next();
    }
});

export default router;
