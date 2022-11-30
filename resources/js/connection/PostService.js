import http from "./http-common.js";

class PostService {

    getAll (){
        return http.get('/post');
    }

    get(id) {
        return http.get(`/post/${id}`);
    }

    store(data) {
        return http.post("/post", data);
    }

    update(id, data) {
        return http.put(`/post/${id}`, data);
    }

    delete(id) {
        return http.delete(`/post/${id}`);
    }

    // findByTitle(title) {
    //     return http.get(`/post?title=${title}`);
    // }
}

export default new PostService();
