import {createRouter, createWebHistory} from "vue-router";

import Home from './componrnts/Home.vue';
import About from './componrnts/About.vue';
import Contact from './componrnts/Contact.vue';

const routes = [
    {
        path:'/',
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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
