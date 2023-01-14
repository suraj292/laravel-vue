import { defineStore } from "pinia";

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const StoreCart = defineStore('UserCart',{

    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    }),
    getters: {
        getCart: function(){
            return this.cart
        }
    },
    actions: {
        addProduct: function(product){
            let data = this.cart.find(el => el.id === product.id);
            if(data){
                data.quantity++
            }else{
                this.cart.push(product)
            }
            updateCart(this.cart)
        },

        removeProduct: function(id){
            const indexToRemove = this.cart.findIndex((pl) => pl.id === id);
            this.cart.splice(indexToRemove, 1);
            updateCart(this.cart)
        }
    }
})
