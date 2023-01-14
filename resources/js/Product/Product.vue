<template>
    <div class="container mt-5">
        <div class="row py-5 px-3 rounded form-div" style="background-color: white; width: 60%; margin: auto;">
            <div class="alert alert-success" v-if="deleteSuccess">Post has been deleted.</div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit / Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in products" :key="index" >
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ product.title }}</td>
                    <td>
                        <img :src="product.image" alt="product">
                    </td>
                    <td>{{ product.price }}</td>
                    <td>
                        <router-link class="btn btn-sm btn-primary mx-1" :to="`/product/edit/${product.id}`">Edit</router-link>
                        <button class="btn btn-sm btn-danger mx-1" @click="productDelete(product.id)">Delete</button>
                        <button class="btn btn-sm btn-success mx-1" @click="addToCart(product)">AddToCart</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ProductService from "@/connection/ProductService";
import {StoreCart} from "@/Store/StoreCart";
export default {
    name: "Product",
    data() {
        return {
            products: [],
            deleteSuccess: null,
        }
    },
    methods:{
        getProduct(){
            ProductService.getAll()
                .then(response => {
                    this.products = response.data.Products
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addToCart(product){
            const data = {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                offer: product.offer,
                quantity: 1
            }
          StoreCart().addProduct(data)
        },
        productDelete($id){
            ProductService.delete($id)
                .then(response => {
                    this.getProduct()
                    this.deleteSuccess = true;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.getProduct()
    }
}
</script>

<style scoped>
img{
    width: 80px;
}
</style>
