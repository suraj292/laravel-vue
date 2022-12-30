<template>
    <div class="mx-auto p-5" style="width: 50%; background-color: white; margin: 25px">
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="email">
                <div class="form-text text-danger">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                <div class="form-text text-danger">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import http from "../connection/http-common.js";
import store from "../connection/store.js";
export default {
    name: "login",
    data(){
        return {
            email: "",
            password: "",
            errors: "",
        }
    },
    methods: {
        login(){
            const data = {
                email: this.email,
                password: this.password
            };
            http.post('/login', data)
                .then(res => {
                    // store.state.user.token = res.data.token
                    localStorage.setItem('token', res.data.token);
                    this.$emit('Auth')
                    this.$router.push("/post")
                    console.log(res.data.token)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
