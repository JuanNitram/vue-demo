import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: []
    },

    mutations: {
        setUsers: function(state, users) {
            state.users = users;
        }
    },

    actions: {
        getUsers: async function({ commit }) {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            commit('setUsers', data);
        }
    }
})

export default store;