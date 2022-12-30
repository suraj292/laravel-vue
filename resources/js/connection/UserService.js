import http from "./http-common.js";

class UserService {

    get (){
        return http.get('user');
    }

    // store(data) {
    //     return http.post("/post", data);
    // }
    //
    // update(id, data) {
    //     return http.put(`/post/${id}`, data);
    // }
}

export default new UserService();
