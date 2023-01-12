<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" v-if="!submitted">
            <form @submit.prevent="saveProduct" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" v-model="product.title">
                    <div class="form-text text-danger" v-if="errors && errors.title">{{ errors.title[0] }}</div>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
<!--                    <input type="file" class="form-control" id="image" name="image" ref="fileInput" @change="imageUpload">-->
                    <input type="file" class="form-control" id="image" name="image" ref="fileInput" v-on:change="imageUpload">
                    <div class="form-text text-danger" v-if="errors && errors.image">{{ errors.image[0] }}</div>
                    <div class="image-parent">
                        <div id="imagePreview" :style="{'background-image': `url(${url})`}"></div>
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
import ProductService from "../connection/ProductService";
export default {
    name: "ProductStore",
    data() {
        return {
            product: {
                title: "",
                image: "something",
                price: "",
                offer: "",
            },
            file: null,
            url: "https://help4access.com/wp-content/uploads/2020/12/no-image-available-300x199.jpeg",
            submitted: false,
            errors: null
        };
    },
    methods: {
        imageUpload(){
            this.file = this.$refs.fileInput.files[0];
            // console.log(this.$refs.fileInput.files[0])
            let reader = new FileReader()
            reader.readAsDataURL(this.file)
            reader.onload = (e) => {
                this.url = e.target.result;
            }
        },
        saveProduct(){
            let data = new FormData();
            data.append('title', this.product.title);
            data.append('image', this.file);
            data.append('price', this.product.price);
            data.append('offer', this.product.offer);
            ProductService.store(data, {headers: {'Content-Type': 'multipart/form-data'}})
                .then( res => {
                    this.submitted = true;
                })
                .catch( errors => {
                    if (errors.response.data.errors){
                        console.log(errors.response.data.errors);
                        this.errors = errors.response.data.errors;
                    }
                })

        },
    },
}
</script>

<style scoped>
.form-div{
    background-color: white; width: 50%; margin: auto;
}
.image-parent{
    width: 50%;
    height: 165px;
    margin-top: 10px;
}
#imagePreview{
    background-repeat: no-repeat;
    height: 210px;
}
</style>
