import { defineStore } from "pinia";

export const StoreUser = defineStore('UserStoreId',{

    state: () => ({
        token: localStorage.getItem('token') || null,
    }),

    getters: {
        getToken: function(){
            return this.token
        }
    },

    actions: {
        setToken: function(token){
            this.token = token
            localStorage.setItem('token',token)
        },

        removeToken: function(){
            this.token = null
            localStorage.removeItem('token')
        }
    }
})
