import axios from "axios";
import store from "./store.js";
axios.defaults.withCredentials = true;

const http =  axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-type": "application/json"
    }
});
http.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    // config.headers.Authorization = `Bearer ${store.state.token}`
    return config;
})
export default http;
