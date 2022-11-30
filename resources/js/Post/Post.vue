<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" style="background-color: white; width: 60%; margin: auto;">
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
                    <th scope="row">{{ 11 }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary mx-1">Edit</button>
                        <button class="btn btn-sm btn-danger mx-1">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Post from "../connection/PostService";
export default {
    name: "Post",
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        getPosts() {
            Post.getAll()
                .then(response => {
                    this.posts = response.data.post;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style scoped>

</style>
