import http from "./http-common.js";

class ProductService {

    getAll (){
        return http.get('product');
    }

    get(id) {
        return http.get(`product/${id}`);
    }

    store(data) {
        return http.post("product", data);
    }

    update(id, data) {
        return http.put(`product/${id}`, data);
    }

    delete(id) {
        return http.delete(`product/${id}`);
    }

    // findByTitle(title) {
    //     return http.get(`/product?title=${title}`);
    // }
}

export default new ProductService();
