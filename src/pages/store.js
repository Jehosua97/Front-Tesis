import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userInfo:{}
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo = {userName:userInfo.userName, token:userInfo.token}
        }
    },
    actions:{
        initialize(context,param){
            context.commit("setUserInfo",param);
        }
    },
    getters:{
        getUserInfo(state){
            return state.userInfo;
        }
    }
})