<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" v-if="!submitted">
            <form @submit.prevent="updateProduct" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" v-model="product.title">
                    <div class="form-text text-danger" v-if="errors && errors.title">{{ errors.title[0] }}</div>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" class="form-control" id="image" name="image" ref="fileInput" @change="imageUpload">
                    <div class="form-text text-danger" v-if="errors && errors.image">{{ errors.image[0] }}</div>
                    <div class="image-parent p-3" >
                        <img v-bind:src="url" alt="image">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" name="price" v-model="product.price">
                    <div class="form-text text-danger" v-if="errors && errors.price">{{ errors.price[0] }}</div>
                </div>
                <div class="mb-3">
                    <label for="offer" class="form-label">Offer</label>
                    <input type="text" class="form-control" id="offer" name="offer" v-model="product.offer">
                    <div class="form-text text-danger" v-if="errors && errors.offer">{{ errors.offer[0] }}</div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        <div class="row py-5 px-3 rounded form-div" v-else>
            <div class="alert alert-success">Product has been Created Successfully.</div>
        </div>
    </div>
</template>

<script>
import ProductService from "@/connection/ProductService";
export default {
    name: "ProductEdit",
    data() {
        return {
            productId: this.$route.params.postId, // getting dynamic id from url
            product: [],
            file: null,
            url: '',
            submitted: false,
            errors: null
        };
    },
    methods: {
        showProduct(){
            ProductService.get(this.productId)
                .then(res => {
                    this.product.title = res.data.Product.title
                    this.url = window.location.origin + '/' + res.data.Product.image
                    this.product.price = res.data.Product.price
                    this.product.offer = res.data.Product.offer
                    // console.log(this.$refs.fileInput.files[0].name)
                })
                .catch(err => {
                    console.log(err.errors)
                })
        },
        imageUpload(){
            this.file = this.$refs.fileInput.files[0];
            // console.log(this.$refs.fileInput.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(this.file)
            reader.onload = (e) => {
                this.url = e.target.result;
            }
        },
        updateProduct(){
            let data = new FormData();
            data.append('_method', 'PUT')
            data.append('title', this.product.title);
            if (this.file) {
                data.append('image', this.file);
            }
            data.append('price', this.product.price);
            data.append('offer', this.product.offer);
            ProductService.update(this.productId, data, {headers: {'Content-Type': 'multipart/form-data'}})
                .then()
                .catch()
        }
    },
    mounted() {
        this.showProduct()
    }
}
</script>

<style scoped>
.form-div{
    background-color: white; width: 80%; margin: auto;
}
.image-parent{
    width: 50%;
}
.image-parent img{
    width: 70%;
}
</style>
