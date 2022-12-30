import {createStore, Store} from "vuex";

const store = createStore({
    state: {
        //define variables
        token: localStorage.getItem('token') || null,
        user: null
    },
    mutations: {
        // update variable value
        UPDATE_TOKEN(state, payload) {
            state.token = payload.token
            state.user = payload.user
        }
    },
    actions: {
        // action to be performed
        setToken(context, payload) {
            localStorage.setItem('token', payload.token);
            context.commit('UPDATE_TOKEN', payload)
        },
        removeToken(context){
            localStorage.removeItem('token');
            context.commit('UPDATE_TOKEN', {token : null, user : null});
        }

    },
    getters: {
        // get state variable value
        getToken: function (state) {
            return state
        }
    }
})

export default store;
