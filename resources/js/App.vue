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
                    <li class="nav-item dropdown" v-if="token">
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
                    <li class="nav-item" v-if="!token">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="token">
                        <span class="nav-link active" @click="logout" style="cursor: pointer">Logout</span>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li style="margin-right: 20px; ">Cart: {{ 0 }}</li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
import {StoreUser} from "@/Store/StoreUser";
import {mapState} from "pinia";

export default {
    name: "App",
    computed: {
        ...mapState(StoreUser, ['token'])
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
            // store.dispatch('removeToken')
            StoreUser().removeToken()
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style scoped>

</style>
