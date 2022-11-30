<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" v-if="!submitted">
            <form @submit.prevent="savePost">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" v-model="post.title" name="title">
                    <div class="form-text text-danger" v-if="errors && errors.title">{{ errors.title[0] }}</div>
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <input type="text" class="form-control" id="content" v-model="post.content" name="content">
                    <div class="form-text text-danger" v-if="errors && errors.content">{{ errors.content[0] }}</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="row py-5 px-3 rounded form-div" v-else>
            <div class="alert alert-success">Post has been Created Successfully.</div>
        </div>
    </div>
</template>

<script>
import PostService from "../connection/PostService.js";
export default {
    name: "PostStore",
    data() {
        return {
            post: {
                id: null,
                title: "",
                content: "",
                published: false
            },
            submitted: false,
            errors: null
        };
    },
    methods: {
        savePost() {
            const data = {
                title: this.post.title,
                content: this.post.content
            };

            PostService.store(data)
                .then(response => {
                    this.post.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    // console.log(e.response.data);
                    if (e.response.data.errors){
                        console.log(e.response.data.errors);
                        this.errors = e.response.data.errors;
                    }
                });
        },
    }
}
</script>

<style scoped>
.form-div{
    background-color: white; width: 50%; margin: auto;
}
</style>
