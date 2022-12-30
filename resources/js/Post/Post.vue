<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" style="background-color: white; width: 60%; margin: auto;">
            <div class="alert alert-success" v-if="deleteSuccess">Post has been deleted.</div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">content</th>
                    <th scope="col">Edit / Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post, index) in posts" :key="index" >
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                    <td>
                        <router-link class="btn btn-sm btn-primary mx-1" :to="`/post/edit/${post.id}`">Edit</router-link>
                        <button class="btn btn-sm btn-danger mx-1" @click="postDelete(post.id)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Post from "../connection/PostService";
import PostStore from "./PostStore.vue";
import User from "../connection/UserService";
export default {
    name: "Post",
    components: {PostStore},
    data() {
        return {
            posts: [],
            deleteSuccess: null,
            user: ''
        }
    },
    methods: {
        getPosts() {
            Post.getAll()
                .then(response => {
                    this.posts = response.data.post;
                    // console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        postDelete($id){
            Post.delete($id)
                .then(response => {
                    this.getPosts()
                    this.deleteSuccess = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        getUser(){
            User.get()
                .then(response => {
                    this.user = response.data
                    console.log(this.user)
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.getPosts()
        this.getUser()
    }
}
</script>

<style scoped>
.form-div{
    background-color: white; width: 50%; margin: auto;
}
</style>
