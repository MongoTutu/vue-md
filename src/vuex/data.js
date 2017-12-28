import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        tab: 1,
        name: 'tutu',
        count: 3,
        page: []
    },
    mutations: {
        adds(state) {
            state.count++;
        },
        pagePush(state, nav) {
            state.page.push(nav);
        },
        pagePop(state){
            state.page.pop();
        }
    },
    getters: {
        page(state){
            return state.page;
        }
    }
})