import {createRouter, createWebHistory} from "vue-router";

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import PostAll from './Post/Post.vue';
import PostStore from './Post/PostStore.vue';
import PostEdit from './Post/PostEdit.vue';

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
        path:'/post',
        name:'post',
        component:PostAll
    },
    {
        path:'/post/store',
        name:'post store',
        component:PostStore
    },
    {
        path:'/post/edit/:postId',
        name:'post-edit',
        component:PostEdit
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
