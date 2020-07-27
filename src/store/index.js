/**
 * Created by Lucas on 2020/7/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = () => ({
    menuFold: false
});
const getters = {};
const mutations = {
    setMenuFold(state, payload) {
        state.menuFold = payload;
    }
};
const actions = {};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
