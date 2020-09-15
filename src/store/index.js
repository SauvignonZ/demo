import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        iscollapse:false,
    },
    mutations:{
        TOOGGLE(state){
           state.iscollapse = true
        }
    }
})