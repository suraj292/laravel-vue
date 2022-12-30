<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="store.getters.getToken.token">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Post
                        </a>
                        <ul class="dropdown-menu">
                            <router-link class="dropdown-item" to="/post">Post All</router-link>
                            <router-link class="dropdown-item" to="/post/store">Post Create</router-link>
<!--                            <router-link class="dropdown-item" to="/post/edit/:postId">Post edit</router-link>-->
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
                    </li>
                    <li class="nav-item" v-if="!store.getters.getToken.token">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="store.getters.getToken.token">
                        <span class="nav-link active" @click="logout" style="cursor: pointer">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
import store from "./connection/store";

export default {
    name: "App",
    computed: {
        store() {
            return store
        }
    },
    data() {
        return {
            Auth: null,
        }
    },
    methods:{
        logged(){

        },
        logout(){
            store.dispatch('removeToken')
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style scoped>

</style>
