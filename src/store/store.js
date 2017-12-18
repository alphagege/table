import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
    count:'2'
}

const mutations = {
    add(state){
        state.count++
    },
    red(state){
        state.count--
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store