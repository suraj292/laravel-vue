import {createRouter, createWebHistory} from "vue-router";

import store from "./connection/store.js";

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import PostAll from './Post/Post.vue';
import PostStore from './Post/PostStore.vue';
import PostEdit from './Post/PostEdit.vue';
import Login from './User/login.vue';

const routes = [
    {
        path:'',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/contact',
        name:'contact',
        component:Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path:'/post',
        children: [
            { path: "", name:'post', component: PostAll },
            { path: "store", name:'post store', component: PostStore },
            { path: "edit/:postId", name:'post-edit', component: PostEdit }
        ],
        meta: {Auth: true}
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const Auth = localStorage.getItem('token')
    if (to.name !== 'Login' && !Auth) {
        next('Login');
    } else {
        next();
    }
});

export default router;
