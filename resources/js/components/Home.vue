<template>
    <h1 style="color: white">Hello Home</h1>
    <h1 style="color: aliceblue">{{ user }}</h1>
</template>

<script>
import User from "../connection/UserService.js";
export default {
    name: "Home",
    data() {
        return {
            user: null,
        }
    },
    methods:{
        getUser(){
            User.get()
                .then( res => {
                    this.user = res.data
                })
                .catch( err => {
                    console.log(err.data.errors)
                })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>
